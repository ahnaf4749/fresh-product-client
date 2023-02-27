import React from 'react';
import Bennar from '../Bennar/Bennar';
import FridayOffer from '../FridayOffer/FridayOffer';
import NewProductSlider from '../NewProductSlider/NewProductSlider';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <NewProductSlider></NewProductSlider>
            <FridayOffer></FridayOffer>
        </div>
    );
};

export default Home;