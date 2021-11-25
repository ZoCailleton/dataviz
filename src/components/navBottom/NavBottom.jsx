const NavBottom = ({ fnStep, step }) => {
    return (
        <nav className="navigation">
            <div className="cta">Précédent</div>
            <div className="inner">
                <a href="#s1" onClick={() => fnStep(1)} className={`step ${step >= 1 ? 'active' : ''}`} />
                <a href="#s2" onClick={() => fnStep(2)} className={`step ${step >= 2 ? 'active' : ''}`} />
                <a href="#s3" onClick={() => fnStep(3)} className={`step ${step >= 3 ? 'active' : ''}`} />
                <a href="#s4" onClick={() => fnStep(4)} className={`step ${step >= 4 ? 'active' : ''}`} />
                <a href="#s5" onClick={() => fnStep(5)} className={`step ${step >= 5 ? 'active' : ''}`} />
                <a href="#s6" onClick={() => fnStep(6)} className={`step ${step >= 6 ? 'active' : ''}`} />
            </div>
            <div className="cta">Suivant</div>
        </nav>
    )
}

export default NavBottom
