import {NavBar} from "./components/navbar";
import {useRoutes} from "./routs/routs";
import {BrowserRouter as Router} from 'react-router-dom';
import {FooterHome} from "./components/footer";
import {Button, Icon,} from "react-materialize";
import React from "react";


function App() {
    const routes = useRoutes(false)
    return (

        <Router>
            <NavBar/>
            {routes}

            <div id="easynetshop-cart">
                <Button   className="red accent-4" style={{ marginTop: '70px',
                    marginRight: '10px',
                    position:'fixed',
                    float: 'right',
                    top:0,
                    right:0}} floating>
                    <Icon>shopping_cart</Icon>
                </Button>
            </div>
            <FooterHome/>
        </Router>

    );
}

export default App;

