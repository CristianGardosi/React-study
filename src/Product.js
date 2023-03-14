import React from 'react'

const Product = () => {
  // Qua posso definire le mie variabili
  const image = "https://media.costadelmar.com/cms/resource/image/88002/landscape_ratio1440x480/2880/960/7be350e6699103e01032099cee163365/5288D6DE764E220D02391D72D4706735/hpbanner-corbinapro.jpg";
  return (
    // React.Fragment = Wrapper che sostituisce <div> o altri tag e che non viene inserito nell'html
    <React.Fragment>
        <div className="card">
            <img className="card-img" src={`${image}`} alt={`${image}`}></img> {/*oppure semplicmente src={image}*/}
        </div>
    </React.Fragment>
  )
}

export default Product