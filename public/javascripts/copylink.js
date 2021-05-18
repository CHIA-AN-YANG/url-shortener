const copyBtn = document.querySelector('.copy-link')
copyBtn.addEventListener('click', () => {
  
  let newLink = document.querySelector('.input-newlink')
  if(newLink.value){
  /* Select the text field */
  newLink.select();
  newLink.setSelectionRange(0, 999); /* For mobile devices */
  document.execCommand("copy");
  alert("Copied the text: " + newLink.value);
  }
})