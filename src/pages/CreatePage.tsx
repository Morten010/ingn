import { useMutation, useQuery } from "@apollo/client"
import { insertBulkPosts } from "../gql/mutations"
import { useReducer, useState } from "react"

import Mdx from "../components/Mdx"
import Editor from "../components/Editor"
import { useUser } from "@clerk/clerk-react"
import { slugify } from "../utils/Slugify"
import ImageUpload from "../components/dropzone/ImageUpload"
import { convertFile } from "../utils/convertFile"
import { upload } from "../utils/upload"
import { getNav } from "../gql/queries"

export type FormProps = {
    title: string
    dato: Date
    excerpt: string,
    indhold: string,
    thumbnail: string | undefined,
}



export default function CreatePage() {
    const [selectedImage, setSelectedImage] = useState<string[]>([])
    const [makeNewsPost, { data, loading, error }] = useMutation(insertBulkPosts)
    const [formState, formDispatch] = useReducer((prev: FormProps, next: FormProps) => {
        return {...prev, ...next}
    }, {
        dato: new Date(),
        title: "",
        excerpt: "",
        indhold: "",
        thumbnail: undefined,

    })

    const {data: categories, error: categoriesError, loading: loadingError} = useQuery(getNav)


    console.log(data);
    console.log(error);
    
    
    const handleMarkdownChange = (e: string) => {
        formDispatch({
            ...formState,
            indhold: e
        })
    }

    const { isLoaded, isSignedIn, user } = useUser();
    console.log(user);

    const handlePost = async () => {
        console.log({
            data: {
                dato: formState.dato,
                excerpt: formState.excerpt,
                indhold: formState.indhold,
                slug: slugify(formState.title),
                thumbnail: {
                    connect: {
                        id: ""
                    }
                },
                title: formState.title,
            },
        });
        
        const newFile = await convertFile(selectedImage)
        
        const res = await upload(newFile[0])

        await makeNewsPost({
            variables: {
                data: {
                    dato: formState.dato,
                    excerpt: formState.excerpt,
                    indhold: formState.indhold,
                    slug: formState.title.trim().replace(" ", "-").replace("ø", "oe").replace("å", "aa").toLowerCase(),
                    thumbnail: {
                        connect: {
                            id: res.data.id
                        }
                    },
                    title: formState.title,
                },
            }
        })
    }

  return (
    <div
    className="max-w-screen-lg mx-auto p-3"
    
    >
        <div
        className="bg-brand-white p-3"
        >
            <h1
            className="text-2xl"
            >
                Create blog post
            </h1>
            <label
            className="flex flex-col"
            >
                <span>
                    Title
                </span>
                <input 
                className='border-2 text-lg border-brand-red max-w-[350px]' 
                type="text"
                value={formState.title}
                onChange={(e) => formDispatch({
                    ...formState,
                    title: e.currentTarget.value
                })}
                />
            </label>
            <span>Thumbnail</span>
            <ImageUpload
            selectedImages={selectedImage} 
            setSelectedImages={setSelectedImage} 
            />
            <label
            className="flex flex-col"
            >
                <span>
                    Excerpt - kort resume
                </span>
                <input 
                className='border-2 text-lg border-brand-red max-w-[350px]' 
                type="text"
                />
            </label>

            <span>
                indhold
            </span>
            <Editor 
            indhold={formState.indhold}
            update={handleMarkdownChange}
            />
            
            <Mdx>
                {formState.indhold}
            </Mdx> 

            <button
            onClick={() => handlePost()}
            disabled={loading}
            className={`mt-6 border-2 border-brand-red py-2 px-8 hover:bg-brand-red/10 transition-colors  ${loading ? "opacity-60" : ""}`}
            >
               {loading ? "Submitting" : "Submit"}
            </button>
        </div>   
    </div>
  )
}
