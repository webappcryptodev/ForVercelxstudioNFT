import React from 'react';
import AuctionHero from './hero';
import art from "../../assets/img/items/cover_1.png";
import AuctionGallery from './gallery';


const AuctionContainer = () => {
    return (
        <>
            
            <AuctionHero
                title='Hero love'
                currentBid='0.44'
                image={art}
            />
            <AuctionGallery/>
        </>
    );
};

export default AuctionContainer;