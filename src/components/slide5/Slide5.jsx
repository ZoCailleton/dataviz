import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReactMapboxGl, { Marker } from "react-mapbox-gl";

import './Slide5.scss'

gsap.registerPlugin(ScrollTrigger)

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoiem9jYWlsbGV0b24iLCJhIjoiY2t3YzNwaWtwMDZ2ZjJxcG50Njc2OW16bSJ9.SPrjoZ_ywgA-4jn80vCwJQ',
    doubleClickZoom: false,
    touchZoomRotate: false
});

const Slide5 = ({ step_gl }) => {

    const section = useRef(null)
    
    step_gl && section.current.scrollIntoView()

    const [step, setStep] = useState(0)
    const [center, setCenter] = useState({x: 2.3522219, y: 48.856614})
    const [zoom, setZoom] = useState([12])
    
    const reset = (collection, show = false) => {
        for(let marker of document.querySelectorAll(collection)) {
            marker.display.style = show ? 'block' : 'none'
        }
    }

    useEffect(() => {

        if(step === 1) {
            setZoom([11])
            setCenter(prev => {
                return {...center, x: 2.3522219, y: 48.856614}
            })
        } else if(step === 2) {
            setZoom([9])
            setCenter(prev => {
                return {...center, x: 2.3522219, y: 48.8}
            })
            for(let bar of document.querySelectorAll('.idf .bar-recherches')) {
                bar.style.width = bar.dataset.recherches + 'px'
                console.log(bar.dataset.recherches)
            }
        } else if(step === 3) {
            setZoom([6])
            setCenter(prev => {
                return {...center, x: 2.3522219, y: 46.2}
            })
            for(let bar of document.querySelectorAll('.province .bar-recherches')) {
                bar.style.width = bar.dataset.recherches + 'px'
            }
        }
        
    }, [step])

    useEffect(() => {

        gsap.to('.slide.s-4 .phrase', {
            x: '-50vw',
            scrollTrigger: {
                trigger: '.slide.s-4',
                pin: '.slide.s-4',
                start: 'top top',
                end: '200%',
                scrub: true
            }
        })
                
        gsap.to('.slide.s-5 .part.text', {
            y: '-100vh',
            scrollTrigger: {
                trigger: '.slide.s-5',
                pin: '.slide.s-5',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                onUpdate: function(self) {
                    let progress = Math.round(self.progress * 100)
                    if(progress < 20) {
                        setStep(1)
                    } else if(progress > 20 && progress < 40) {
                        setStep(2)
                    } else if(progress > 40) {
                        setStep(3)
                    }
                }
            }
        })

    }, [])

    return (
        <div id="s4" className="wrapper-slide">
            <div className="slide s-4">
                <p className="phrase">Mais alors, où vont les parisiens ?</p>
            </div>
            <div className="slide s-5 map">
                <div className="part text">
                    <div className={`group ${step === 1 ? 'active' : ''}`}>
                        <h3>Banlieux proches</h3>
                        <p>Depuis le début de la crise sanitaire, de nombreux Parisiens souhaitent s’éloigner de la Ville Lumière. En effet, selon une étude Pretto basée sur 47 000 simulations d’achat immobilier réalisées par des Parisiens entre janvier 2019 et mai 2021, les recherches de résidences principales en Province et en grande couronne ont respectivement augmenté de 77% et 25%.</p>
                    </div>
                    <div className={`group idf ${step === 2 ? 'active' : ''}`}>
                        <h3>Ile-de-France</h3>
                        <p className="mb-10">En Ile-de-France, 5 villes se démarquent, dont 3 villes dans les Yvelines : Rambouillet, Viroflay et la Celle-Saint-Cloud. Voici leur classement, par pourcentage de recherches :</p>
                    </div>
                    <div className={`group province ${step === 3 ? 'active' : ''}`}>
                        <h3>Province</h3>
                        <p className="mb-10">En province, la ville d'Evreux arrive en tête des villes les plus prisées par les parisiens. Les villes de Nice, Biarritz et Anglet suivent. Rennes vient compléter le top 5.</p>
                    </div>
                </div>
                <div className="part relative map">
                    <div className="w-full h-full absolute left-0 top-0 z-10" />
                    <Map flyToOptions={{ speed: 0.5 }} zoom={zoom} containerStyle={{ height: '100vh' }} style={{ height: 500 }} center={[center.x, center.y]} style="mapbox://styles/zocailleton/ckwc3vwk85bkq14utqb4jlqhy">
                        {step === 1 && <Marker
                            coordinates={[2.288340, 48.894340]}
                            anchor="bottom">
                            <div className="marker marker-idf">1. Levallois-Perret</div>
                        </Marker>}
                        {step === 1 && <Marker
                            coordinates={[2.270000, 48.823898]}
                            anchor="bottom">
                            <div className="marker marker-idf">2. Issy-les-Moulineaux</div>
                        </Marker>}
                        {step === 1 && <Marker
                            coordinates={[2.253100, 48.897800]}
                            anchor="bottom">
                            <div className="marker marker-idf">3. Courbevoie</div>
                        </Marker>}
                        {step === 1 && <Marker
                            coordinates={[2.436900, 48.858311]}
                            anchor="bottom">
                            <div className="marker marker-idf">4. Montreuil</div>
                        </Marker>}
                        {step === 1 && <Marker
                            coordinates={[2.243230, 48.833832]}
                            anchor="bottom">
                            <div className="marker marker-idf">5. Boulogne-Billancourt</div>
                        </Marker>}
                        {step === 2 && <Marker
                            coordinates={[1.829079, 48.643868]}
                            anchor="bottom">
                            <div className="marker marker-idf ramb">1. Rambouillet</div>
                        </Marker>}
                        {step === 2 && <Marker
                            coordinates={[2.701620, 48.404676]}
                            anchor="bottom">
                            <div className="marker marker-idf">3. Fontainebleau</div>
                        </Marker>}
                        {step === 2 && <Marker
                            coordinates={[2.327234, 48.975751]}
                            anchor="bottom">
                            <div className="marker marker-idf">4. Deuil-la-Barre</div>
                        </Marker>}
                        {step === 2 && <Marker
                            coordinates={[2.135179, 48.844279]}
                            anchor="bottom">
                            <div className="marker marker-idf">5. La-Celle-Saint-Cloud</div>
                        </Marker>}
                        {step === 2 && <Marker
                            coordinates={[2.173231, 48.78]}
                            anchor="bottom">
                            <div className="marker marker-idf">2. Viroflay</div>
                        </Marker>}
                        {step === 3 && <Marker
                            coordinates={[1.150228, 49.024327]}
                            anchor="bottom">
                            <div className="marker marker-province">1. Évreux</div>
                        </Marker>}
                        {step === 3 && <Marker
                            coordinates={[7.261953, 43.710173]}
                            anchor="bottom">
                            <div className="marker marker-province">2. Nice</div>
                        </Marker>}
                        {step === 3 && <Marker
                            coordinates={[-1.558626, 43.9]}
                            anchor="bottom">
                            <div className="marker marker-province">3. Biarritz</div>
                        </Marker>}
                        {step === 3 && <Marker
                            coordinates={[-1.514699, 43.47]}
                            anchor="bottom">
                            <div className="marker marker-province">4. Anglet</div>
                        </Marker>}
                        {step === 3 && <Marker
                            coordinates={[-1.677793, 48.117266]}
                            anchor="bottom">
                            <div className="marker marker-province">5. Rennes</div>
                        </Marker>}
                    </Map>
                </div>
            </div>
            <p className="paragraphe center">Depuis le début de la crise sanitaire, de nombreux Parisiens souhaitent s’éloigner de la Ville Lumière. En effet, selon une étude Pretto basée sur 47 000 simulations d’achat immobilier réalisées par des Parisiens entre janvier 2019 et mai 2021, les recherches de résidences principales en Province et en grande couronne ont respectivement augmenté de 77 % et 25 %.</p>
        </div>
    )
}

export default Slide5
