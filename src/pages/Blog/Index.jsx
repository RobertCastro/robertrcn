import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Home/Header/Index'
import { Helmet } from 'react-helmet'
import Moment from 'react-moment';
import './style.css'

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
        <div className='main'>
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
            
          </Helmet>
          <Header />
          <div className='container'>
            <article>
              <header>
                <img src={image.src} />
                <span className='tag is-link is-normal antetitulo'>{blog.antetitulo}</span>
                <h1 className='subtitle is-1 has-text-weight-bold'>{blog.title}</h1>
                <span className='tag is-primary'>{blog.seccion.name}</span>
                <p className='sumario'>{blog.sumario}</p>
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
        </div>

      ) : (' ') }

    </>

  )
}

export default Blog
