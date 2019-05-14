segment = n => {
    var display1 = document.getElementById('display-1');

    var baseClass = 'display-container display-size-12 display-no-';

    display1.className = baseClass + n % 10;
}

volume = flag => {
    var v = document.getElementById('volume');
    v.className = "fas fa-volume-up volume-" + ((flag) ? "on" : "off");
}

$(document).ready(function () {
    var i = 0;
    setInterval(function () { segment(i++); volume((i % 2 == 0) ? true : false) }, 1000);
})