import React from "react";

function Card({ title, fecha, field_image, field_seccion, field_descripcion }) {

    return(
        <div className="column is-one-quarter">
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                        <img src={field_image.src} alt={field_image.alt} />
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
                    <time datetime="2016-1-1">{fecha}</time>
                        <span className="tag is-link">{field_seccion}</span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Card;