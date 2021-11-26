import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState, useEffect } from 'react'

import './slide6.scss'

import communes_idf from '../../data/communes-idf'
import communes_province from '../../data/communes-province'

gsap.registerPlugin(ScrollTrigger)

const Ville = ({ville, recherches}) => {
    return (
        <div className="chart py-3 flex">
            <div className="w-2/12 pr-2">{ville}</div>
            <div data-recherches={recherches} className="bar h-4 bg-gray-100" />
            <div className="ml-4">+{recherches}%</div>
        </div>
    )
}

const Slide6 = ({ step }) => {

    const [tranche, setTranche] = useState('idf')

    useEffect(() => {

        const tranche_idf = document.querySelector('.tranche.idf')
        const tranche_villes = document.querySelector('.tranche.villes')
        const tranche_province = document.querySelector('.tranche.province')

        if(tranche === 'idf') {
            for(let chart of tranche_idf.querySelectorAll('.chart .bar')) {
                chart.style.width = chart.dataset.recherches * 4 + 'px'
            }
        } else if(tranche === 'province') {
            for(let chart of tranche_province.querySelectorAll('.chart .bar')) {
                chart.style.width = chart.dataset.recherches * 1.5 + 'px'
            }
        }

    }, [tranche])

    useEffect(() => {
        
        const tween = gsap.to('.wrapper-slide.s-6 .inner', {
            x: '0',
            scrollTrigger: {
                trigger: '.wrapper-slide.s-6',
                pin: '.wrapper-slide.s-6',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })

    }, [])

    return (
        <div id="s6" className="wrapper-slide s-6">
            <div className="inner flex">
                <div className="slide">
                    <p style={{ lineHeight: '1.35em' }} className="max-w-5xl text-4xl">Paris attire des touristes toujours plus nombreux. Il faut bien le reconnaître la ville lumière abrite de nombreux centres culturels. Elle vit et danse au rythme de l’acool et de ses nuits folles. Malheureusement la réalité est tout autre, les nuits parisennes ne peuvent nous éblouirent au point d’oublier une lourde contrepartie ! Effectivement sous le ciel de paris les prix s’envolent ! De l’immobilier au coût de la vie, les espaces de plus en plus réduits quand rien n’est trop grand Paris. Les parisiens la quittent, s’en vont vers les villes et les regions voisines, là où l’air est respirable, là où les prix sont moins élevés.</p>
                </div>
                <div className="slide flex-col">
                    <p className="text-xl mb-16 underline">Pourcentage d'augmentation des recherches de logement par les parisiens :</p>
                    {tranche === 'idf' && <div className="tranche idf">
                        {communes_idf.map((item, i) => {
                            return <Ville key={i} ville={item.ville} recherches={item.recherches} />
                        })}
                    </div>}
                    {tranche === 'province' && <div className="tranche province">
                        {communes_province.map((item, i) => {
                            return <Ville key={i} ville={item.ville} recherches={item.recherches} />
                        })}
                    </div>}
                    <div className="mt-10 flex relative">
                        <div className={`background ${tranche === 'idf' ? 'left' : 'right'}`} />
                        <div onClick={() => setTranche('idf')} className="cta">Ile-de-France</div>
                        <div onClick={() => setTranche('province')} className="cta">Province</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide6
