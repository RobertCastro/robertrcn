import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Home/Header/Index'

const Blog = () => {

  const { id } = useParams()
  const [ blog, setBlog ] = useState([])
  let api = `https://test.canalrcndigital.com/json/${id}.json`

  const getData = async () => {
    const response = await fetch(api);
    const responseJSON = await response.json();
    setBlog(responseJSON);
  }

  useEffect(() => {
    getData()
  }, [])

  let image = blog.imagen_apertura ? blog.imagen_apertura : ''
  
  return (
    <div>
      <Header />
      <article>
        <header>
          <img src={image.src} />
          <h1 className='subtitle is-1'>{blog.title}</h1>
        </header>
        <div className='content'>
          <div
            dangerouslySetInnerHTML={{
              __html: blog.body
            }}>
          </div>
        </div>
      </article>

    </div>

  )
}

export default Blog
