import { useEffect } from "react"

import './slide1.scss'

import left1 from '../../assets/header/left-1.svg'
import left2 from '../../assets/header/left-2.svg'
import left3 from '../../assets/header/left-3.svg'
import left4 from '../../assets/header/left-4.svg'
import left5 from '../../assets/header/left-5.svg'
import left6 from '../../assets/header/left-6.svg'
import left7 from '../../assets/header/left-7.svg'
import left8 from '../../assets/header/left-8.svg'
import right1 from '../../assets/header/right-1.png'
import right2 from '../../assets/header/right-2.png'
import right3 from '../../assets/header/right-3.png'
import right4 from '../../assets/header/right-4.png'
import gsap, { Power2 } from 'gsap'

const Slide1 = ({ fnStep, step }) => {

    useEffect(() => {

        const province = document.querySelector('.province')
        const paris = document.querySelector('.paris')

        province.addEventListener('mouseenter', () => {
            paris.style.width = '10%'
        })

        province.addEventListener('mouseleave', () => {
            paris.style.width = '20%'
        })

        paris.addEventListener('mouseenter', () => {
            province.style.width = '10%'
        })

        paris.addEventListener('mouseleave', () => {
            province.style.width = '20%'
        })

        const btn = document.querySelector('.btn-start')
        const letters = []
        for(let letter of btn.textContent.split('')) {
            letters.push(letter)
        }
        btn.textContent = ''
        const inner_el = document.createElement('div')
        inner_el.classList.add('inner-btn')
        for(let i=1; i<=2; i++) {
            const span = document.createElement('span')
            span.classList.add('line')
            inner_el.appendChild(span)
            for(let letter of letters) {
                const letter_el = document.createElement('span')
                letter_el.classList.add('letter')
                letter === ' ' && letter_el.classList.add('space')
                letter_el.textContent = letter
                span.appendChild(letter_el)
            }
        }
        btn.appendChild(inner_el)
        
    }, [])

    return (
        <div id="s1" className="slide s-1 flex-col">
            <div className="w-full flex justify-between absolute">
                <div className="province illu w-1/5 h-screen flex justify-center items-center relative overflow-hidden">
                    <img className="absolute" src={left1} alt="" />
                    <img className="absolute" src={left2} alt="" />
                    <img className="absolute" src={left3} alt="" />
                    <img className="absolute" src={left4} alt="" />
                    <img className="absolute" src={left5} alt="" />
                    <img className="absolute" src={left6} alt="" />
                    <img className="absolute" src={left7} alt="" />
                    <img className="absolute" src={left8} alt="" />
                </div>
                <div className="paris illu w-1/5 h-screen bg-gray-100">
                    <img className="absolute" src={right4} alt="" />
                    <img className="absolute" src={right3} alt="" />
                    <img className="absolute" src={right2} alt="" />
                    <img className="absolute" src={right1} alt="" />
                </div>
            </div>
            <h1 className="heading z-10">Immobilier : capitale <span>ou province ?</span></h1>
            <div onClick={fnStep} className="btn-start mt-10 z-10">Start the experience</div>
        </div>
    )
}

export default Slide1
