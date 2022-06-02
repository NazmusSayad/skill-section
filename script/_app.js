const skillContainer = document.querySelector(`.skill`)

const randomNumber = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

;(async () => {
  const data = await (await fetch("/data/data.json")).json()

  data.list.forEach((current) => {
    const element = document.createElement(`article`)
    element.className = "skill__item"
    element.innerHTML = current

    element.style.fontSize = `${randomNumber(700, 250) / 100}vmin`

    skillContainer.appendChild(element)

    const randomLeft = randomNumber(100)
    const randomTop = randomNumber(100)

    element.style.left = `clamp(0px, ${randomLeft}%, ${randomLeft}% - ${element.clientWidth}px)`
    element.style.top = `clamp(0px, ${randomTop}%, ${randomTop}% - ${element.clientHeight}px)`
  })
})()
