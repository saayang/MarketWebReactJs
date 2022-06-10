import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import {ModalContainer} from './ModalContainer';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen,closeModal} = value;
                    const {img,title,price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto py-2 col-md-6 col-lg-4 text-center text-capilatize">
                                        <h5>Item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price : Rp. {price}</h5>
                                        <Link to="/" className="mr-2">
                                            <ButtonContainer onClick={() => {
                                                closeModal()
                                            }}>
                                                Continue to shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={() => {
                                                closeModal()
                                            }}>
                                                Go To Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                        
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;