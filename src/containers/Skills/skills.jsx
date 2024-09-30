import './skills.scss'
import { tech } from '../../utils/content'
import { sectionLang } from '../../utils/data'
import { useSelector } from 'react-redux'

const Skills = () => {
  const lang = useSelector((state) => state.switchLang.lang)
  return (
    <section className="course padding" id="skills">
      <div className="course_container margin">
        <h2 className="underline">
          {!lang ? sectionLang.skillsFr : sectionLang.skillsEn}
        </h2>
        <div className="wrapper">
          <div className="skills">
            {tech.map((item, index) => (
              <div className="skills_container" key={index}>
                <item.icon key={index} className="skills_container_icon" />
                <div className="skills_container_name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
