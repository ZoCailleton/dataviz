import './boxInfos.scss'

const boxInfos = ({ x, y, titre, description, revenu, habitants }) => {
    return (
        <div style={{ transform: `translate(${x}px, ${y}px)` }} className="box-infos">
            <h3>{titre}</h3>
            <ul>
                <li>Revenu médian : {revenu}</li>
                <li>{habitants} habitants</li>
            </ul>
            <p>{description}</p>
        </div>
    )
}

export default boxInfos
