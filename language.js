function handler(e){
  if(e.target.nodeName === 'A'){
    let lang = e.target.dataset.lang,
        view = document.querySelector('#result');
    
 
    switch(lang){
      case 'ua':
            window.location.href = "Interwork-ua.html";
      break;
      
      case 'en':
            window.location.href = "Interwork-en.html";
      break;
     
      case 'de':
            window.location.href = "Interwork-de.html";
      break;
      
      case 'ru':
            window.location.href = "Interwork-ru.html";
      break;
    }
    
    e.preventDefault();
  }
}

document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('.Language').addEventListener('click', handler);
});
