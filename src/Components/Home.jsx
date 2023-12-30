import React, { useState } from 'react';
import Products from './HomeComp/Products';
import Categories from './HomeComp/Categories';

function Home ()
{
  const[CategoryFilter,setCategoryFilter] = useState("")

  return (
    <div>
      <div className='Landing d-flex justify-content-center align-items-center bg-dark' style={ { height: "80vh" } }>
        <div className='text-white text-center '>
          <h1 style={ { fontSize: "50px" } }>Hello to <span className='fw-bolder'>Easy<span className='text-success'>Mart</span></span> market !</h1>
          <p className='text-white-50'>find all your needs in one place,With one Click,Order Now!</p>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;