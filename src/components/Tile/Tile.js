import React from 'react';

function Tile({title,img,altText,children}) {
    return (
        <section>
            {img && <img src={img} alt={altText}/>}
            <h2>{title}</h2>
            {children}
        </section>
    );
}


/*conditioneel renderen -zodat image ook niet te 'zien' is in tile, tenzij er een plaatje in zit. Dus met img && controleert applicatie of er een image is. Soms komt er wel een image, en soms niet*/

export default Tile;