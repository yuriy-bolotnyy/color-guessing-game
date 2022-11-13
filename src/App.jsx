import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'

const randomHexColor = "#" + Math.floor(Math.random()*16777215).toString(16);

function App() {
  const [hexColor, setHexColor] = useState()

  // console.log(hexColor )

  const randomHexColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);

  useEffect(() => {
    setHexColor(randomHexColor())
  }, []);

  // setHexColor(randomHexColor())

  const changeColor = () => {
    console.log("Change color")
    setHexColor(randomHexColor)
  }

  const checkColorGuess = (colorGuess) => {
    console.log("color guess: ", colorGuess)
  }

  return (
    <div className="App">
      <div className='colorBox' style={{backgroundColor: hexColor}}>
      </div>

      <div className="card">
        <Button colorcode = "#C90F57" handleClick = {checkColorGuess}/>

        <Button colorcode = "#C90F57"/>

        <Button colorcode = "#C90F57"/>

      </div>

    </div>
  )
}

export default App
