export const scrollToSection = (id) => {
  const element = document.getElementById(id)
  const offSet = 60
  const getPosition = element.getBoundingClientRect().top
  const setOffSet = getPosition + window.scrollY - offSet

  window.scrollTo({ top: setOffSet, behavior: 'smooth' })
}
