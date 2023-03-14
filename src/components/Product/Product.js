import React from 'react';

function Product({label, img, altTex, nameBag, price }) {
    return (
        <article>
         <span>{label}</span>
            <img src={img} alt={altTex}/>
            <p>{nameBag}</p>
            <h4>€{price}</h4>
        </article>
    );
}

export default Product;