function textCropping() {
  let elem = document.querySelectorAll('.box');
  let text = elem.innerHTML;
  let size = 50;
  let croppingTo = 45;

  for (let i = 0; i < elem.length; i++) {
    if(elem[i].innerHTML.length > size) {
      text = elem[i].innerHTML.substr(0, croppingTo);
      elem[i].innerHTML = text + '...';
    } else {
      text = elem[i].innerHTML;
    }
    
  }

}
textCropping();