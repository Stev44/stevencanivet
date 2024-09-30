import './hero.scss'
import React from 'react'
import Socials from '../../components/socials/socials'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg'
import ParticlesComponent from '../../components/Particles/particles'
import profile from '../../assets/images/profil.jpg'
import { scrollToSection } from '../../utils/function'
import { useSelector } from 'react-redux'
import { heroLang } from '../../utils/data'

const MemoizedParticlesComponent = React.memo(ParticlesComponent) // permet de ne pas re render les particules au changement de langue

const Hero = () => {
  const lang = useSelector((state) => state.switchLang.lang)

  return (
    <section className="hero" id="hero">
      <MemoizedParticlesComponent />
      <div className="hero_wrapper margin">
        <div className="container">
          <div className="wrapper">
            <h1 className="wrapper_title">Steven</h1>
            <p className="wrapper_job">
              <strong>{!lang ? heroLang.strongFr : heroLang.strongEn}</strong>
            </p>
            <p className="wrapper_description lang">
              {!lang ? heroLang.descriptionFr : heroLang.descriptionEn}
            </p>
            <div className="socials">
              <Socials hero="socials_icon" />
            </div>
            <button
              className="wrapper_button"
              onClick={() => scrollToSection('contact')}
            >
              <span>{!lang ? heroLang.buttonFr : heroLang.buttonEn}</span>
            </button>
          </div>
          <div className="profile">
            <img src={profile} alt="Steven Canivet" className="profile_img" />
          </div>
        </div>
        <button className="button" onClick={() => scrollToSection('projects')}>
          <span className="sr-only">Nav button</span>
          <ArrowDown className="button_arrow" />
        </button>
      </div>
    </section>
  )
}

export default Hero
