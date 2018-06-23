function handler(e){
  if(e.target.nodeName === 'A'){
    let lang = e.target.dataset.lang,
        view = document.querySelector('#result');
    
    // Внутри ставим куки и переход
    switch(lang){
      case 'ua':
        //view.textContent = 'Выбран русский язык';
            window.location.href = "Interwork-ua.html";
      break;
      case 'en':
        //view.textContent = 'English is the selected language';
            window.location.href = "Interwork-en.html";
      break;
      case 'de':
        //view.textContent = 'Ausgewählte Deutsch';
            window.location.href = "Interwork-de.html";
      break;
            case 'ru':
        //view.textContent = 'Ausgewählte Deutsch';
            window.location.href = "Interwork-ru.html";
      break;
    }
    
    e.preventDefault();
  }
}

document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('.Language').addEventListener('click', handler);
});