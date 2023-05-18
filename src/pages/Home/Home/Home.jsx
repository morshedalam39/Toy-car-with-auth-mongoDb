import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Sponsor from '../Sponsor/Sponsor';
import OurTeam from '../../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Sponsor></Sponsor>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;