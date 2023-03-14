import React from 'react';
import './App.css';
import Product from "./components/Product/Product";
import bag_one from "./assets/bag_1.png";
import Tile from "./components/Tile/Tile";
import Button from "./components/Button/button";
import bag_two from "./assets/bag_2.png";
import bag_three from "./assets/bag_3.png";
import bag_four from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button
                  isDisabled={false}
                  clickHandler={() => console.log("To the collection!")}>
                  To the collection
              </Button>
              <Button
                  isDisabled={false}
                  clickHandler={() => console.log("Shop all bags!")}>
                  Shop all bags
              </Button>
              <Button
                  isDisabled={true}
                  clickHandler={() => console.log("To the pre-orders!")}>
                  Pre-orders
              </Button>
        </nav>
    <main>
          <Product
            label="Best seller"
            img={bag_one}
            altTex="Mooie tas"
            nameBag="The handy bag"
            price="400,-">
          </Product>

          <Product
            label="Best seller"
            img={bag_two}
            altTex="Mooie tas"
            nameBag="The Stylish bag"
            price="250,-">
          </Product>

          <Product
            label="New Collection"
            img={bag_three}
            altTex="Mooie tas"
            nameBag="The simple bag"
            price="300,-">
          </Product>

        <Product
            label="New collection"
            img={bag_four}
            altTex="Mooie tas"
            nameBag="The trendy bag"
            price="150,-">
        </Product>

        </main>
          <footer>
              <Tile title="The brand">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
              </Tile>
              <Tile
              img={brand}
              altText="Brand logo">
              </Tile>
              <Tile
                  img={our_story}
                  altText="designers">
              </Tile>
              <Tile title="Our Story">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
              </Tile>

          </footer>
      </>
  );
}

export default App;



