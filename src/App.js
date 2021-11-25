import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import gsap, { splitText } from 'gsap'

import NavBottom from './components/navBottom/NavBottom';

import './App.scss';

import Slide1 from './components/slide1/Slide1'
import Slide2 from './components/slide2/Slide2'
import Slide3 from './components/slide3/Slide3'
import Slide4 from './components/slide4/Slide4'
import Slide5 from './components/slide5/Slide5'
import Slide6 from './components/slide6/Slide6'
import Slide7 from './components/slide7/Slide7'

const App = () => {

  const [step, setStep] = useState(1)

  useEffect(() => {
    
    const navigation = document.querySelector('.navigation')
    const header = document.querySelector('.header')

    document.addEventListener('scroll', () => {

      let scroll = window.scrollY

      if(scroll > 700) {
        navigation.classList.add('active')
        header.classList.add('active')
      } else {
        navigation.classList.remove('active')
        header.classList.remove('active')
      }
      
      if(scroll > 0 && scroll < 800) {
        setStep(1)
      } else if(scroll > 800 && scroll < 1600) {
        setStep(2)
      } else if(scroll > 2400 & scroll < 3000) {
        setStep(3)
      } else if(scroll > 3800 & scroll < 4600) {
        setStep(4)
      } else if(scroll > 5400 & scroll < 6200) {
        setStep(5)
      } else if(scroll > 7000 & scroll < 7800) {
        setStep(6)
      }

    })

    document.querySelectorAll('.paragraphe').forEach((paragraphe) => {
      gsap.to(paragraphe, {
          scrollTrigger: {
              start: 'top 60%',
              trigger: paragraphe,
              toggleClass: 'active'
          }
      })
    })

    for(let paragraphe of document.querySelectorAll('.paragraphe')) {
      
      const words = paragraphe.textContent.split(' ')
      paragraphe.innerHTML = ''

      let i = 0

      for(let word of words) {

        const letters = word.split('')
        const word_el = document.createElement('span')
        word_el.classList.add('word')

        for(let letter of letters) {
          const letter_cont = document.createElement('span')
          letter_cont.classList.add('letter-cont')

          i+=2
          const letter_el = document.createElement('span')
          letter_el.classList.add('letter')
          letter === ' ' && letter_el.classList.add('space')
          letter_el.style.transitionDelay = i+'ms'
          letter_el.textContent = letter

          letter_cont.appendChild(letter_el)
          word_el.appendChild(letter_cont)
        }

        paragraphe.appendChild(word_el)

      }
      
    }
  }, [])

  return (
    <div className="wrapper">
      <nav className="header">
        <div className="butler">Roads</div>
        <div className="title overflow-hidden">
          <ul style={{ transform: `translateY(-${(step-1)*(100/5)}%)` }}>
            <li>Le profil de Paris</li>
            <li>Paris plus cher que la province</li>
            <li>Le profil des parisiens qui partent</li>
            <li>Le profil des parisiens qui partent</li>
          </ul>
        </div>
        <div className="w-12 h-12 bg-black rounded-full"></div>
      </nav>
      <NavBottom step={step} fnStep={e => setStep(e)} />
      <Slide1 fnStep={() => setStep(2)} step={step} />
      <Slide2 step={step} />
      <Slide3 step={step} />
      <Slide5 step={step} />
      <Slide6 step={step} />
    </div>
  );
}

export default App;
