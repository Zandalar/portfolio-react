import React from 'react';
import RenderSubtitle from './RenderSubtitle';

function Home() {
  return (
    <section className='home' id='section__home'>
      <div className='home__background'>
        <div className='home__container'>
        {/*  <h2 className='home__title'>Vitaliy Masich</h2>*/}
        {/*  <p className='home__text'>junior fullstack web-developer</p>*/}
        {/*  <p className="home__line anim-typewriter">*/}
        {/*    Connected to Vitaliy's Masich page...*/}
        {/*  </p>*/}
          <RenderSubtitle />
        </div>

      </div>
    </section>
  )
}

export default Home;
