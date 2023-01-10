"use strict"

alert('Привет Асюнь, я твой личный помощник меня зовут "КВД", буду рад помочь тебе с любыми вычислениями, но пока я только могу посчитать твою зарплату, надеюсь в будущем я смогу больше;)')

function machine() {
let numberSell = prompt('На какую сумму в среднем за день продано?');
let percentSell = prompt('Сколько % забранных?');
let percentYour = prompt('Сколько % ты зарабатываешь с них?');

  if (isNaN(numberSell)) {
    alert('Извини но это не число: ' + numberSell + '\n' + 'Вводи пожалуйста только числа, КВД их любит');
  } else if (isNaN(percentSell)) {
    alert('Извини но это не число: ' + percentSell + '\n' + 'Вводи пожалуйста только числа, КВД их любит');
  } else if (isNaN(percentYour)) {
    alert('Извини но это не число: ' + percentYour + '\n' + 'Вводи пожалуйста только числа, КВД их любит');
  } else {
    let resultMounts = numberSell * 22;
  let centralPercentTake = ( resultMounts / 100 ) * percentSell;
  let centralYourPercent = ( centralPercentTake / 100 ) * percentYour;

alert('Итого всего продано за месяц на сумму: ' + resultMounts + 'грн' + '\n' + 
  'Из них забрали на сумму: ' + centralPercentTake + 'грн' + '\n' + 
  'Твой заработок с учётом забраных ' + percentSell + '%' + ' будет состовлять: ' + centralYourPercent + 'грн');

function ask(question, yes, no) {
  if(confirm(question)) yes()
    else no();
}

function showNext() {
  alert('Твоя ставка 36грн за час/ рабочий день 8 часов = 288грн за день');
  let daysWork = prompt('Сколько дней в месяце ты отработала?', '22');
  let salaryStack = daysWork * 288;
  let salary = salaryStack + centralYourPercent;
  alert('Твой заработок ставки в месяц составляет: ' + salaryStack);
  alert('Если к ней добавить процент который мы вычисляли ранее то выходит полная зарплата: ' + '\n' + 
    salary + 'грн' + ' В месяц (' + daysWork + ' рабочих дня)');
  alert('Спасибо что воспользовались мной, приходи ещё' + '\n' + 'Твой "КВД"')
}

function showCancel() {
  alert('Ну и ладно ;(');
}

ask('Хотите посчитать полную сумму зарплаты?', showNext, showCancel);
  }
}
machine();

  let resultMounts = numberSell * 22;
  let centralPercentTake = ( resultMounts / 100 ) * percentSell;
  let centralYourPercent = ( centralPercentTake / 100 ) * percentYour;

alert('Итого всего продано за месяц на сумму: ' + resultMounts + 'грн' + '\n' + 
  'Из них забрали на сумму: ' + centralPercentTake + 'грн' + '\n' + 
  'Твой заработок с учётом забраных ' + percentSell + '%' + ' будет состовлять: ' + centralYourPercent + 'грн');

function ask(question, yes, no) {
  if(confirm(question)) yes()
    else no();
}

function showNext() {
  alert('Твоя ставка 36грн за час/ рабочий день 8 часов = 288грн за день');
  let daysWork = prompt('Сколько дней в месяце ты отработала?', '22');
  let salaryStack = daysWork * 288;
  let salary = salaryStack + centralYourPercent;
  alert('Твой заработок ставки в месяц составляет: ' + salaryStack);
  alert('Если к ней добавить процент который мы вычисляли ранее то выходит полная зарплата: ' + '\n' + 
    salary + 'грн' + ' В месяц (' + daysWork + ' рабочих дня)');
  alert('Спасибо что воспользовались мной, приходи ещё' + '\n' + 'Твой "КВД"')
}

function showCancel() {
  alert('Ну и ладно ;(');
}

ask('Хотите посчитать полную сумму зарплаты?', showNext, showCancel);
