const mainh1 = document.getElementById('main-h1')
const mainh3 = document.getElementById('main-h3')
let person1 
window.addEventListener('keypress', (e) => {
    const strings = String.fromCharCode(e.charCode)
    person1.makeGuess(strings)
    person1.checkStatus()
    render()
   
})

const render = ()=>{
    mainh1.innerHTML = ''
    const printStatus = person1.printStatusMessage
    mainh3.textContent = `${printStatus}`
 person1.puzzle .split('').forEach((item)=>{
        const spanEl = document.createElement('span')
        spanEl.textContent = item
        mainh1.appendChild(spanEl)
    })
   

   
}

const startGame = async()=>{
    const puzzle =  await getPuzzle(2)
    person1 = new Hangman(puzzle,4)
    render()
}
document.querySelector('#reset').addEventListener('click',startGame)

startGame()

