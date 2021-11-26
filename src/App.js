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

import logo from './assets/logo.svg'

import sound from './assets/sound.png'
import mute from './assets/mute.png'

import ambiance from './assets/ambiance.mp3'
import solomobillier from './assets/solomobillier.mp3'

const App = () => {

  const [step, setStep] = useState(1)
  const [audio, setAudio] = useState(false)

  useEffect(() => {
    
    const navigation = document.querySelector('.navigation')
    const header = document.querySelector('.header')

    const audio = document.querySelector('.main-audio')
    const solomobillier = document.querySelector('.audio-hugo')

    document.querySelector('.part.map').addEventListener('click', () => {
      solomobillier.play()
    })

    document.querySelector('.btn-start').addEventListener('click', () => {
      audio.play()
      setAudio(false)
    })

    document.querySelector('.audio_off').addEventListener('click', () => {
      audio.pause()
      solomobillier.pause()
      setAudio(true)
    })

    document.addEventListener('scroll', () => {

      let scroll = window.scrollY

      if(scroll > 700) {
        navigation.classList.add('active')
        header.classList.add('active')
      } else {
        navigation.classList.remove('active')
        header.classList.remove('active')
      }
      
      if(scroll > 800 && scroll < 1600) {
        setStep(1)
      } else if(scroll > 1600 && scroll < 2400) {
        setStep(2)
      } else if(scroll > 2400 & scroll < 3000) {
        setStep(3)
      } else if(scroll > 3800 & scroll < 4600) {
        setStep(4)
      } else if(scroll > 8000 & scroll < 12000) {
        setStep(5)
      } else if(scroll > 12000) {
        setStep(6)
      }

      if(scroll > 5000) {
        for(let tranche of document.querySelectorAll('.tranche-wrapper')) {
          tranche.classList.add('active')
        }
      } else {
        for(let tranche of document.querySelectorAll('.tranche-wrapper')) {
          tranche.classList.remove('active')
        }
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
      <audio
        className="main-audio hidden"
        controls
        src={ambiance}>
            Your browser does not support the
            <code>audio</code> element.
      </audio>
      <audio
        className="audio-hugo hidden"
        controls
        src={solomobillier}>
            Your browser does not support the
            <code>audio</code> element.
      </audio>
      <nav className="header">
        <div>
          <img className="h-16" src={logo} alt="Roads" />
        </div>
        <div className="title overflow-hidden">
          <ul style={{ transform: `translateY(-${(step-1)*(100/5)}%)` }}>
            <li>Le profil de Paris</li>
            <li>Paris plus cher que la province</li>
            <li>Les différentes population de Paris</li>
            <li>Départs / Arrivées</li>
            <li>Où vont les parisiens ? Carte</li>
            <li>Où vont les parisiens ?</li>
          </ul>
        </div>
        <div className="w-12 h-12 border-2 border-black rounded-full flex justify-center items-center">
          <img className="h-4 audio_off" src={audio ? mute : sound} alt="" />
        </div>
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
