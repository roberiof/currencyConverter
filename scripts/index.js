import { calculateConversion, addResult, isValid } from "./functions.js"

const  execute = async() =>{
  const value = document.querySelector('#value').value
  const currencyIn = document.querySelector('#curIn').value
  const currencyOut = document.querySelector('#curOut').value

  if(! isValid(value, currencyIn , currencyOut)){
    return 
  }

  let result = await calculateConversion(value, currencyIn , currencyOut)
  result = result.toFixed(2)
  addResult(result)
}

document.querySelector('form').addEventListener('submit' , (ev) =>{
  ev.preventDefault()
  execute()
})

document.querySelector('#switchIcon').addEventListener('click' , () => {
  const currencyIn = document.querySelector('#curIn').value
  const currencyOut = document.querySelector('#curOut').value
  const aux = currencyIn

  document.querySelector('#curIn').value = currencyOut
  document.querySelector('#curOut').value = aux
})