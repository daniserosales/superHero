import React from 'react';

export default function HeroCard ({hero}) {
    console.log(hero, "<<<<<<<<<<<<<")
    return (
        <div className="hero-card">
            <div>
                {/* <img src={hero.image.url}></img> */}
            </div>
            <div>
                <h1>Hello</h1>
                <h2>{hero.name}</h2>
                {/* <div dangerouslySetInnerHTML={{ __html: hero.summary }}></div> */}
            </div>
        </div>
    )
};
