import React from 'react';
import logo from './media/RedLine.jpg';
import inst from './media/inst1.png'
import {Icon, Navbar, NavItem} from "react-materialize";
import {Link} from "react-router-dom";
import {Menu} from "./menu";

export const NavBar = () => (
    <div>
    <Navbar
        className="red accent-4"
        alignLinks="right"
        brand={<Link style={{marginRight: "50px"}} className="brand-logo" to = "/"><img src={logo} height = "57"   alt=""/> </Link>}

        options={{
            draggable: true,
            edge: 'right',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
        }}
    >


        <Link to ="/Store">
            <Icon>local_mall</Icon>
        </Link>
        <Link to ="/OwnPage">
            <Icon>account_circle</Icon>
        </Link>

        <NavItem href="https://instagram.com/red_line__shop?igshid=x5rao37la4sk">
            <img src={inst} style={{marginTop:'15px'}} height='30' alt=""/>
        </NavItem>

            <Menu/>


    </Navbar>
        <Menu/>
    </div>
)

