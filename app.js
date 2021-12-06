let today = new Date();
let day = today.getDate();
let month = today.getMonth();
let month_list = ['Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря','Января'];

dateString = 'Сегодня ' + day + ' ' + month_list[month-1];

dateDiv = document.querySelector(".date");
dateDiv.innerText = dateString;
