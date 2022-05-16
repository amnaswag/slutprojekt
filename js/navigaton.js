function myFunction(x) {
  x.classList.toggle("change");
}


// get user selected text
const getUserSelectedText = () => {
  return window.getSelection().toString();
}

// knowing when user reaches the end of the screen 
window.onscroll = () => {
  if(window.innerHeight + window.pageY0ffset) >= document.body.offsetHeight) {
    // console.log("Där slutade sidan.") 
  }
}

// taking user back to top
const toTop = () => window.scrollTo({top: 0, behaviour: 'smooth'}):
