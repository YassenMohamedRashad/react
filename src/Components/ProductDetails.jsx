import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProductDetails ()
{
  const [ Product, setProduct ] = useState( {} );

  const getProductFromApi = async () =>
  {
    const resp = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${ Params.id }`
    );
    setProduct( resp.data );
  };

  const Params = useParams();

  useEffect( () =>
  {
    getProductFromApi();
  } );

  return (
    <div className='container'>
      <div className='row p-5 mt-5 mb-5' style={{backgroundColor:"#eee",borderRadius:"50px"}}>
        <div className='col-md-6'>
          { Product.images && Product.images.length > 0 && (
            <img src={ Product.images[ 0 ] } className='w-100' />
          ) }
        </div>

        <div className='col-md-6'>
          <h1>{ Product.title }</h1>
          <p>{ Product.description }</p>
          <p> price: <span className='text-danger'>{ Product.price }  EGP</span></p>
          <Link to={"/"} className='btn btn-success'>Add to cart</Link>
        </div>


      </div>
    </div>
  );
}

export default ProductDetails;