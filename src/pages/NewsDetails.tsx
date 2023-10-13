import { useQuery } from '@apollo/client';
import {useParams} from "react-router-dom"
import Loader from '../components/Loader';
import Mdx from '../components/Mdx';
import { getOneNewsPost } from '../gql/queries';

export default function NewsDetails() {
    const {slug} = useParams()
    console.log(slug);

    if(!slug){
        return(
            <p>
                Could not get data
            </p>
        )
    }

    const {data, loading, error} = useQuery(getOneNewsPost, {
        variables: {
            slug: slug
        }
    })
    
    console.log(data);

    if(loading){
        return (
            <div
            className='h-[60vh] grid place-content-center'
            >
                <Loader />
            </div>
        )
    }
    

  return (
    <main
    className='p-3'
    >
        <article
        className='bg-brand-white max-w-screen-lg mx-auto'
        >
            <img 
            src={data?.nyhed?.thumbnail.url} 
            alt={data?.nyhed?.title} 
            className='aspect-video w-full'
            />
            
            <div
            className='p-3'
            >
                <h1
                className='text-3xl'
                >
                    {data?.nyhed?.title}
                </h1>
                <span
                className='text-brand-red'
                >
                    D. {new Date(data?.nyhed?.createdAt).toLocaleDateString()} - af {data?.nyhed?.forfatter?.navn}
                </span>
                <p
                className='max-w-[650px] font-light mx-auto mt-3'
                >
                    <Mdx>
                    {data?.nyhed?.indhold}
                    </Mdx>
                </p>
            </div>
        </article>
    </main>
  )
}
