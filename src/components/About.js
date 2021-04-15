import React from 'react';
import photo from '../images/author.jpg';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section className='about' id='section__about'>
      <SectionTitle title='About me' />
      <div className='about__container'>
        <img className='about__photo' src={photo} alt='author' />
        <div className='about__description'>
          <h1 className='about__title'>Виталий</h1>
          <p className='about__text'>Я Веб-разработчик</p>
        </div>
      </div>
    </section>
  )
}

export default About;
