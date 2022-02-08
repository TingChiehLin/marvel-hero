import React from "react";

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HeroIntro from './layouts/HeroIntro';

import HeroSection from "./components/HeroSection";

import data from './models/data';

const App = () => {
    return (
        <div>
            <Header/>
            <HeroIntro/>
            {
                data.map(e =>
                    <HeroSection
                        key={e.id}
                        id={e.id}
                        title={e.title}
                        description={e.description}
                        img={e.img}
                    />
                )
            }
            <Footer/>
        </div>
    );
}

export default App;
