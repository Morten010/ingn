import React from 'react'
import NewsCard from '../components/NewsCard'
import { useQuery } from '@apollo/client'
import NewsLayout from '../layout/NewsLayout'
import { getAllNewsPosts } from '../gql/queries'

export default function HomePage() {
    const {data, error, loading} = useQuery(getAllNewsPosts)
    console.log(data);
    
    
    if(!data) return (
        <p>
            loading
        </p>
    )

    const l = Math.ceil(data.nyheder?.length / 9);
     
    const articles = []
    for(let i = 0; i < l; i++){
      const start = i !== 0 ? i * 9  : 1
      articles.push(data.nyheder?.slice(start, start + 9))
    }

    console.log(articles);
    

  return (
    <div
    className='max-w-screen-lg mx-auto p-3 flex flex-col gap-3'
    >
        {articles && articles.map((group, index) => (
          <NewsLayout
          key={"group " + index}
          >
            {group.map((n, index) => (
              <NewsCard 
              content={n.indhold}
              img={n.thumbnail}
              author={n.forfatter?.navn!}
              index={index}
              slug={n.slug}
              title={n.title}
              key={n.id}
              />
            ))}
        </NewsLayout>
        ))}
    </div>
  )
}
