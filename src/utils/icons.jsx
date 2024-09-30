import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedinIn,
  faLinkedin,
  faGithub,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPaperPlane,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

export const socialMedia = [
  {
    link: 'https://www.linkedin.com/',
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    link: 'https://github.com/Stev44',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    link: 'https://www.instagram.com/',
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    link: 'https://x.com/',
    icon: <FontAwesomeIcon icon={faXTwitter} />,
  },
]

export const icon = [
  {
    link: 'https://www.linkedin.com/',
    icon: <FontAwesomeIcon icon={faLinkedin} className="contact_icon" />,
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} className="contact_icon" />,
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} className="contact_icon" />,
  },
  {
    icon: <FontAwesomeIcon icon={faPaperPlane} className="button_icon" />,
  },
]
