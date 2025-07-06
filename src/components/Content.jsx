import React from 'react'
import { useEffect, useState } from 'react'

import NewsItem from './NewsItem'

const Content = ({category}) => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    const apikey = import.meta.env.VITE_API_KEY
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`

    try {
      fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    } catch (error) {
      console.log(error.message)
    }

  }, [category])
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 inline-block pb-1 capitalize">
        {category} News
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles && articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              imageUrl={news.urlToImage}
              link={news.url}
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg">No articles found.</p>
        )}
      </div>
    </div>
  )
}

export default Content