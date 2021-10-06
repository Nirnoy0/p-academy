import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {course,duration,instructor,img,price}=props.Service
    return (
        <div>        
            <Card className="card shadow-sm p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <Card.Img className="img" variant="top" src={img} />
            <Card.Body>
                <Card.Title>Course Name: {course}</Card.Title>
                <Card.Text>
                <h6>Duration: {duration}</h6>
                <h6>Instructor: {instructor}</h6>
                <h6>Course Fees: {price}</h6>
                </Card.Text>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary">Purchse Now</button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Service;