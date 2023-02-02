export const getQuote = async(currencyIn , currencyOut) =>{
  const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${currencyIn}-${currencyOut}`).then(res => res.json())
  const currencyQuoteData = Object.values(response)[0]
  const high = parseFloat(currencyQuoteData.high)
  const low = parseFloat(currencyQuoteData.low)
  return (high + low) / 2 
}

export const  calculateConversion = async(value, currencyIn ,currencyOut) =>{
  const quote = await getQuote(currencyIn , currencyOut) 
  return (value * quote)
} 

export const createParagraph = (content) =>{
  const p = document.createElement('p')
  p.innerText = content
  return p
}

export const addResult = (result) =>{
  const resultDiv = document.querySelector('#result')
  resultDiv.textContent = ''
  resultDiv.appendChild(createParagraph(result))
}

export const isValid = (value, currencyIn , currencyOut) =>{
  const arrayCurrencies = ["USD" , "BRL", "EUR", "JPY", "GBP", "CHF", "CAD", "ZAR"]
  if(
    (!value || !currencyIn || !currencyOut) || 
    (!arrayCurrencies.includes(currencyIn)) ||
    (!arrayCurrencies.includes(currencyOut)) ||
    currencyIn === currencyOut
    )
  {
    return false
  }else{
    return true
  }
}