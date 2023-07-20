import React from 'react';

export default function HeroCard ({hero}) {
    console.log(hero, "<<<<<<<<<<<<<")
    return (
        <div className="hero-card">
            <div>
                <img src={hero.image.url}></img>
            </div>
            <div>
                <h2>{hero.name}</h2>
                <h3>Race: {hero.appearance.race}</h3>
                <h3>Height: {hero.appearance.height}</h3>
                <h3>Weight: {hero.appearance.weight}</h3>
                <h3>Occupation: {hero.work.occupation}</h3>
                <h3>Intelligence: {hero.powerstats.intelligence}</h3>
                <h3>Strength: {hero.powerstats.strength}</h3>
                <h3>Speed: {hero.powerstats.speed}</h3>
                <h3>Durability: {hero.powerstats.durability}</h3>
                <h3>Power: {hero.powerstats.power}</h3>
                <h3>Combat: {hero.powerstats.combat}</h3>                
            </div>
        </div>
    )
};
