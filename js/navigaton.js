function myFunction(x) {
  x.classList.toggle("change");
}

const getUserSelectedText = () => {
  return window.getSelection().toString();
}

window.onscroll = () => {
  if(window.innerHeight + window.pageY0ffset) >= document.body.offsetHeight) {
    // console.log("Där slutade sidan.") 
  }
}

const toTop = () = window.scrollTo({top: 0, behaviour: 'smooth'})
