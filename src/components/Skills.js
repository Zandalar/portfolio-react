import React from 'react';
import html from '../images/logo__html.svg';
import css from '../images/logo__css.svg';
import js from '../images/logo__js.svg';
import react from '../images/logo__react.svg';
import npm from '../images/logo__npm.svg';
import git from '../images/logo__git.svg';
import figma from '../images/logo__figma.svg';
import express from '../images/logo__express.svg';
import webpack from '../images/logo__webpack.svg';
import nginx from '../images/logo__nginx.svg';
import SectionTitle from './SectionTitle';

function Skills() {
  return (
    <section className='skills' id='section__skills'>
      <SectionTitle title='Skills' />
      <ul className='skills__container'>
        <li className='skills__item'>
          <img className='skills__logo' src={html} alt='html'/>
          <p className='skills__name'>HTML5</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={css} alt='css'/>
          <p className='skills__name'>CSS3</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={js} alt='JavaScript'/>
          <p className='skills__name'>JavaScript</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={react} alt='React'/>
          <p className='skills__name'>React</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={npm} alt='npm'/>
          <p className='skills__name'>npm</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={express} alt='Express.js'/>
          <p className='skills__name'>Express.js</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={git} alt='GitHub'/>
          <p className='skills__name'>Git</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={figma} alt='Figma'/>
          <p className='skills__name'>Figma</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={webpack} alt='Webpack'/>
          <p className='skills__name'>Webpack</p>
        </li>
        <li className='skills__item'>
          <img className='skills__logo' src={nginx} alt='Nginx'/>
          <p className='skills__name'>Nginx</p>
        </li>
      </ul>
    </section>
  )
}

export default Skills;
