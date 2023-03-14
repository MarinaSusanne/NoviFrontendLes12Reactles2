import React from 'react';

function Tile({title,img,altText,children}) {
    return (
        <section>

            <img src={img} alt={altText}/>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
}

export default Tile;