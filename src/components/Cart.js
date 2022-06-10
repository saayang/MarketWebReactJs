import React, { Component } from 'react';
import Title from './Title';
import CartColoumns from './CartColoumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../Context';
import CartList from './CartList';

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length>0) {
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="Cart" />
                                    <CartColoumns />
                                    <CartList value={value}/>
                                </React.Fragment>
                            );
                        } else {
                            return (<EmptyCart />);
                        }
                    }}
                </ProductConsumer>
            </section>

        );
    }
}

export default Cart;