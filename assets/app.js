const box = document.getElementById("box")
const container = document.getElementById("advice-num")
const adviceContainer = document.getElementById("advice")
const buttonAd = document.getElementById("button")

const advice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    renderAdvice(adviceContainer, `"${data.slip.advice}"`)
    renderAdvice(container, `A D V I C E  #  ${data.slip.id}`)
}

advice()
const renderAdvice = (el, message) =>{
    el.innerText = message
}

buttonAd.addEventListener("click",advice)