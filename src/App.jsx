import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'

const randomHexColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);

const randomColorsArray = (len) => {
  const randomColors = Array.from({length: len}, () => randomHexColor())
  return randomColors
}

const randomColorsArrayWithOneGuess = (arr, guess) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  arr[randomIndex] = guess
  return arr
}


function App(props) {
  const [hexColor, setHexColor] = useState(randomHexColor())

  // Generate random color codes for guess buttons
  let randomColors = randomColorsArray(props.numberOfGuesses)

  let guess = hexColor
  // Insert guess match color into array of color codes for buttons
  let randomColorCodes = randomColorsArrayWithOneGuess(randomColors, guess)

  const [buttonsColorCodes, setButtonColorCodes] = useState(randomColorCodes)

  const [status, setStatus] = useState("")

  const shuffleColors = () => {
    console.log("Shuffle colors ...")
    setHexColor(randomHexColor())
  }

  useEffect(() => {
    // Generate random color codes for guess buttons
    let randomColors = randomColorsArray(props.numberOfGuesses)
    let guess = hexColor
    // Insert guess match color into array of color codes for buttons
    let randomColorCodes = randomColorsArrayWithOneGuess(randomColors, guess)
    setButtonColorCodes(randomColorCodes)
  }, [hexColor])

  console.log("Guess color: ", hexColor)
  // console.log("Buttons: ", buttonsColorCodes)

  const checkColorGuess = (colorGuess) => {
    console.log("color guess: ", colorGuess)
    if (colorGuess === hexColor) {
      console.log("You Won! :)")
      setStatus("Correct!")
    } else {
      setStatus("Incorrect!")
    }

    setTimeout(() => {
      // console.log("Shuffling colors ...")
      setStatus("")
      shuffleColors()
    }, 3000)
  }

  return (
    <div className="App">

      <div className='status'>
        <h1>{status}</h1>
      </div>

      <div className='colorBox' style={{backgroundColor: hexColor}}>
      </div>

      <div className="card">
        {buttonsColorCodes.map(
          el => <Button colorcode = {el} key = {el} handleClick = {checkColorGuess} />)}
      </div>

      

    </div>
  )
}

export default App
