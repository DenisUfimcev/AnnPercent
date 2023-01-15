"use strict"

alert('Привет Асюнь, я твой личный помощник меня зовут "КВД", буду рад помочь тебе с любыми вычислениями, но пока я только могу посчитать твою зарплату, надеюсь в будущем я смогу больше;)')

function accept() {
  if(confirm('Ух какую большую цифру я тут насчитал, это точно твоё?')) {
    alert("Твоя зарплата: " + main.sum());
  } else {
    alert('Я тоже думаю что ты не заслужила столько :p')
    doublAccept()
  }
};
function doublAccept() {
  if(confirm('Или все таки заслужила?;)')) {
    alert('Тогда вот так: ' + main.sum());
  } 
}
function acceptTwo() {
  if(confirm('Хочешь посчитать полную зарплату?')) {
    main.questionTwo();
  } else {
    alert('Ну и как хотиш');
  }
}

let main = {
  numberSell: this.numberSell,
  percentSell: this.percentSell,
  percentYour: this.percentYour,
  howmuchDays: this.howmuchDays,
  salaryStack: this.salaryStack,
  salary: this.salary,
  question() {
    this.numberSell = +prompt('На какую сумму в среднем за день продано?');
    this.percentSell = +prompt('Сколько % забранных?');
    this.percentYour = +prompt('Сколько % ты зарабатываешь с них?');
    this.howmuchDays = +prompt('Сколько рабочих дней у тебя было за это время?');
  },
  questionTwo() {
    alert('Твоя ставка 35грн за час / рабочий день 8 часов = 280грн за день');
    alert('Как ты сказала ты отработала ' + this.howmuchDays + " дня");
    this.salaryStack = this.howmuchDays * 280;
    this.salary = this.salaryStack + this.sum();
    alert('Твой заработок ставки в месяц составляет: ' + this.salaryStack );
    alert('Если к ней добавить процент который мы вычисляли ранее ' + this.sum() + ' то выходит полная зарплата: ' + '\n' + 
    this.salary + 'грн' + ' В месяц (' + this.howmuchDays + ' рабочих дней)');
    alert('Спасибо что воспользовались мной, приходи ещё' + '\n' + 'Твой "КВД"')
  },
  sum() {
   return (((this.numberSell * this.howmuchDays / 100) * this.percentSell) / 100) * this.percentYour;
  }
};

main.question();
main.sum();
accept();
acceptTwo();
