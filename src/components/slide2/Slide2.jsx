import { useEffect, useState, useRef, Suspense } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Chart from 'react-google-charts'

import './slide2.scss'

import map_base from '../../assets/map-quarter/map_base.jpg'
import q1 from '../../assets/map-quarter/q1.svg'
import q2 from '../../assets/map-quarter/q2.svg'
import q3 from '../../assets/map-quarter/q3.svg'
import q4 from '../../assets/map-quarter/q4.svg'

import stat_droite_1 from '../../assets/stat_droit_1.svg'
import stat_droite_2 from '../../assets/stat_droit_2.svg'
import stat_droite_3 from '../../assets/stat_droit_3.svg'

import stat_gauche_1 from '../../assets/stat_gauche_1.svg'
import stat_gauche_2 from '../../assets/stat_gauche_2.svg'
import stat_gauche_3 from '../../assets/stat_gauche_3.svg'

import pie_chart_1 from '../../assets/pie-chart-1.svg'
import pie_chart_2 from '../../assets/pie-chart-2.svg'
import pie_chart_3 from '../../assets/pie-chart-3.svg'
import pie_chart_4 from '../../assets/pie-chart-4.svg'
import pie_chart_5 from '../../assets/pie-chart-5.svg'
import pie_chart_6 from '../../assets/pie-chart-6.svg'

import BoxInfos from './boxInfos'

gsap.registerPlugin(ScrollTrigger)

const Slide2 = ({ step }) => {

    const [active, setActive] = useState(false)
    const [quarter, setQuarter] = useState(0)

    const ref = useRef(null)

    useEffect(() => {

        let tl = gsap.timeline()
        tl
        .to('.wrapper-slide.s-2 .inner', {x: '-200vw'})
        .to('.wrapper .paris-map .map .base', {x: 0, duration: 0.5}, '-=0.5')
        
        ScrollTrigger.create({
            animation: tl,
            trigger: '.wrapper-slide.s-2',
            pin: '.wrapper-slide.s-2',
            start: 'top top',
            end: '200%',
            markers: true,
            scrub: true,
            onUpdate: function(self) {
                let progress = Math.round(self.progress * 100)
                progress > 25 ? setActive(true) : setActive(false)
            }
        })

    }, [])

    return (
        <div id="s2" className="wrapper-slide s-2">
            <div className="inner flex">
                <div className="slide">
                    <p className="paragraphe">À Paris, les populations du sud-ouest sont plutôt aisées alors que celles du nord-est sont les plus défavorisées. Toutefois, une analyse plus fine à l’intérieur même des grands quartiers fait apparaître des profils socio-démographiques hétérogènes, qui témoignent d'une certaine mixité sociale. Celle-ci a été mesurée et repérée de manière très précise, mettant en évidence cinq profils de quartiers, dont la répartition spatiale fait apparaître une mosaïque sociale caractéristique de Paris. L'un de ces profils de quartiers ne se retrouve en effet que dans la capitale où cohabitent des populations aux revenus très contrastés.
                    </p>
                </div>
                <div className="slide bilan-paris">

                    <div className="flex items-center">

                        <div className="left flex flex-col items-end gap-4">
                            <div className="base_bar">
                                <label className="label">Pollution</label>
                                <div style={{ width: 300 }} />
                            </div>
                            <div className="base_bar">
                                <label className="label">Prix immobilier</label>
                                <div style={{ width: 400 }} />
                            </div>
                            <div className="base_bar">
                                <label className="label">Coût de la vie</label>
                                <div style={{ width: 200 }} />
                            </div>
                            <div className="pie-wrapper">
                                <div className="pie">
                                    <div className="chart">
                                        <p>10%</p>
                                        <img src={pie_chart_1} alt="" />
                                    </div>
                                </div>
                                <div className="pie">
                                    <div className="chart">
                                        <p>24,7%</p>
                                        <img src={pie_chart_2} alt="" />
                                    </div>
                                </div>
                                <div className="pie">
                                <div className="chart">
                                        <p>13%</p>
                                        <img src={pie_chart_3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle" />
                        <div className="right flex flex-col items-start gap-4">
                            <div className="base_bar">
                                <label className="label">Culture</label>
                                <div style={{ width: 400 }} />
                            </div>
                            <div className="base_bar">
                                <label className="label">Salaire</label>
                                <div style={{ width: 300 }} />
                            </div>
                            <div className="base_bar">
                                <label className="label">Transports</label>
                                <div style={{ width: 250 }} />
                            </div>
                            <div className="pie-wrapper">
                                <div className="pie">
                                    <div className="chart">
                                        <p>100%</p>
                                        <img src={pie_chart_4} alt="" />
                                    </div>
                                </div>
                                <div className="pie">
                                    <div className="chart">
                                        <p>25%</p>
                                        <img src={pie_chart_5} alt="" />
                                    </div>
                                </div>
                                <div className="pie">
                                <div className="chart">
                                        <p>10%</p>
                                        <img src={pie_chart_6} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="slide paris-map">
                    <div className="btn-container">
                        <div className="btn">Terroire mixte</div>
                        <div className="btn">Terroire aisé</div>
                    </div>
                    <div className="map">
                        <img className="base" src={map_base} alt="" />
                        <img className="quarter q1" src={q1} alt="" />
                        <img className="quarter q3" src={q3} alt="" />
                        <img className="quarter q4" src={q4} alt="" />
                        <img className="quarter q2" src={q2} alt="" />
                        {quarter === 1 && <BoxInfos x={-200} y={-200} titre="Territoire  mixte" description="Un quart des quartiers parisiens constituent des « territoires de mixité sociale » hébergeant des profils de la population très diversifiés. Dans ces quartiers vivent 542 000 personnes. Le niveau de vie médian y est de 26 100 € par an" revenu="26 000" habitants="542 000" />}
                        {quarter === 2 && <BoxInfos x={300} y={100} titre="Territoire  aisé" description="À l’opposé, plus de 15 % des quartiers forment des « territoires aisés » et abritent 347 000 personnes. La proportion de propriétaires y est élevée. Ils comportent beaucoup de personnes âgées, de cadres et de chefs d’entreprise. En revanche, Le niveau de vie médian s’établit à 41 500 € et le taux de pauvreté à 9 %." revenu="41 500" habitants="347 000" />}
                        {quarter === 3 && <BoxInfos x={-350} y={200} titre="Territoire  mixte" description="Enfin, deux quartiers sur dix, les «territoires accueillant les classes moyennes», réunissent 467 000 personnes. Il s’agit de territoires où la part de cadres est inférieure de 10 points  et celle des employés ou ouvriers de 9 points supérieure. La part des familles avec enfant(s) y est plus importante, quelle qu’en soit la composition ; Le niveau de vie de cette classe, 20 300 € par an, est un peu plus faible que celui de Paris.  " revenu="41 500" habitants="347 000" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide2
