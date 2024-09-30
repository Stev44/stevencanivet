import { Link } from 'react-router-dom'
import './header.scss'
import { ReactComponent as ArrowUp } from '../../assets/icons/arrowUp.svg'
import { ReactComponent as France } from '../../assets/icons/france.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Uk } from '../../assets/icons/uk.svg'
import React, { useEffect, useRef, useState } from 'react'
import { scrollToSection } from '../../utils/function'
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../../store/slice'
import { navLang } from '../../utils/data'

const Header = React.memo(() => {
  const dispatch = useDispatch()
  const navRef = useRef(null)
  const lang = useSelector((state) => state.switchLang.lang)
  const [visible, setVisible] = useState(false)
  const [mobileButton, setMobileButton] = useState(false)
  // const [completedAnimations, setCompletedAnimations] = useState(0)
  // const [loaderActive, setLoaderActive] = useState(false)
  // const [loaderVisible, setLoaderVisible] = useState(false)

  // Permet d'afficher le bouton à 200px de scroll en dessous la section Hero et permet aussi d'attribuer
  useEffect(() => {
    const handleScroll = () => {
      const scrollVisible = 200

      if (window.scrollY > scrollVisible) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // fonction pour fermer le menu
  const handleClickOutside = (event) => {
    if (navRef.current && navRef.current.contains(event.target)) {
      setMobileButton(false)
    }
  }
  useEffect(() => {
    if (mobileButton) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Nettoyage du listener quand le menu se ferme
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileButton])

  const handleMobileBar = () => {
    setMobileButton(!mobileButton)
  }

  const handleLangChange = () => {
    // setLoaderVisible(true)
    // setLoaderActive(true)

    // setTimeout(() => {
    dispatch(setLang({ lang: !lang }))
    // setLoaderActive(false)
    // }, 1000)
  }

  // const handleAnimationEnd = () => {
  //   setCompletedAnimations((prev) => prev + 1)
  // }

  // useEffect(() => {
  //   if (completedAnimations === 10) {
  //     setLoaderVisible(false)
  //     setCompletedAnimations(0)
  //   }
  // }, [completedAnimations])

  return (
    <header id="header">
      <nav className="nav">
        <Link to={'/'} onClick={() => scrollToSection('header')}>
          <h1 className="nav_title">
            Steven <strong className="nav_title_highlight">Canivet</strong>
          </h1>
        </Link>
        <div
          className={`nav_links ${
            mobileButton ? 'nav_linksActive' : 'nav_linksHidden'
          }`}
        >
          {navLang.map((item, index) => (
            <Link
              onClick={() => scrollToSection(item.id)}
              className={item.class}
              key={index}
            >
              {!lang ? item.nameFr : item.nameEn}
            </Link>
          ))}
          <button className="nav_links_button" onClick={handleLangChange}>
            {!lang ? (
              <France className="nav_links_button_icon" />
            ) : (
              <Uk className="nav_links_button_icon" />
            )}
          </button>
        </div>
        <div className="nav_mobile" onClick={handleMobileBar}>
          {!mobileButton ? (
            <FontAwesomeIcon icon={faBars} className="nav_mobile_icon" />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="nav_mobile_icon" />
          )}
        </div>
        <button
          onClick={() => scrollToSection('header')}
          className={`back ${visible ? 'visible' : ''}`}
        >
          <span className="sr-only">Nav button</span>
          <ArrowUp className="arrow" />
        </button>
        {mobileButton && <div ref={navRef} className="overlay"></div>}
      </nav>

      {/* Masquer le loader si loaderVisible est faux
      {loaderVisible && (
        <div className="loader">
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className={`loader_item ${loaderActive ? 'active' : ''}`}
              id={`item${index}`}
              onAnimationEnd={handleAnimationEnd} // Appelle la fonction quand une animation se termine
            ></div>
          ))}
        </div>
      )} */}
    </header>
  )
})

export default Header
