import React from 'react'

//Nelle props del componente definisco gli elementi dinamici (props è un oggetto)
// Destrutturazione oggetto props per rendere il codice più chiaro e manutenibile
const Product = ({id, name, image}) => {
  return (
    // React.Fragment = Wrapper che sostituisce <div> o altri tag e che non viene inserito nell'html
    <React.Fragment>
        <div className="card" id={`product-${id}`}>
          <h2>{name}</h2>
          <img className="card-img" src={image} alt={`${image}`}></img> {/*Entrambe le sitassi sono possibili*/}
          {/*Evento on click sul button dichiarato ad inizio componente*/}
          <button>Button</button>
        </div>
    </React.Fragment>
  )
}

export default Product