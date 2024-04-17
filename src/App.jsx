import { useState } from 'react'
import './App.css'

const GreetUser = () => {
  const [userName, setUserName] = useState()
  const inputHandler = (event) =>  {
      setUserName(event.target.value)
                                  }
  
  return (
    <div>
      <label for="username">Enter your Name: </label>
      <input id="username" onChange={inputHandler}/>
      {
        userName && <p>Hello, {userName}!</p>
      }
    
    </div>
  )
}

const ValidateEmail = () => {
  const [email, setEmail] = useState('')
  const [isValid, setValidity] = useState('')
  
  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  } 

  
  
  const clickHandler = () => {
    const atIndex = email.indexOf("@")
    const dotIndex = email.indexOf(".")

    if (atIndex > 0 && dotIndex > atIndex){
      setValidity("Valid Email Address.")
    } else {
       setValidity("Invalid Email Address.")
    }
  }
  
  return (
    <div>
      <label for='emailInput'>Enter an email: </label>
      <input onChange={handleEmailInput} id='emailInput'/>
      <button onClick={clickHandler}>Validate Email</button>
       <p>{isValid}</p>
    </div>
  )
}

const CalculateSquare = () => {
  const [numberInput, setNumberInput] = useState()
  const [squaredValue, setSuaredValue] = useState()
  
  const handleBtnClick = () => {
    const squareValue = numberInput**2
    setSuaredValue(squareValue)
  }
  return (
    <div>
      <label for="numberInput">Enter a number: </label>
      <input id='numberInput' onChange={(event) => setNumberInput(event.target.value)}/>
      <button onClick={handleBtnClick}>Calculate Square</button>
      { squaredValue && <p>{squaredValue}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main>
      <GreetUser/>
      <br/>
      <br/>
      <ValidateEmail/>
      <br/>
      <br/>
      <CalculateSquare/>
    </main>
  )
}
