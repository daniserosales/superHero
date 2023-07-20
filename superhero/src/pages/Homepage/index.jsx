import React from 'react';
import { SearchWidget } from '../../components';



export default function HomePage() {
    return (
        <>
            
            
            <h1 className='spiderman'>SPIDERMAN</h1>
            <em className='miles'>Miles Morales</em>
            <div className="quote-container"> <p>“EINSTEIN SAID TIME WAS RELATIVE, RIGHT? MAYBE I’M NOT LATE. MAYBE YOU GUYS ARE EARLY.” </p> </div>
            <div className="image"></div>
            {/* <img src="spiderman.png"/> */}
            <SearchWidget ></SearchWidget>
        </>
    )
};
