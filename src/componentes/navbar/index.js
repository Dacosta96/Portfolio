/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
import React from "react";
import './styles.css';

function Navbar(){

    return(
        <>
        <div className="navbar">
            <div>HOME</div>
            <div>ABOUT ME</div>
            <div>PORTFOLIO</div>
            <div>CONTACT</div>
        </div>
        </>
    )
}

export {Navbar};