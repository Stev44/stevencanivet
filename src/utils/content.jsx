import { ReactComponent as Redux } from '../assets/tech/redux.svg'
import { ReactComponent as ReactIcon } from '../assets/tech/react.svg'
import { ReactComponent as Sass } from '../assets/tech/sass.svg'
import { ReactComponent as Html } from '../assets/tech/html.svg'
import { ReactComponent as MongoDB } from '../assets/tech/mongoDB.svg'
import { ReactComponent as Figma } from '../assets/tech/figma.svg'
import { ReactComponent as Css } from '../assets/tech/css.svg'
import { ReactComponent as Js } from '../assets/tech/js.svg'
import { ReactComponent as Github } from '../assets/tech/github.svg'

import project from '../assets/images/724.png'
import ab from '../assets/images/argentbank2.jpeg'
import portfolio from '../assets/images/portfolio.webp'
import kasa from '../assets/images/kasa2.jpg'
import leo from '../assets/images/planche.webp'
import nina from '../assets/images/nina2.jpg'

export const projects = [
  {
    title: 'Léo Vautrin Coaching',
    img: leo,
    descriptionFr: `Réalisation d'un site vitrine "from scratch", pour un coach sportif.`,
    descriptionEn: 'Creation of a showcase site for a sports coach.',
    technologies: [ReactIcon, Sass],
    site: 'https://stev44.github.io/leo_vautrin_coaching/',
    siteTextEn: 'View site',
    siteTextFr: 'Voir le site',
  },
  {
    title: 'Portfolio',
    img: portfolio,
    descriptionFr: `Projet de fin d'étude réalisé "from scratch", en react et redux.`,
    descriptionEn:
      'End-of-study project created from scratch, in react and redux.',
    technologies: [ReactIcon, Redux, Sass, Figma],
    code: 'https://github.com/Stev44/projets_12_steven_canivet',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
  },
  {
    title: 'Argent Bank',
    img: ab,
    descriptionFr: `Réalisation d'un système d'authentification et des routes API pour les transactions.`,
    descriptionEn:
      'Creation of an authentication system and API routes for transactions.',
    technologies: [ReactIcon, Redux, MongoDB, Css],
    code: 'https://github.com/Stev44/projet_11_steven_canivet',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
  },
  {
    title: 'Kasa',
    img: kasa,
    descriptionFr: `Réalisation d'un site de location immobilière.`,
    descriptionEn: 'Development of a property rental website.',
    technologies: [ReactIcon, Sass],
    code: 'https://github.com/Stev44/projet_8_steven_canivet',
    site: 'https://stev44.github.io/projet_8_steven_canivet/',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
    siteTextEn: 'View site',
    siteTextFr: 'Voir le site',
  },
  {
    title: 'Nina Carducci',
    img: nina,
    descriptionFr: `Amélioration du référencement naturel (SEO) d'un site de photographe.`,
    descriptionEn: `Improving the natural referencing (SEO) of a photographer's website.`,
    technologies: [Js, Html, Css],
    code: 'https://github.com/Stev44/projet_9_steven_canivet',
    site: 'https://stev44.github.io/projet_9_steven_canivet/',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
    siteTextEn: 'View site',
    siteTextFr: 'Voir le site',
  },
  {
    title: '724 events',
    img: project,
    descriptionFr: `Analyse et débogage d'un site d'évènementiel.`,
    descriptionEn: 'Analysis and debugging of an events site',
    technologies: [ReactIcon],
    code: 'https://github.com/Stev44/projet_10_steven_canivet',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
  },
]

export const tech = [
  {
    icon: ReactIcon,
    name: 'React',
  },
  {
    icon: Redux,
    name: 'Redux',
  },
  {
    icon: Js,
    name: 'Javascript',
  },
  {
    icon: Sass,
    name: 'Sass',
  },
  {
    icon: Css,
    name: 'CSS',
  },
  {
    icon: Html,
    name: 'HTML',
  },
  {
    icon: Figma,
    name: 'Figma',
  },
  {
    icon: Github,
    name: 'Github',
  },
]
