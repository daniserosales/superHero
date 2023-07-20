import React, { useState, useEffect } from 'react';
import { HeroForm, HeroList } from '../';

export default function SearchWidget () {

    const [heroData, setHeroData] = useState([]);
    const [searchString, setSearchString] = useState("");    
   
    useEffect(() => {

        async function searchAPI() {
            
            const response = await fetch(`https://www.superheroapi.com/api.php/10223123073014292/search/${searchString}`);
            const rawData = await response.json();
            const data = rawData.results.map(s => s);
            setHeroData(data);
        }
        
        searchAPI();
        
    }, [searchString]);
    
    function handleSearch(userInput){
        setSearchString(userInput);        
    }

    return <>
        <HeroForm handleSearch={handleSearch} lastSearch={searchString}/>
        <HeroList heroData={heroData} /> 
        </>
};
