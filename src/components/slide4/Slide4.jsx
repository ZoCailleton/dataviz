import { useEffect } from "react"

import d_a from '../../data/departs-arrivees'

const Slide4 = ({ step }) => {

    useEffect(() => {
        console.log('test')
        console.log(d_a)
    }, [])

    return (
        <div className="slide">
            {d_a.map(() => {
                return <div></div>
            })}
        </div>
    )
}

export default Slide4
