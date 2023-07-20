import React from 'react';
import {HeroCard} from '../';

export default function HeroList ({ heroData }) {
    console.log(heroData, "<<<<<<<<<>>>>>>>>>")
    function renderHeros() {
        return heroData.map(s => <HeroCard key={s.id} hero={s} />)
    }

    return <div className="hero-list">        
        { renderHeros() }
    </div>
};
