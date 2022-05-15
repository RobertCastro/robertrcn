import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Home/Header/Index'
import { Helmet } from 'react-helmet'
import Moment from 'react-moment';

const Blog = () => {

  const { id } = useParams()
  const [blog, setBlog] = useState({})
  const api = `https://test.canalrcndigital.com/json/${id}.json`

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
    <>
      {blog.metatags != undefined ? (
        <div>
          <Helmet>
            <meta name="robots" content="index" />
            <title>{blog.title}</title>
            <meta name="description" content={blog.metatags.es.description.value} />
            <meta property="og:type" content="article" />
            <meta name="author" content={blog.user.name} />
            <meta property="og:title" content={blog.title} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content={image.src} />
            <meta property="og:description" content={blog.metatags.es.description.value} />
            <link rel="canonical" href={window.location.href} />
            {/* <meta property="article:published_time" content={<Moment>{created_at}</Moment> } />
            <meta property="article:modified_time" content={<Moment>{updated_at}</Moment>} /> */}
            
          </Helmet>
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

      ) : (' ') }

    </>

  )
}

export default Blog
