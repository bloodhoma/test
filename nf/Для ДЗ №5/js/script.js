let li5 = document.createElement('li'),
    ul = document.getElementsByTagName('ul'),
    divAdv = document.querySelector('.adv'),
    divColumn = document.querySelectorAll('.column'),
    divPrompt = document.querySelector('#prompt'),
    divTitle = document.querySelector('#title'),
    k = 0;

li5.classList.add('menu-item');

li5.innerHTML = 'Пятый пункт';

ul[0].appendChild(li5);

divAdv.remove();

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

divTitle.textContent = "Мы продаём только подлинную технику Apple"; 

let question;

do{
    question = prompt('Как вы относитесь к технике Apple??','')
}while(question == null || question == '');

divPrompt.innerHTML = question;