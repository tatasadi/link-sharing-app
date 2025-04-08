'use server'

import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { v4 as uuidv4 } from 'uuid';

if (!process.env.AZURE_STORAGE_CONNECTION_STRING || !process.env.AZURE_STORAGE_CONTAINER_NAME) {
    throw new Error('Missing Azure Storage configuration environment variables');
}

const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_CONNECTION_STRING
);
const containerClient = blobServiceClient.getContainerClient(process.env.AZURE_STORAGE_CONTAINER_NAME);

/**
 * Uploads a file buffer to Azure Blob Storage.
 * @param fileBuffer - The file data as a Buffer.
 * @param contentType - The MIME type of the file.
 * @returns An object with the blob URL and the generated unique file name.
 */
export async function uploadFileToAzure(
    fileBuffer: Buffer,
    contentType: string
): Promise<{ blobUrl: string; uniqueFileName: string }> {
    // Generate a unique file name (using UUID and .jpg extension)
    const uniqueFileName = `${uuidv4()}.jpg`;
    const blockBlobClient: BlockBlobClient = containerClient.getBlockBlobClient(uniqueFileName);

    // Upload the file data to the blob with proper content type headers
    await blockBlobClient.uploadData(fileBuffer, {
        blobHTTPHeaders: { blobContentType: contentType },
    });

    return { blobUrl: blockBlobClient.url, uniqueFileName };
}

/**
 * Deletes a file from Azure Blob Storage.
 * @param fileName - The unique file name (key) in the blob container.
 */
export async function deleteFileFromAzure(fileName: string): Promise<void> {
    const blockBlobClient: BlockBlobClient = containerClient.getBlockBlobClient(fileName);
    await blockBlobClient.deleteIfExists();
}


