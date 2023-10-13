import {Link} from "react-router-dom"
import { GetAlpahbetEq } from '../utils/getAlphabetEq';
import {useUser} from "@clerk/clerk-react"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export default function NewsCard({
    index, 
    title,
    content,
    slug,
    author,
    img
}: {
    index: number;
    title: string
    content: string
    slug: string
    author: string
    img: {
        __typename?: "Asset" | undefined;
        url: string;
    }
}) {
    const { isLoaded, isSignedIn, user } = useUser();
    console.log(user);
    

  return (
    <div
    className={`bg-brand-white relative overflow-hidden flex flex-col
    ${index === 5 ? "flex sm:flex-row" : index === 6 ? "flex sm:flex-row-reverse" : ""}
    
    `}
    style={{
        gridArea: GetAlpahbetEq(index) 
    }}
    >
        {user && (
            <div
            className='flex gap-2 text-2xl absolute right-3 top-3 text-brand-red'
            >
                <AiFillEdit 
                className="hover:opacity-75 transition-opacity"
                />
                <AiFillDelete 
                className="hover:opacity-75 transition-opacity"
                />
            </div>
        )}
        <div
        className='p-3 flex flex-col gap-2 font-light'
        >
            <h2
            className='text-2xl max-w-[80%]'
            >
                {title}
            </h2>
            <p>
                {content.slice(0, 50)}...
            </p>
            <span
            className='text-brand-red font-light'
            >
                D. 18/08-2023 - af {author}
            </span>
            <Link
            to={`/nyheder/${slug}`}
            className='font-normal'
            >
                Læs mere
            </Link>
        </div>
        <img 
        src={img.url}
        alt={title} 
        className={`flex-grow object-cover 
        ${index === 5 ? "sm:w-2/4" : index === 6 ? "sm:w-2/4" : ""}
        ${index === 7 ? "sm:hidden" : index === 8 ? "sm:hidden" : ""}
        `}
        />
    </div>
  )
}
