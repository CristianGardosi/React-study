import Product from "./Product";

// Oggetto che popola le mie props definite in Product.js
const productsData = [
  {
    name: "Nome prodotto 1",
    image: "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg"
  },
  {
    name: "Nome prodotto 2",
    image: "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg"
  },
  {
    name: "Nome prodotto 3",
    image: "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg"
  },
  {
    name: "Nome prodotto 4",
    image: "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg"
  },
  {
    name: "Nome prodotto 5",
    image: "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg"
  },
  {
    name: "Nome prodotto 6",
    image: "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg"
  }
] 

function App() {
  return (
    <div className="App">
      <section className="products-section">
      {/*Itero con il metodo map il mio array di oggetti productsData poi returno il componente product con lo spread operator*/}
      {/*In questo modo mi crea un <product></Product> per ogni oggetto dell'array*/}
      {productsData.map((product) => {
        return <Product {...product}/>
      })}
      </section>
    </div>
  );
}
export default App;
