import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Card({ dato: { nid, title, fecha, field_seccion, field_image, field_descripcion }} ) {

  let image = JSON.parse(field_image)
  
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image.src} alt={image.alt} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">
            <p className="grey-light">{field_descripcion}</p>
            <time dateTime="2016-1-1">{fecha}</time>
            <p className="tag is-dark ">{field_seccion}</p>
            <Link to={`/blog/${nid}`} className='tag is-link'> Ver más 👉 </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;