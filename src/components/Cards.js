import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>NEWS</h1>
      
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/news/kardashians.webp'
              text_title="Posted on Dec 28, 2021"
              text="FROM PEOPLE MAGAZINE
              
              Kim Kardashian and her siblings were on Kris Jenner\'s \'Nice\' list this Christmas.
              
              The SKIMS founder, 41, showed off the lavish holiday gifts the Keeping Up with the 
              Kardashians matriarch, 66, gave the Kardashian-Jenner kids over the weekend on 
              Instagram on Monday: brand-new electric MOKE cars in an array of colors, including
               various shades of pink, yellow, orange, and more.
              
               \'Oh my god, look at our Christmas presents from my mom! For all of her kids. How cool
               ! Oh, this has to be Kourtney and Travis, for sure,\' Kim said in an Instagram Story, 
               panning the camera over to a white MOKE car with a skull on the hood. 
              
               \'Khloé and I got the pink ones!\' the reality star added. Jenner also reposted the
                video to her own Instagram Story."
              label='Kim Kardashian reveals'
              path='/services'
            />
            <CardItem
              src='images/jimmy.png'
              text_title="Posted on Aug 09, 2022"
              text="Tonight Show host Jimmy Fallon was spotted checking out our custom-wrapped Moke cruiser 
              behind the new Valentino store in East Hampton. 
              The electric Mokes were wrapped in the brands new..."
              label='Jimmy Fallon Checking Out The Moke'
              path='/services'
            />
            <CardItem
              src='images/f1.png'
              alt="Jimmy F"
              text_title="Posted on May 09, 2022"
              text="F1 MIAMI WINNER MAX VERSTAPPEN MADE HIS VICTORY LAP IN AN ELECTRIC MINI MOKE FROM MOKE 
              AMERICA Verstappens Ride Was Part Of A Fleet Of 20 Electric Mokes On-Site At..."
              label='Moke America At F1 Miami Grand Prix'
              path='/services'
            />
          </ul>
      
        </div>
      </div>
    </div>
  );
}

export default Cards;
