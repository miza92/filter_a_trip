import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tooltip from "react-simple-tooltip";
import logo from '../assets/images/logo5.png';
import { BrowserRouter, Link } from 'react-router-dom';
import '../assets/css/App.css';

export default class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Header">
                    <h1 className="logo">fusséeline</h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Tooltip content="fusséeline" placement="bottom" background="#7c7c7c">
                                <Link to="" ><img src={logo} widht="100" height="50"
                                    className="logo1" alt="logo" />
                                </Link>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        );
    }
}
