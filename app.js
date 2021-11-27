
function toggleHide() {
  const hiddenText = document.querySelector('.hiddenText');
  if (hiddenText.style.visibility === 'inherit') {
    hiddenText.style.visibility = 'hidden';
  }else {
    hiddenText.style.visibility = 'inherit';
  }
}


const hideAtcl = document.querySelector('.hiddenButton');

hideAtcl.addEventListener('click', toggleHide);
