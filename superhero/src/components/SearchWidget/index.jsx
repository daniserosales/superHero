import React, { useState, useEffect } from 'react';
import { HeroForm, HeroList } from '../';

export default function SearchWidget () {

    const [heroData, setHeroData] = useState([]);
    const [searchString, setSearchString] = useState("");
    
    console.log("rawwwwww")
    useEffect(() => {

        async function searchAPI() {
            console.log("ashgfuihuh")
            const response = await fetch(`https://www.superheroapi.com/api.php/10223123073014292/search/hulk`);
            const rawData = await response.json();
            console.log(rawData, "ashgfuihuh")
            const data = rawData.map(s => s.results);
            setHeroData(data);
        }
        
        searchAPI();
        
    }, []);
    
    function handleSearch(userInput){
        setSearchString(userInput);        
    }

    return <>
        <HeroForm handleSearch={handleSearch} lastSearch={searchString}/>
        <HeroList heroData={heroData} /> 
        </>
};
