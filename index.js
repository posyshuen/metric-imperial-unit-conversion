/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const form = document.getElementById("form")
const input = document.getElementById("input")
let metersToFeet = document.getElementById("meters-to-feet")
let feetToMeters = document.getElementById("feet-to-meters")
let litersToGallons = document.getElementById("liters-to-gallons")
let gallonsToLiters = document.getElementById("gallons-to-liters")
let kilogramsToPounds = document.getElementById("kilos-to-pounds")
let poundsToKilograms = document.getElementById("pounds-to-kilos")

form.addEventListener("submit", convert)

function convert(event) {
    event.preventDefault()
    const inputValue = Number(input.value)
    if (inputValue < 0) {
        document.getElementById("error").innerText = "Please enter a positive number"
        
    } else if (inputValue === 0) {
        document.getElementById("error").innerText = "Please enter a number greater than 0"
        
    } else {
    metersToFeet.innerText = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet`
    feetToMeters.innerText = `${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`
    litersToGallons.innerText = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons`
    gallonsToLiters.innerText = `${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`
    kilogramsToPounds.innerText = `${inputValue} kilograms = ${(inputValue * 2.204).toFixed(3)} pounds`
    poundsToKilograms.innerText = `${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilograms`
}}

