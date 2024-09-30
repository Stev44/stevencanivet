import './contact.scss'
import { icon } from '../../utils/icons'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux'
import { contactLang, sectionLang } from '../../utils/data'

const Contact = () => {
  const lang = useSelector((state) => state.switchLang.lang)
  const [copyPhoneSuccess, setCopyPhoneSuccess] = useState('')
  const [copyMailSuccess, setCopyMailSuccess] = useState('')
  const linkedInIcon = icon[0].icon
  const mailIcon = icon[1].icon
  const phoneIcon = icon[2].icon
  const paperPlaneIcon = icon[3].icon

  const info = {
    phone: '06 47 01 30 99',
    mail: 'canivet.steven@gmail.com',
    linkedIn: 'Voir le profil',
  }

  const [formState, setFormState] = useState({
    lastName: '',
    firstName: '',
    subject: '',
    email: '',
    message: '',
  })

  const [confirm, setConfirm] = useState('')
  const [confirmVisible, setConfirmVisible] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_portfolio',
        'template_portfolio',
        formState,
        'QeBm7uGs-Rbgo1Hq7'
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setFormState({
          lastName: '',
          firstName: '',
          subject: '',
          email: '',
          message: '',
        })
        setConfirm('Le message a bien été envoyé')
        setConfirmVisible(true)
        setTimeout(() => {
          setConfirmVisible(false)
        }, 10000)
      })
      .catch((err) => {
        console.error('FAILED...', err)
        setConfirm(
          `En raison d'une erreur, le message ne s'est pas envoyé correctement`
        )
        setConfirmVisible(true)
        setTimeout(() => {
          setConfirmVisible(false)
        }, 10000)
      })
  }

  const copyToClipboard = async (e, type) => {
    try {
      const copyText = e.currentTarget.querySelector('.copyText').textContent

      await navigator.clipboard.writeText(copyText)

      // Met à jour le message de succès en fonction de l'élément cliqué
      if (type === 'phone') {
        setCopyPhoneSuccess(
          !lang ? contactLang.copyPhoneFr : contactLang.copyPhoneEn
        )
      } else if (type === 'email') {
        setCopyMailSuccess(
          !lang ? contactLang.copyMailFr : contactLang.copyMailEn
        )
      }

      // Réinitialiser le message après 2 secondes
      setTimeout(() => {
        setCopyPhoneSuccess('')
      }, 2000)
      setTimeout(() => {
        setCopyMailSuccess('')
      }, 2000)
    } catch (err) {
      console.log('Échec de la copie')
    }
  }
  const navigateToProfile = () => {
    window.open('https://www.linkedin.com/', '_blank')
  }

  return (
    <section className="contactSection padding" id="contact">
      <div className="contact margin">
        <h2 className="underline">
          {!lang ? sectionLang.contactFr : sectionLang.contactEn}
        </h2>
        <div className="contact_group margin">
          <div className="contact_group_infos">
            <div
              data-info={copyPhoneSuccess || info.phone}
              className="contact_group_infos_element"
              onClick={(e) => copyToClipboard(e, 'phone')}
            >
              {phoneIcon}
              <h3>Tel</h3>
              <p className="hiddenText copyText">06 47 01 30 99</p>
            </div>
            <div
              data-info={copyMailSuccess || info.mail}
              className="contact_group_infos_element"
              onClick={(e) => copyToClipboard(e, 'email')}
            >
              {mailIcon}
              <h3>Email</h3>
              <p className="hiddenText copyText">canivet.steven@gmail.com</p>
            </div>
            <div
              data-info={!lang ? contactLang.profileFr : contactLang.profileEn}
              className="contact_group_infos_element"
              onClick={navigateToProfile}
            >
              {linkedInIcon}
              <h3>LinkedIn</h3>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="wrapper">
              <div className="wrapper_container">
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="lastName">
                    LastName
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder={
                      !lang ? contactLang.lastNameFr : contactLang.lastNameEn
                    }
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="firstName">
                    Firstname
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder={
                      !lang ? contactLang.firstNameFr : contactLang.firstNameEn
                    }
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder={
                      !lang ? contactLang.subjectFr : contactLang.subjectEn
                    }
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="wrapper_message">
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button className="button" type="submit">
              <span className="sr-only">Contact button</span>
              {paperPlaneIcon}
            </button>
          </form>
          {confirmVisible && (
            <div>
              <p>{confirm}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
