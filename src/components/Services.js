
import React from 'react';

export default function Services(){
    return (
        <section>
            <h2 className='service-header'>Our Services</h2>
        <div className='services'>
            <div className='service--div'>
                <h3 className='service-subheading'>Web Development</h3>
                <p className='service-text'>
                    We offer custom web development solutions tailored to your specific needs. Whether you need a simple landing page or a complex web application, our team of experienced developers is here to help you achieve your goals.
                </p>
            </div>
            <div className='service--div'>
                <h3 className='service-subheading'>Graphic Design</h3>
                <p className='service-text'>
                    Our graphic designers create stunning visuals that elevate your brand identity. From logo design to marketing collateral, we ensure that your visual communication is impactful and memorable.
                </p>
            </div>
            <div className='service--div'>
                <h3 className='service-subheading'>SEO Services</h3>
                <p className='service-text'>
                    Improve your website's visibility and search engine ranking with our SEO services. We employ proven strategies to optimize your website for search engines, driving organic traffic and increasing your online presence.
                </p>
            </div>
        </div>
        </section>
    );
}
