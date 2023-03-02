import React from 'react'
import Card from './searchresults/Card'

const cardsList = [
  {
    id: 1,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  },
  {
    id: 2,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  },
  {
    id: 3,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  },
  {
    id: 4,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  },
  {
    id: 5,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  },
  {
    id: 6,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  },
  {
    id: 7,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  },
  {
    id: 8,
    title: "Foundation",
    body: "Lorem ipsum dolor sit amet consec tetur, adipisi cing elit. Volup tatem beat ae dicta maiores susc ipit num quam earum, odit totam obc aecati prov ident a",
    views: 200,
    likes: 1,
  }
]

const SearchResults = () => {
  return (
    // Search results container (to display cards)
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3 sm:px-12 py-3 sm:py-6'>
      {
        cardsList.map(cardData => {
          return <Card
            key={cardData.id}
            title={cardData.title}
            body={cardData.body}
            viewCount={cardData.views}
            likeCount={cardData.likes}
          />
        })
      }
    </div>
  )
}

export default SearchResults
