import './about.scss'
import { ReactComponent as Pro } from '../../assets/icons/bag.svg'
import { ReactComponent as Gear } from '../../assets/icons/gear.svg'
import { ReactComponent as Hand } from '../../assets/icons/hand.svg'
import { ReactComponent as Book } from '../../assets/icons/book.svg'
import { aboutDataLang, qualityLang } from '../../utils/data'
import { useSelector } from 'react-redux'
import { sectionLang } from '../../utils/data'

const About = () => {
  const lang = useSelector((state) => state.switchLang.lang)
  console.log(lang)

  return (
    <section className="aboutSection padding" id="about">
      <div className="about margin">
        <h2 className="about_title underline">
          {!lang ? sectionLang.aboutFr : sectionLang.aboutEn}
        </h2>
        <div className="about_content">
          <div className="about_wrapper">
            <div className="about_wrapper_qualities">
              <div className="quality block">
                <div>
                  <Book className="quality_icon" />
                </div>
                <p className="quality_text">
                  {!lang ? qualityLang.curiosityFr : qualityLang.curiosityEn}
                </p>
              </div>
              <div className="quality block">
                <div>
                  <Hand className="quality_icon" />
                </div>
                <p className="quality_text">
                  {!lang ? qualityLang.teamFr : qualityLang.teamEn}
                </p>
              </div>
              <div className="quality block">
                <div>
                  <Gear className="quality_icon" />
                </div>
                <p className="quality_text">Adaptation</p>
              </div>
              <div className="quality block">
                <div>
                  <Pro className="quality_icon" />
                </div>
                <p className="quality_text">
                  {!lang
                    ? qualityLang.professionalFr
                    : qualityLang.professionalEn}
                </p>
              </div>
            </div>
            <div className="about_wrapper_text">
              {!lang ? aboutDataLang.textFr : aboutDataLang.textEn}
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default About
