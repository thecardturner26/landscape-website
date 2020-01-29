import React from 'react';
import Hero from '../components/Hero'

function HomePage() {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTile} text={props.text} />
            
        </div>
    )
}

export default HomePage;