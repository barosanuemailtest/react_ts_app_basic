import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Car } from './crap/car';
import { ShoppingBasket } from './crap/ShoppingBasket';
import { Login } from './login/login';


ReactDOM.render(
    <div className="wrapper">
        <h1>Welcome to the best app ever!</h1>
        <h2>Please login</h2>
        <Login />

    </div>,
    document.querySelector('#root')
)

