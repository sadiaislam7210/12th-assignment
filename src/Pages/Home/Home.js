import React from 'react';
import HomeParts from '../../components/Parts/HomeParts';
import Banner from './Banner';
import BannerII from './BannerII';
import Count from './Count';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Count></Count>
            <HomeParts></HomeParts>
            <BannerII></BannerII>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;