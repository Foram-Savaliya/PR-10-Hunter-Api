import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Fetch = () => {
  const [product, setProduct] = useState([]);
  let fetchrecord = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
        setProduct(data.users);
      });
  };
  useEffect(() => {
    fetchrecord();
  }, []);


  return (
    <div>
      <div className="text-center my-3">
        <Link to={'/'} className='btn btn-primary me-4'>Axios</Link>
        <Link to={'/fetch'} className='btn btn-primary me-4'>Fetch</Link>
      </div>
      <div className="container">
        <div className="text-center my-5">
          <h1>Fetch Data</h1>
        </div>
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr>
              <th scope="col">Sr No:</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {
              product && product.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName} {item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Fetch