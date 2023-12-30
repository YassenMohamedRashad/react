import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import SectionTitle from '../SectionTitle';

function Products ()
{
    const [ products, setProducts ] = useState( [] );
    const [ Categ, setCateg ] = useState( "jewelery" );

    const handleCateg = (e) =>
    {
        setCateg(e.target.value)
    }

    const getData = async () =>
    {
        const res = await axios.get( 'https://api.escuelajs.co/api/v1/products' );
        setProducts( res.data );
    };

    useEffect( () =>
    {
        getData();
    }, [] );

    return (
        <div>
            <SectionTitle title={ "Our Products" } />
            <div>
                <div className="m-auto d-flex justify-content-center">
                    <div className='btn-group'>
                        <button value="true" onClick={ handleCateg } className='btn btn-outline-success'>All</button>
                        <button value="electronics" onClick={ handleCateg } className='btn btn-outline-success'>electronics</button>
                        <button value="jewelery" onClick={ handleCateg } className='btn btn-outline-success'>jewelery</button>
                        <button value="men's clothing" onClick={ handleCateg } className='btn btn-outline-success'>men's clothing</button>
                        <button value="women's clothing" onClick={ handleCateg } className='btn btn-outline-success'>women's clothing</button>
                    </div>
                </div>
            </div>
            <div className='container mt-4 mb-5'>
                <div className='row g-3'>
                    {
                        products.map( ( product ) =>
                            <Card product={product}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;