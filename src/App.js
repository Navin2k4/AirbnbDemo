import React from "react";

import Navbar from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Cards"
import Footer from "./components/FooterC"
import Services  from "./components/Services";
import Testimonials from "./components/Testimoial";

export default function App(params) {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
            <Card />
            <Testimonials/>
            <Footer /> 
        </div>
    )
};

