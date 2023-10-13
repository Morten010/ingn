import React from 'react'



export default function NewsLayout({children}: {
    children: React.ReactNode
}) {
  return (
    <div
    className='news-grid'
    >
        {children}
    </div>
  )
}
