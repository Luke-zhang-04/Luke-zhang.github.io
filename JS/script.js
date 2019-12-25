window.onscroll = function() {scroll()} //when scrolling call function scroll()

let counter = 0 //kinda like a loop variable
let quoteCounter = 0
let parentQuoteCounter = 0
let imgCounter = 0

let elements = document.getElementsByClassName("text") //elements w/ class text
objects = Array.prototype.slice.call(elements) //turn HTML collection into arrya
let positions = objects.map(i => i.offsetTop) //get positions of the elements

let quoteElements = document.getElementsByClassName("quoteText")
quoteObjects = Array.prototype.slice.call(quoteElements)
let quotePositions = quoteObjects.map(i => i.offsetTop)

let parentElements = document.getElementsByClassName("quote")
parentObjects = Array.prototype.slice.call(parentElements)
let parentPositions = parentObjects.map(i => i.offsetTop)

let imgElements = document.getElementsByClassName("big_img")
imgObjects = Array.prototype.slice.call(imgElements)
let imgPositions = imgObjects.map(i => i.offsetTop)

let navbar = document.getElementById("navbar") //get position of the navbar

function scroll() {
  if (window.pageYOffset >= 400) { //if scrolled more than 400 unit s
      document.getElementById("navbar").classList.remove("preload")
      //remove preload class (preload removes all animations so the animation isn't triggered on page load)
      navbar.classList.add("appear") //make navbar background appear
      navbar.classList.remove("trans") //remove transparent class
  } else {
      navbar.classList.remove("appear") //remove appear class
      navbar.classList.add("trans") //make navbar background transparent
  }

  if (window.pageYOffset+window.screen.height*0.8 >= positions[counter]) { //if bottom of screen*0.8 is below elements[counter]
    elements[counter].classList.add("textappear") //make text appear
    elements[counter].classList.remove("texttrans") //remove transparent class
    counter ++ //increment counter to next element
    if (positions[counter] <= window.pageYOffset+window.screen.height*0.8) scroll() //if scrolled through more than one element recurse to load multiple elements at once
  }
  if (window.pageYOffset+window.screen.height*0.6 >= quotePositions[quoteCounter] + parentPositions[parentQuoteCounter]) { //if bottom of screen*0.8 is below elements[counter]
    quoteElements[quoteCounter].classList.add("textappear") //make text appear
    quoteElements[quoteCounter].classList.remove("texttrans") //remove transparent class
    quoteCounter ++ //increment counter to next element
    parentQuoteCounter ++
    if (quotePositions[quoteCounter] <= window.pageYOffset+window.screen.height*0.5) scroll() //if scrolled through more than one element recurse to load multiple elements at once
  }
  if (window.pageYOffset+window.screen.height*0.6 >= imgPositions[imgCounter] + parentPositions[parentQuoteCounter]) {
    console.log("OFFSET", window.pageYOffset)
    console.log(quotePositions[quoteCounter])

    imgElements[imgCounter].classList.add("blur")
    imgElements[imgCounter].classList.remove("noblur")
    imgCounter++
    if (window.pageYOffset+window.screen.height*0.6 >= imgPositions[imgCounter] + parentPositions[parentQuoteCounter]) scroll()
  }
}