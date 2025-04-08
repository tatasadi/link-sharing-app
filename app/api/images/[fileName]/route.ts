import { NextResponse } from 'next/server';
import { BlobServiceClient } from '@azure/storage-blob';

export async function GET(
    request: Request,
    { params }: { params: { fileName: string } }
) {
    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
    const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME;
    if (!connectionString || !containerName) {
        return new NextResponse('Missing storage configuration', { status: 500 });
    }

    try {
        const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobClient = containerClient.getBlobClient(params.fileName);

        // Get blob properties (to determine content type, etc.)
        const properties = await blobClient.getProperties();
        const contentType = properties.contentType || 'application/octet-stream';

        // Download the blob as a Buffer
        const buffer = await blobClient.downloadToBuffer();

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': contentType,
                'Content-Length': buffer.length.toString(),
            },
        });
    } catch (error) {
        console.error('Error fetching blob:', error);
        return new NextResponse('Error fetching image', { status: 500 });
    }
}
