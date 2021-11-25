import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

import d_a from '../../data/departs-arrivees'

import './slide3.scss'

gsap.registerPlugin(ScrollTrigger)

const Slide3 = ({ step }) => {

    useEffect(() => {

        document.querySelectorAll('.tranche-wrapper').forEach((tranche) => {
            gsap.to(tranche, {
                scrollTrigger: {
                    start: 'top 60%',
                    trigger: tranche,
                    scrub: true,
                    onEnter() {
                        tranche.querySelector('.departs .bar').style.width = tranche.dataset.arrivees + 'px'
                        tranche.querySelector('.arrivees .bar').style.width = tranche.dataset.arrivees + 'px'
                    },
                    onLeaveBack() {
                        tranche.querySelector('.departs .bar').style.width = 0
                        tranche.querySelector('.arrivees .bar').style.width = 0
                    }
                }
            })
        })

    }, [])

    const Tranche = ({tranche, departs, arrivees}) => {
        return (
            <div data-departs={departs * 0.02} data-arrivees={arrivees * 0.02} className="tranche-wrapper">
                <div className="departs">
                    <div className="bar-container">
                        <p>{departs}</p>
                        <div className="bar" />
                    </div>
                </div>
                <div className="tranche">{tranche} - {tranche + 5} ans</div>
                <div className="arrivees">
                    <div className="bar-container">
                        <div className="bar" />
                        <p>{arrivees}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="p-10">
                <p className="paragraphe center">Parmi ces “exilés parisiens”, trois profils-type majeurs semblent ressortir : le couple trentenaire n’arrivant plus à concilier vie professionnelle et vie personnelle, les futurs jeunes parents, les personnes en fin de carrière, cherchant une dernière reconversion avant d’envisager la retraite.</p>
            </div>
            <div id="s3" className="slide_ad flex-col items-center relative">
                <div className="w-full flex absolute top-0">
                    <div className="w-1/2 h-full"/>
                    <div className="w-1/2 h-full bg-black"/>
                </div>
                <div className="titles flex items-center justify-center gap-8 z-10">
                    <p>Départs</p>
                    <p className="mt-3">Tranche d'âge</p>
                    <p>Arrivées</p>
                </div>
                <div className="tranches mt-10 z-10">
                    {d_a.map((item, i) => {
                        return <Tranche key={i} tranche={item.tranche} departs={item.departs} arrivees={item.arrivees} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Slide3
