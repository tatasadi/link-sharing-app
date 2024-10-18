'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import IconImage from './icons/icon-image'
import { useStore } from '@/app/useStore'
import { useDropzone, FileRejection, FileWithPath } from 'react-dropzone'
import { useToast } from '@/hooks/use-toast'
import { MdError } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import { deleteFile, uploadFile } from '@/actions/aws'

export default function Upload({ className = '' }: { className?: string }) {
	const { toast } = useToast()
	const { profileImageUrl: imageSrc, updateProfileImageUrl } = useStore()
	const [files, setFiles] = useState<(FileWithPath & { preview: string })[]>([])

	// Callback for handling file drop
	const onDrop = useCallback(
		async (acceptedFiles: FileWithPath[], rejectedFiles: FileRejection[]) => {
			// Handle accepted files
			if (acceptedFiles?.length) {
				// remove file if already present
				console.log('imageSrc', imageSrc)
				if (imageSrc) {
					console.log('deleting last image')
					const response = await deleteFile(imageSrc)
					console.log('response', response)
				}
				setFiles(prevFiles => [
					...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })),
				])
			}

			// Handle rejected files
			if (rejectedFiles?.length) {
				toast({
					description: (
						<span className="flex items-center gap-4">
							<MdError className="text-xl" />
							<span>{rejectedFiles[0].errors[0].message}</span>
						</span>
					),
					variant: 'destructive',
				})
			}
		},
		[imageSrc, toast],
	)

	// Setup the dropzone
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: {
			'image/*': [],
		},
		maxSize: 1024 * 2000, // 2 MB limit
		maxFiles: 1,
		onDrop,
	})

	// Clean up the file previews when component unmounts or files change
	useEffect(() => {
		async function uploadImage() {
			if (files[0]) {
				const formData = new FormData()
				formData.append('file', files[0])
				const response = await uploadFile(formData)
				if (response.status === 'success') {
					updateProfileImageUrl(response.profileImageUrl ?? '')
				}
				toast({
					description: response.message,
					variant: response.status === 'success' ? 'default' : 'destructive',
				})
			}
		}
		uploadImage()

		return () => files.forEach(file => URL.revokeObjectURL(file.preview))
	}, [files, toast, updateProfileImageUrl])

	const handleRemoveFile = async () => {
		if (!imageSrc) return
		updateProfileImageUrl('')
		setFiles([])
		const response = await deleteFile(imageSrc)
		toast({
			description: response.message,
			variant: response.status === 'success' ? 'default' : 'destructive',
		})
	}

	return (
		<div className={cn('relative grid sm:grid-cols-[1fr_auto] sm:items-center gap-6', className)}>
			<div
				{...getRootProps({
					className: cn(
						'relative rounded-xl overflow-hidden aspect-square cursor-pointer px-6 py-8 md:px-10 md:py-[3.75rem] w-[13rem]',
						imageSrc ? 'bg-black' : 'bg-light-purple',
						isDragActive && 'border-purple border',
					),
				})}
			>
				{imageSrc && (
					<Image
						src={imageSrc}
						alt="uploaded image"
						className="absolute inset-0 object-cover object-center z-0 h-full w-full opacity-75"
						width={400}
						height={400}
					/>
				)}
				<span
					className={cn(
						'z-10 relative grid place-content-center place-items-center justify-center h-full gap-2',
						imageSrc ? 'text-white' : 'text-purple',
					)}
				>
					<IconImage />
					<span className="text-semibold">
						{imageSrc ? 'Change Image' : isDragActive ? 'Drop Image' : '+ Upload Image'}
					</span>
				</span>
				<input {...getInputProps({ name: 'file' })} />
			</div>
			{/* Trash Icon for Removing Image */}
			{imageSrc && (
				<button
					type="button"
					className="absolute top-4 left-4 flex items-center justify-center text-white z-10"
					onClick={handleRemoveFile}
				>
					<FaRegTrashAlt className="h-5 w-5 text-red-500" />
				</button>
			)}
			<p className="text-xs text-gray">Image must be below 1024x1024px. Use PNG or JPG format.</p>
		</div>
	)
}
