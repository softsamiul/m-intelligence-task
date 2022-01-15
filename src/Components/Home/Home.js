import React from 'react';
import './Home.scss'

const Home = () => {
    return (
        <div className='home-wrapper-main' style={{backgroundColor:'#F8F9FA'}}>
            {/* home top section */}
            <div>
                <h4 className='home-top-heading-text'>Leads unique by Email Address</h4>
                <div className='home-top-search-area'>
                <select id="selector">
                    <option value="volvo" selected>Breakdown: Browser, Country, Date</option>
                    <option value="saab">Browser</option>
                    <option value="vw">Country</option>
                    <option value="audi" >Date</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Home;