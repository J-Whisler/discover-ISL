import React from 'react';
import "../../styles/_home.scss";

import Nav from '../Nav';
import MiddleContent from '../MiddleContent';
import Footer from '../Footer';

const Home = () => {
    return(
        <div className="home-container">
            <Nav />
            <MiddleContent />
            <Footer />
        </div>
    )
}

export default Home;