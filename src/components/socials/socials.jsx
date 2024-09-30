import { socialMedia } from '../../utils/icons'

const Socials = ({ hero, footer }) => {
  return (
    <>
      {socialMedia.map((item, index) => (
        <a key={index} href={item.link}>
          <span className={footer || hero}>{item.icon}</span>
          <span className="sr-only">Social button</span>
        </a>
      ))}
    </>
  )
}

export default Socials
