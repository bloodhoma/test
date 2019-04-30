'use strict';

let money, time;

function start(){
    while(isNaN(money) || money == "" || money == null)
    {
        money = +prompt("Ваш бюджет за месяц", '');
    }
   
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: true,
    chooseExpenses: function(){
        for(let i = 0; i < 2; i++)
        {
            let a = prompt("Введите обязательную статью расходов в этом месяце",''),
                b = prompt("Во сколько обойдётся",'');
        
            if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50)
            {   
                console.log("Вышло");
                appData.expenses[a] = b;
            } else {
            
            }
        }  
    },
    detectedDatBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectedLevel: function() {
        if(appData.moneyPerDay < 100)
        {
            console.log("Минимальный уровень достатка");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)
        {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000)
        {
            console.log("Высокий уровень достатка");
        } else 
        {
            console.log("Произошла непредвиденная ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true)
        {
            let save = +prompt("Какова сумма накоплений ",''),
            percent = +prompt("Под какой процент?",'');

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

        }
    },
    optionalExpenses: function() {
        for(let i = 0; i < 3; i++)
        {
            let c = prompt("Статья необязательных расходов");
            appData.optionalExpenses[i+1] = c;
        }
    },
    chooseIncome: function() {
        let items;
        do{
            items = prompt("Что принесёт дополнительный доход? {Перечислите через запятую}",'');
        }while(items == null || items == "" || !isNaN(items));
        appData.income = items.split(",");
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
        console.log("Способы доп. заработка");
        appData.income.forEach(function(item,ind,mass){
            ind++;
            console.log(ind + ": " + item + "(массив: " + mass + "); ");
        });
    },
}; 

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}