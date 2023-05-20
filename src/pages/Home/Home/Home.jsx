import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Sponsor from '../Sponsor/Sponsor';
import OurTeam from '../../OurTeam/OurTeam';
import useTitle from '../../../hooks/useTitle';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <Sponsor></Sponsor>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;