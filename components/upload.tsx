'use client'
import { cn } from '@/lib/utils'
import { Label } from './ui/label'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import IconImage from './icons/icon-image'
import { useStore } from '@/app/useStore'
import { useDropzone, FileRejection, FileWithPath } from 'react-dropzone'
import { useToast } from '@/hooks/use-toast'
import { MdError } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'

export default function Upload({ className = '' }: { className?: string }) {
	const { toast } = useToast()

	const { profileImage, updateProfileImage, removeProfileImage } = useStore()
	const [imageSrc, setImageSrc] = useState<string | null>(null)
	const [files, setFiles] = useState<(FileWithPath & { preview: string })[]>([])

	// Callback for handling file drop
	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[], rejectedFiles: FileRejection[]) => {
			// Handle accepted files
			if (acceptedFiles?.length) {
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
		[toast],
	)

	// Setup the dropzone
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: {
			'image/*': [],
		},
		maxSize: 1024 * 1000, // 1 MB limit
		maxFiles: 1,
		onDrop,
	})

	// Clean up the file previews when component unmounts or files change
	useEffect(() => {
		if (files[0]) {
			updateProfileImage(files[0])
		}

		return () => files.forEach(file => URL.revokeObjectURL(file.preview))
	}, [files, updateProfileImage])

	useEffect(() => {
		if (profileImage.image) {
			setImageSrc(URL.createObjectURL(profileImage.image))
		}
	}, [profileImage.image])

	const handleRemoveFile = () => {
		setImageSrc(null)
		setFiles([])
		removeProfileImage()
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
						width={48}
						height={48}
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
