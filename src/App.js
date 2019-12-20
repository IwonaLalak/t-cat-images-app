import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import HomeView from "./views/home/HomeView";
import FavouritesView from "./views/favourites/FavouritesView";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Wrapper from "./shared/wrapper/Wrapper";


function App() {
    return (
        <div id="app">
            <Router>
                <Header/>
                <Wrapper>
                    <Switch>
                        <Route exact path={"/"} render={(props) => <HomeView {...props}/>}/>
                        <Route exact path={"/favourites"} render={(props) => <FavouritesView {...props}/>}/>
                        <Redirect to={'/'}/>
                    </Switch>
                </Wrapper>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
