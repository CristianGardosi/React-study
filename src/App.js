import Product from "./Product";

// Oggetto che popola le mie props definite in Product.js
const productData = {
  name: "Nome prodotto",
  image: "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg"
}

function App() {
  return (
    <div className="App">
      {/*Inserisco componente e props*/} 
      {/*OPPURE POSSO USARE SPREAD OPERATOR {...productData} 
      che se c'è corrispondenza tra props nel componente e chiavi nell'oggetto sostituisce la logica di riscrittura che vediamo qua*/}
      <Product name={productData.name} image={productData.image}></Product>
    </div>
  );
}
export default App;
