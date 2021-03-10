//настройки скролла секций
$(".main").onepage_scroll({
    sectionContainer: "section", // контейнер, к которому будет применяться скролл
    easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
    animationTime: 1000, // время анимации
    pagination: true, // скрыть или отобразить пагинатор
    updateURL: true, // обновлять URL или нет
});



//скрипт счетчика секций
setInterval(function () {
    let paramsString = document.location.hash;
    let x = paramsString.replace("#", "0");
    $(".home__slide-num").empty();
    $(".home__slide-num").append(x);
}, 1000);



 /* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time() {
    var current_datetime = new Date();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());

    return hours + ":" + minutes;
}
function date_date() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth() + 1);

    return day + "." + month;
}



/* каждую секунду получаем текущую дату и время */
/* и вставляем значение в блок с id "current_date_time_block2" */
setInterval(function () {
    document.querySelector('.home__time-date-t').innerHTML = date_time();
    document.querySelector('.home__time-date-d').innerHTML = date_date();

    
}, 1000);




//скрипт бургер меню
document.querySelector('.burger__menu').onclick = function (){
    document.querySelector('.burger').classList.toggle('burger__active');
    document.querySelector('.sidebar').classList.toggle('sidebar__active');
}

$('.pools__div-2').click(function(){
    $('.pools__cards-btn-unstake').css({
       display: 'block',
      });
});
$('.pools__div-1').click(function(){
    $('.pools__cards-btn-unstake').css({
       display: 'none',
      });
});


