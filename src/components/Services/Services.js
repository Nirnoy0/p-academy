import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import 'react-bootstrap';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
          .then(res => res.json())
          .then(data => setServices(data))
      },[])
    return (
        <div className="container">
            <h1 className="text-center p-5 bg-secondary rounded">Our Serivces</h1>
            <div className="services">
            {
                services.map(serivce => <Service
                    key={Service.img}
                    Service={serivce}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;