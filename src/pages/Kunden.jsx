import logo from '../assets/logo.png';
import heroImage from '../assets/hero.png';

function Kunden() {
    return (
    <section className="hero-section">
    <div className="section-container Hero">
      <div className="Hero__Container Hero__Container--left">
        <img className="Hero__Logo" src={logo} />
        <h1 className="Hero__Headline">Profitiere mit Kunden</h1>
        <h2 className="Hero__Subheadline">
          Als Mitgesellschafter kannst du am Erfolg des Unternehmens teilhaben
        </h2>
        <a className="button" href="#" target="_self">
          Jetzt Kontakt aufnehmen
        </a>
      </div>
      <div className="Hero__Container Hero__Container--right">
        <a className="button" href="#" target="_self">FAQ</a>
        <img className="Hero__Image" src={heroImage} />
      </div>
    </div>
  </section>
    )
}
export default Kunden