// uploadFile.ts
'use server';

import { revalidatePath } from 'next/cache';
import sharp from 'sharp';
import { auth } from '@/auth';
import { db } from '@/prisma/db';
import { uploadFileToAzure, deleteFileFromAzure } from '@/actions/azure-blob-storage';

export async function uploadFile(formData: FormData): Promise<{
    status: string;
    message: string;
    profileImageUrl?: string;
}> {
    const session = await auth();
    if (!session) {
        throw new Error('Not authenticated');
    }
    const userId = session.user?.id;
    if (!userId) throw new Error('User not authenticated');

    const file = formData.get('file') as File;
    try {
        if (!file || file.size === 0) {
            return { status: 'error', message: 'Please select an image.' };
        }

        // Convert the File to a Buffer
        const buffer = Buffer.from(await file.arrayBuffer());

        // Process the image (resize, convert to JPEG)
        const processedBuffer = await sharp(buffer)
            .jpeg()
            .resize(1024, 1024, { fit: 'cover', position: 'center' })
            .toBuffer();

        // Upload the processed image to Azure Blob Storage
        const { blobUrl, uniqueFileName } = await uploadFileToAzure(processedBuffer, 'image/jpeg');

        // Instead of exposing blobUrl directly, create a proxy URL:
        const proxyUrl = `/api/images/${uniqueFileName}`;

        // Save the proxy URL and unique file name in your database
        await db.user.update({
            where: { id: userId },
            data: { profileImageUrl: proxyUrl, azureBlobFileName: uniqueFileName },
        });

        revalidatePath('/');
        return { status: 'success', message: 'File has been uploaded.', profileImageUrl: proxyUrl };
    } catch (error: any) {
        console.error(error);
        return { status: 'error', message: 'Failed to upload file.' };
    }
}

export async function deleteFile(url: string): Promise<{ status: string; message: string }> {
    const session = await auth();
    if (!session) {
        throw new Error('Not authenticated');
    }
    const userId = session.user?.id;
    if (!userId) throw new Error('User not authenticated');

    // Retrieve the file name stored in the database (stored as azureBlobFileName)
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user || !user.azureBlobFileName) {
        throw new Error('No file to delete');
    }

    try {
        // Delete the file from Azure Blob Storage
        await deleteFileFromAzure(user.azureBlobFileName);

        // Update the database to remove the stored file URL and file name
        await db.user.update({
            where: { id: userId },
            data: { profileImageUrl: null, azureBlobFileName: null },
        });
        return { status: 'success', message: 'File deleted successfully.' };
    } catch (error: any) {
        console.error('Error deleting file:', error);
        throw new Error('Failed to delete file.');
    }
}
