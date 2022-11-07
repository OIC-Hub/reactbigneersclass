 import React from 'react';
 import ReactDOM from 'react-dom/client';

 let img = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/626048/1.jpg?1723";
 let content  = "Costa Sardine In Vegetable Oil 125g x 1";
 let price =455;
 let productName = 'Costa Sardine';

 let img2 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/5167301/1.jpg?7673";
 let content2  = "EILIFINTE B06 Casual Crossbody Shoulder Chest Bag-Grey";
 let price2 =100;
 let productName2 = 'EILIFINTE';

  function App(){
      return (
        <div>
       <Product  imgsrc={img} content={content} price={price}  productname={productName}/>
       <Product  imgsrc={img2} content={content2} price={price2}  productname={productName2} />
        </div>
       )
  }
 const Product = ({imgsrc, content, price, productname})=>{
  // console.log(props)
 
//  const {imgsrc, content, price, productname} = props;
 return ( 
 <>
    {productname}
    <br />
    <img src={imgsrc} />
    <div>{content} </div>
    <br />
   ${price}
  </>
  )
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
