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
    const [pieActive, setPieActive] = useState(true)

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
                    <p className="paragraphe">?? Paris, les populations du sud-ouest sont plut??t ais??es alors que celles du nord-est sont les plus d??favoris??es. Toutefois, une analyse plus fine ?? l???int??rieur m??me des grands quartiers fait appara??tre des profils socio-d??mographiques h??t??rog??nes, qui t??moignent d'une certaine mixit?? sociale. Celle-ci a ??t?? mesur??e et rep??r??e de mani??re tr??s pr??cise, mettant en ??vidence cinq profils de quartiers, dont la r??partition spatiale fait appara??tre une mosa??que sociale caract??ristique de Paris. L'un de ces profils de quartiers ne se retrouve en effet que dans la capitale o?? cohabitent des populations aux revenus tr??s contrast??s.
                    </p>
                </div>
                <div className="slide bilan-paris">

                    <div className="flex items-center">

                        <div className="left flex flex-col items-end gap-4">
                            <div className="base_bar">
                                <label className="label">Pollution</label>
                                <div className="bar-price" data-amount="300" style={{ width: 300 }} />
                            </div>
                            <div className="base_bar">
                                <label className="label">Prix immobilier</label>
                                <div className="bar-price" data-amount="400" style={{ width: 400 }} />
                            </div>
                            <div className="base_bar">
                                <label className="label">Co??t de la vie</label>
                                <div className="bar-price" data-amount="200" style={{ width: 200 }} />
                            </div>
                            {pieActive && <div className="pie-wrapper">
                                {step >= 2 && <div className="pie">
                                    <div className="chart">
                                        <p>+10%</p>
                                        <img src={pie_chart_1} alt="" />
                                    </div>
                                </div>}
                                {step >= 2 && <div className="pie">
                                    <div className="chart">
                                        <p>+24,7%</p>
                                        <img src={pie_chart_2} alt="" />
                                    </div>
                                </div>}
                                {step >= 2 && <div className="pie">
                                    <div className="chart">
                                        <p>+13%</p>
                                        <img src={pie_chart_3} alt="" />
                                    </div>
                                </div>}
                            </div>}
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
                            {pieActive && <div className="pie-wrapper">
                                {step >= 2 && <div className="pie">
                                    <div className="chart">
                                        <p>+800%</p>
                                        <img src={pie_chart_4} alt="" />
                                    </div>
                                </div>}
                                {step >= 2 && <div className="pie">
                                    <div className="chart">
                                        <p>+25%</p>
                                        <img src={pie_chart_5} alt="" />
                                    </div>
                                </div>}
                                {step >= 2 && <div className="pie">
                                    <div className="chart">
                                        <p>+10%</p>
                                        <img src={pie_chart_6} alt="" />
                                    </div>
                                </div>}
                            </div>}
                        </div>
                    </div>

                </div>
                <div className="slide paris-map">
                    <div className="btn-container">
                        {quarter !== 1 && <div onClick={() => setQuarter(1)} className="btn btn-1">Terroire mixte</div>}
                        {quarter !== 3 && <div onClick={() => setQuarter(3)} className="btn btn-2">Terroire ais??</div>}
                        {quarter !== 2 && <div onClick={() => setQuarter(2)} className="btn btn-3">Terroire Moyen</div>}
                    </div>
                    <div className="map">
                        <img className="base" src={map_base} alt="" />
                        {quarter === 1 && <img className="quarter q1" src={q1} alt="" />}
                        {quarter === 2 && <img className="quarter q2" src={q2} alt="" />}
                        {quarter === 3 && <img className="quarter q3" src={q3} alt="" />}
                        {quarter === 1 && <BoxInfos x={300} y={-200} titre="Territoire  mixte" description="Un quart des quartiers parisiens constituent des ?? territoires de mixit?? sociale ?? h??bergeant des profils de la population tr??s diversifi??s. Dans ces quartiers vivent 542 000 personnes. Le niveau de vie m??dian y est de 26 100 ??? par an" revenu="26 000" habitants="542 000" />}
                        {quarter === 3 && <BoxInfos x={400} y={0} titre="Territoire  ais??" description="?? l???oppos??, plus de 15 % des quartiers forment des ?? territoires ais??s ?? et abritent 347 000 personnes. La proportion de propri??taires y est ??lev??e. Ils comportent beaucoup de personnes ??g??es, de cadres et de chefs d???entreprise. En revanche, Le niveau de vie m??dian s?????tablit ?? 41 500 ??? et le taux de pauvret?? ?? 9 %." revenu="41 500" habitants="347 000" />}
                        {quarter === 2 && <BoxInfos x={-350} y={200} titre="Territoire  moyen" description="Enfin, deux quartiers sur dix, les ??territoires accueillant les classes moyennes??, r??unissent 467000 personnes. I La part des familles avec enfant(s) y est plus importante, qu???en soit ; Le niveau de vie de cette classe, 20 300 ??? par an, est un peu plus faible que celui de Paris." revenu="20 300" habitants="467 000" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide2
