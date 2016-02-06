function winnerofgame() {
//Отыскать элементы ввода и вывода в документе
    var userChoice = document.getElementById("userChoice");
    var compChoice = document.getElementById("compChoice");
    var winner = document.getElementById("winner");
//Получить выбор пользователя, без защиты от дурака
    var user = userChoice.value;
    console.log(user); // проверка в консоли
    //выбор компьютера
    var comp = Math.random();
    console.log (comp); //вывести в консоль выбор компа
    // отобразить выбор компьютера, как текст
    if (comp < 0.34){
        compChoice.innerHTML = "собака";
        comp = "собака";
    }
    else if (comp <= 0.67){
        compChoice.innerHTML = "кот";
        comp = "кот";
    }
    else {
        compChoice.innerHTML = "мышь";
        comp = "мышь";
    }
    var compare = function (choice1, choice2) {
        if (choice1 === choice2){
            winner.innerHTML = "Давайте жить дружно! =)";
        }
        else if (choice1 === "собака") {
            if (choice2 === "кот"){
                winner.innerHTML = "Барсик, кыс-кыс-кыс, мы тебя не тронем!";
            }
            else {
                winner.innerHTML = "Эх, Дружок, такой пёс огромный, а маленькой мышки испугался. Слезай с меня немедленно!";
            }
        }
        else if (choice1=== "кот"){
            if (choice2=== "собака") {
                winner.innerHTML = "АААА! Васька, всю спину расцарапал!!!!!";
            }
            else {
                winner.innerHTML = "Вот мышка и попалась!";
            }
        }
        else {
            if (choice2 === "собака"){
                winner.innerHTML = "Джеррик, устроим охоту на собак?";
            }
            else {
                winner.innerHTML = "Джеррик, прячься за пазуху, а то обедом станешь!";
            }
        }
    };
    compare (user, comp);
}