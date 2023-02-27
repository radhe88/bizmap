import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
import { BsMoon, BsMap } from "react-icons/bs";



const Popular = () => {
    return (
        
        <div className='section'>
            <div className='container'>
                <div className='section-head text-black text-center'>
                    <h2 className='box-title'>Popular Cities</h2>
                    <div className="dlab-separator bg-primary"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
            </div>
            
            <section className='container popularCity'>
                <CardGroup className='cardbtx'>
                    <Row>
                        <Col sm className='rk-4'>
                            <Card>
                                <Card.Img variant="top" src="https://bizmap.dexignzone.com/xhtml/images/destinations/pic2.jpg" />
                            </Card>
                            <div className='featured-info'>
                                <ul className='featured-star'>
                                    <li>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                    </li>
                                </ul>
                                <h5 className='title'>London</h5>
                                <ul className='featured-category'>
                                    <li>
                                        <i className=''>< BsMoon /></i>
                                        <span>12 cities</span>
                                    </li>
                                    <li>
                                        <i className='rk-5'>< BsMap /></i>
                                        <span>12 cities</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Img variant="top" src="https://bizmap.dexignzone.com/xhtml/images/destinations/pic3.jpg" />

                            </Card>
                            <div className='featured-info'>
                                <ul className='featured-star'>
                                    <li>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                    </li>
                                </ul>
                                <h5 className='title'>United States</h5>
                                <ul className='featured-category'>
                                    <li>
                                        <i className=''>< BsMoon /></i>
                                        <span>12 cities</span>
                                    </li>
                                    <li>
                                        <i className='rk-5'>< BsMap /></i>
                                        <span>12 cities</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Img variant="top" src="https://bizmap.dexignzone.com/xhtml/images/destinations/pic4.jpg" />

                            </Card>
                            <div className='featured-info'>
                                <ul className='featured-star'>
                                    <li>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                    </li>
                                </ul>
                                <h5 className='title'>Korea</h5>
                                <ul className='featured-category'>
                                    <li>
                                        <i className=''>< BsMoon /></i>
                                        <span>12 cities</span>
                                    </li>
                                    <li>
                                        <i className='rk-5'>< BsMap /></i>
                                        <span>12 cities</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm>
                            <Card>
                            <Card.Img variant="top" src="https://bizmap.dexignzone.com/xhtml/images/destinations/pic5.jpg" />
                        </Card>
                            <div className='featured-info'>
                                <ul className='featured-star'>
                                    <li>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                        <i>< FaStar /></i>
                                    </li>
                                </ul>
                                <h5 className='title'>Japan</h5>
                                <ul className='featured-category'>
                                    <li>
                                        <i className=''>< BsMoon /></i>
                                        <span>12 cities</span>
                                    </li>
                                    <li>
                                        <i className='rk-5'>< BsMap /></i>
                                        <span>12 cities</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </CardGroup>
            </section>
            


        </div>
    )
}

export default Popular