//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('submit', (e) => convert(e))

function convert(e) {
  const cTemp = document.querySelector('#celsius').value || 0
  const fTemp = cTemp * 9 / 5 + 32
  e.preventDefault();

  document.querySelector('#converted').innerText = `${cTemp} in Celsius is ${fTemp} in Fahrenheit`
}