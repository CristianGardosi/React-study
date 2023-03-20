import Product from "./Product";
import productsData from "./ProductsData";
function App() {
  return (
    <div className="App">
      <section className="products-section">
      {/*Itero con il metodo map il mio array di oggetti productsData poi returno il componente product con lo spread operator*/}
      {/*In questo modo mi crea un <product></Product> per ogni oggetto dell'array*/}
      {/*Attributo key valore univoco attribuito a ciascun product*/}
      {productsData.map((product) => {
        return <Product key={product.id} {...product}/>
      })}
      </section>
    </div>
  );
}

export default App;
