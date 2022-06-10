import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import {ProductWarpper} from './ProductWarpper';
import PropType from 'prop-types';

class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (

            <ProductWarpper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value=>(
                            <div className="img-container p-5" onClick={() => 
                                    value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product" className='card-img-top'/>
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false}
                                    onClick={() =>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                {inCart ? (
                                    <p className="text-capitalized mb-0" disabled>{" "} in Cart</p>
                                ):(
                                    <i className="fas fa-cart-plus" />
                                )}
                                </button>
                                </div>
                        )}
                    
                     </ProductConsumer>
                            {/* {Product Footer} */}
                            <div className="card-footer d-flex justify-content-between">
                                <p className="align-self-center mb-0">{title}</p>
                                <h5 className="text-blue font-italic mb-0">
                                    <span className="mr-1">Rp.</span>{price}
                                </h5>
                            </div>
                </div>
            </ProductWarpper>
        );
    }
}

export default Product;
Product.proptype={
    product : PropType.shape({
        id : PropType.number,
        img : PropType.string,
        title : PropType.string,
        price : PropType.number,
        inCart : PropType.bool,
    }).isRequired
};