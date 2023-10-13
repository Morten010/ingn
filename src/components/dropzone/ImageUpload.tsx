import { LuImageOff } from 'react-icons/lu'
import CustomDropZone from './CustomDropZone' 

type ImageUploadProps = {
    setSelectedImages: ([]: string[]) => void
    selectedImages: string[]
}

export default function ImageUpload({setSelectedImages, selectedImages}: ImageUploadProps) {

    // when files are selected
    const onSelectFile = (selectedFiles: File[]) => {
        const selectedFilesArray = Array.from(selectedFiles)
        
        // make array of new images
        const imageArray = selectedFilesArray.map((file) =>{
            return URL.createObjectURL(file as Blob | MediaSource)
        })
        
        const sortedSelectImages = selectedImages.filter(image => {
            if(image){
                return image
            }
        })
        
        setSelectedImages([imageArray[0]])
    }

  return (
    <div
    >
        {/* top image */}
        {selectedImages[0] !== undefined && <div
        className='relative aspect-video rounded-md overflow-hidden w-full'
        >
            <img 
            src={selectedImages[0]}
            alt='Image'
            className='object-cover w-full aspect-video'
            />    
        </div>}
        {selectedImages[0] === undefined && <div
        className='relative aspect-video w-full bg-gray-300 grid place-content-center text-center rounded-md'
        >
                <LuImageOff
                className='text-8xl text-white'
                />
                <p
                className='text-white font-semibold text-lg'
                >
                    No image
                </p>
        </div>}
        {/* end of top image */}


        <div
        className="flex justify-between items-center mb-2 mt-4"
        >
            <h2
            className='font-medium'
            >
                Cover Image
            </h2>   
            <button
            onClick={() => setSelectedImages([])}
            >
                Remove image
            </button>
        </div>
        
        <CustomDropZone handleFiles={onSelectFile} />

    </div>
  )
}
