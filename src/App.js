import React from 'react';
import './App.css';
import Product from "./components/Product/Product";
import bag_one from "./assets/bag_1.png";
import bag_two from "./assets/bag_2.png";
import bag_three from "./assets/bag_3.png";
import Tile from "./components/Tile/Tile";


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>

      <Product
        label="New to the collection"
        img={bag_one}
        altTex="Mooie tas"
        nameBag="naam"
        price={300}
      />
        {/*<Product*/}
        {/*  label="Sold out"*/}
        {/*  img={bag_two}*/}
        {/*  altTex={}*/}
        {/*  nameBag={}*/}
        {/*  price={}*/}
        {/*/>*/}
        {/*<Product*/}
        {/*  label={}*/}
        {/*  img={bag_three}*/}
        {/*  altTex={}*/}
        {/*  nameBag={}*/}
        {/*  price={}*/}
        />
          <footer>
              <Tile title="Test">
                  <p> Lorem ipsum </p>
              </Tile>
          </footer>
      </>
  );
}

export default App;



