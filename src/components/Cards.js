import React from 'react'
import Image1 from '../images/img1.png'
import Image2 from '../images/img2.png'
import Image3 from '../images/img3.png'

export default function Cards() {
   return(
    <div className='card--section'>
        <div className='card'>
            <img src={Image1} alt="img-1" className='card--img'/>
            <div className='card-stats'>
                    <span>⭐</span>
                    <span>5.0 </span>
                    <span className='gray'>(6) - </span>
                    <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
               <p><span className='bold'>From $136 </span>/ person</p>
        </div>
           <div className='card'>
               <img src={Image2} alt="img-1" className='card--img' />
               <div className='card-stats'>
                   <span>⭐</span>
                   <span>5.0 </span>
                   <span className='gray'>(6) - </span>
                   <span className='gray'>USA</span>
               </div>
               <p>Life lessons with Katie Zaferes</p>
               <p><span className='bold'>From $136 </span>/ person</p>
           </div>
           <div className='card'>
               <img src={Image3} alt="img-1" className='card--img' />
               <div className='card-stats'>
                   <span>⭐</span>
                   <span>5.0 </span>
                   <span className='gray'>(6) - </span>
                   <span className='gray'>USA</span>
               </div>
               <p>Life lessons with Katie Zaferes</p>
               <p><span className='bold'>From $136 </span>/ person</p>
           </div>
           <div className='card'>
               <img src={Image1} alt="img-1" className='card--img' />
               <div className='card-stats'>
                   <span>⭐</span>
                   <span>5.0 </span>
                   <span className='gray'>(6) - </span>
                   <span className='gray'>USA</span>
               </div>
               <p>Life lessons with Katie Zaferes</p>
               <p><span className='bold'>From $136 </span>/ person</p>
           </div>
           <div className='card'>
               <img src={Image2} alt="img-1" className='card--img' />
               <div className='card-stats'>
                   <span>⭐</span>
                   <span>5.0 </span>
                   <span className='gray'>(6) - </span>
                   <span className='gray'>USA</span>
               </div>
               <p>Life lessons with Katie Zaferes</p>
               <p><span className='bold'>From $136 </span>/ person</p>
           </div>
           <div className='card'>
               <img src={Image3} alt="img-1" className='card--img' />
               <div className='card-stats'>
                   <span>⭐</span>
                   <span>5.0 </span>
                   <span className='gray'>(6) - </span>
                   <span className='gray'>USA</span>
               </div>
               <p>Life lessons with Katie Zaferes</p>
               <p><span className='bold'>From $136 </span>/ person</p>
           </div>
    </div>
   )
};
