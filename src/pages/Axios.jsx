import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Axios = () => {

    const [product, setProduct] = useState([]);

    const getData = async () => {
        let record = await axios.get(`https://dummyjson.com/products`)
        setProduct(record.data.products)
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>

            <div className="text-center my-3">
                <Link to={'/'} className='btn btn-primary me-4'>Axios</Link>
                <Link to={'/fetch'} className='btn btn-primary me-4'>Fetch</Link>
            </div>

            <h1 className='text-center'>
                Axios
            </h1>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center ">
                    {
                        product.map((item) => {
                            return (
                                <div className="w-25 p-3">
                                    <div className="card" key={item.id}>
                                        <img src={item.thumbnail} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <a href="#" className="btn btn-primary">{item.price} /-</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Axios