const skillContainer = document.querySelector(`.skill`)

let differenceWidth = innerWidth
let differenceHeight = innerHeight

const randomNumber = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const render = async () => {
  const data = await (await fetch("/data/data.json")).json()

  skillContainer.innerHTML = ""

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
}

window.addEventListener("resize", () => {
  const diffWidth = differenceWidth - innerWidth
  const diffHeight = differenceHeight - innerHeight

  if (diffWidth > 200 || diffWidth < -200 || diffHeight > 200 || diffHeight < -200) {
    differenceWidth = innerWidth
    differenceHeight = innerHeight
    render()
    console.log("chnaged")
  }
})

render()
