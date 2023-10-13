import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { gql } from '../__generated__';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { getNewsPostsByCategory } from '../gql/queries';
import NewsLayout from '../layout/NewsLayout';
import Loader from '../components/Loader';
import NewsCard from '../components/NewsCard';

  loadDevMessages();
  loadErrorMessages();



export default function CategoryPage() {
    const {id} = useParams()
    console.log(id);

    if(!id) return(
      <p>
        Page does not exist
      </p>
    )

    const {data, loading, error} = useQuery(getNewsPostsByCategory, {
      variables: {
        id: id
      }
    })


    const nyheder = data?.kategori?.nyheds

    if(!nyheder){
      return (
        <div
        className='max-w-screen-lg mx-auto p-3'
        >
          <p>
            Ingen articler her
          </p>
        </div>
      )
    }

    const l = Math.ceil(nyheder?.length / 9);
     
    const articles = []
    for(let i = 0; i < l; i++){
      const start = i !== 0 ? i * 9  : 1
      console.log(nyheder.slice(start, start + 9));
      articles.push(nyheder.slice(start, start + 9))
    }
    
    if(loading) return (
      <div
      className='min-h-[60vh]'
      >
        <Loader />
      </div>
    )

    if(error){
        return(
            <p>Error</p>
        )
    }


  return (
    <div
    className='max-w-screen-lg mx-auto p-3 flex flex-col gap-3'
    >
        <h1
        className='text-3xl'
        >
          {data?.kategori?.category}
        </h1>
        {articles && articles.map((group, index) => (
          <NewsLayout
          key={"group " + index}
          >
            {group.map((n, index) => (
              <NewsCard
              author={n.forfatter?.navn!} 
              content={n.indhold}
              img={n.thumbnail}
              index={index}
              slug={n.slug}
              title={n.title}
              key={n.id}
              />
            ))}
        </NewsLayout>
        ))}
        {articles.length === 0 && (
          <p>
            Ingen artikler her
          </p>
        )}
    </div>
  )
}
