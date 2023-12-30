import React from 'react';
import { Link } from 'react-router-dom';

function Card ( { product } )
{
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 ProductCard'>
            <div className="card">
                <img src={ product.images[0]} className="card-img-top" style={{height:"300px"}} alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">{ ( product.title ).slice(0,20) }</h5>
                    <p className="card-text">
                        { ( product.description ).slice( 0, 60 )}
                        <Link to={ `/ProductDetails/${ product.id }` }>
                            Show More...
                        </Link>
                    </p>
                    <p>price: <span className='text-danger'>{product.price}$</span></p>
                    <Link to={ `/ProductDetails/${product.id}` } className="btn btn-success w-100">
                        Show More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;