import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/picture.jpg'
import IMG2 from '../../assets/picture.jpg'
import IMG3 from '../../assets/picture.jpg'
import IMG4 from '../../assets/picture.jpg'
import IMG5 from '../../assets/picture.jpg'
import IMG6 from '../../assets/picture.jpg'
export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/**/ }
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Photography Portfolio project screenshot - HTML and CSS photography website"/>
          </div>
          <h3>Photography-Portfolio (HTML/CSS)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/Photography-Portfolio" className='btn' target='blank' aria-label="View Photography Portfolio project on GitHub" >GitHub</a>
          <a href="https://69cbf827116fc4149360ed25--courageous-panda-0f6435.netlify.app/" className='btn btn-primary' target='blank' aria-label="View Photography Portfolio live website" >Live Demo</a>
          </div>
        </article>
        {/*End of Portfolio Project 1*/ }
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="RollCraft-Bot project screenshot - Discord bot application"/>
          </div>
          <h3>RollCraft-Bot</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/RollCraft-Bot" className='btn' target='blank' aria-label="View RollCraft-Bot project on GitHub" >GitHub</a>
          </div>
        </article>
        {/*End of Portfolio Project 2*/ }
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Cache-Link project screenshot"/>
          </div>
          <h3>Cache-Link</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/Cache-Link" className='btn' target='blank' aria-label="View Cache-Link project on GitHub" >GitHub</a>
          </div>
        </article>
        {/*End of Portfolio Project 3*/ }
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Assembler VC-407 project screenshot - C++ assembler implementation"/>
          </div>
          <h3>Assembler VC-407 (C++)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/Assembler" className='btn' target='blank' aria-label="View Assembler VC-407 project on GitHub" >GitHub</a>
          </div>
        </article>
        {/*End of Portfolio Project 4*/ }

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=" "/>
          </div>
          <h3>React-Portfolio (Javascript, HTML, CSS, and React)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/React-Portfolio-Website" className='btn' target='blank' >GitHub</a>
          <a href="demo" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article> */}
        {/*End of Portfolio Project 4*/ }

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Coin Game Website project screenshot - JavaScript, HTML and CSS coin collector game"/>
          </div>
          <h3>Coin Game Website (Javacript, HTMl, and CSS)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/CoinCollectorGames" className='btn' target='blank' aria-label="View Coin Game Website project on GitHub" >GitHub</a>
          </div>
        </article>
        {/*End of Portfolio Project 5*/ }
      </div>
    </section>
  )
}
export default Portfolio