import React from 'react';

export default function CartColoumns() {
    return (
        <div>
            <div className="container text-center d-none d-lg-block">
                <div className="row">
                    <div className="col mx-auto col-lg-2">
                            <p className="text-uppercase">
                                products
                            </p>
                            <p className="text-uppercase">
                                products name
                            </p>
                            <p className="text-uppercase">
                                price
                            </p>
                            <p className="text-uppercase">
                                quantity
                            </p>
                            <p className="text-uppercase">
                                remove
                            </p>
                            <p className="text-uppercase">
                                total
                            </p>
            
                    </div>
                </div>
            </div>
        </div>
    );
};