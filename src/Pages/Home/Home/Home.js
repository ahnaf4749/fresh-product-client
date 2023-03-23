import React from 'react';
import Bennar from '../Bennar/Bennar';
import FridayOffer from '../FridayOffer/FridayOffer';
import HomeService from '../HomeService/HomeService';
import NewProductOffer from '../NewProductOffer/NewProductOffer';
import NewProductSlider from '../NewProductSlider/NewProductSlider';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <HomeService></HomeService>
            <NewProductSlider></NewProductSlider>
            <FridayOffer></FridayOffer>
            <NewProductOffer></NewProductOffer>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;