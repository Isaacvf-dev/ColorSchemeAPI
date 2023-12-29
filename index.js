const btnGetColor = document.getElementById("btn-get-color").addEventListener('click', getColor)
window.addEventListener('load',getColor)

function getColor(event) {
  event.preventDefault();

  const hexValue = document.getElementById("color-picker")

  //Formating to valid hex code in the API
  const hexCode = hexValue.value.slice(1,)

  const themePicker = document.getElementById("theme-picker").value

  
  fetch("https://www.thecolorapi.com/scheme?hex=" + hexCode + "&mode=" + themePicker)
    .then( res => res.json())
    .then( data => {
      console.log(data)
      
      //Array with hex values
      const hexValues = data.colors.map(color => color.hex.value)

      //Update html and css
      let i = 1
      for (const hexValue of hexValues) {
        document.getElementById(`hex-${i}`).innerHTML = hexValue
        document.getElementById(`color-${i}`).style.backgroundColor = hexValue
        i++
      }
    })
  
}
