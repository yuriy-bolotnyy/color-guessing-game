import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'

const randomHexColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);

const randomColorsArray = (len) => {
  const randomColors = Array.from({length: len}, () => randomHexColor())
  // console.log("random array: ", randomColors)
  return randomColors
}

const randomColorsArrayWithOneGuess = (arr, guess) => {
  const randomIndex = Math.ceil(Math.random() * arr.length)
  arr.splice(randomIndex, 0, guess)
  return arr
}

// const rc = randomColorsArray(3)
// console.log(rc)
// console.log(randomColorsArrayWithOneGuess(randomColorsArray(3-1), "hello"))


function App(props) {
  const [hexColor, setHexColor] = useState(randomHexColor())

  const guess = hexColor
  // Insert hexColor into random array of color codes
  const buttonsArray = randomColorsArrayWithOneGuess(
    randomColorsArray(props.numberOfGuesses-1), guess)

  const [buttonColorCodes, setButtonColorCodes] = useState(
    randomColorsArrayWithOneGuess(
      randomColorsArray(props.numberOfGuesses-1), 
      hexColor
    )
  )

  // useEffect(() => {
  //   setHexColor(randomHexColor())
  //   // console.log("Guess color: ", hexColor)

  //   setButtonColorCodes()
  //   console.log("Number guesses: ", props.numberOfGuesses)
  //   console.log("Buttons: ", buttonColorCodes)

  // }, []);

  console.log("Guess color: ", hexColor)
  console.log("Buttons: ", buttonColorCodes)
  
  // setHexColor(randomHexColor())

  const changeColor = () => {
    console.log("Change color")
    setHexColor(randomHexColor)
  }

  const checkColorGuess = (colorGuess) => {
    console.log("color guess: ", colorGuess)
    if (colorGuess === hexColor) {
      console.log("You Won! :)")
    } else {
      console.log("Try more ...")
    }
  }

  return (
    <div className="App">
      <div className='colorBox' style={{backgroundColor: hexColor}}>
      </div>

      <div className="card">
        <Button colorcode = {hexColor} handleClick = {checkColorGuess}/>

        <Button colorcode = "#C90F57"/>

        <Button colorcode = "#C90F57"/>

      </div>

    </div>
  )
}

export default App
