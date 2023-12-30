import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../SectionTitle';

function Categories ()
{
    const [ Categories, setCategories ] = useState( [] );
    



    const getDate = async () =>
    {
        let resp = await axios.get( "https://api.escuelajs.co/api/v1/categories" );
        setCategories( resp.data );
    };

    useEffect( () =>
    {
        getDate();
    }, [] );

    return (
        <div>
            <div className='container'>
                <SectionTitle title={"Our Categories"} />
                <div className='row g-5'>
                    {
                        Categories.map( ( category ) =>
                        {
                            return (
                                <div className='col-6 col-md-4 col-lg-3'>
                                    <div className='Category d-flex justify-content-center align-items-center '>
                                        <h3 className='fw-bold text-white'>{ category.name }</h3>
                                    </div>
                                </div>
                            );
                        } )
                    }
                </div>
            </div>
        </div>
    );
}

export default Categories;