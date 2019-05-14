segment = n => {
    var display1 = document.getElementById('display-1');

    var baseClass = 'display-container display-size-12 display-no-';

    display1.className = baseClass + n % 10;
}

$(document).ready(function () {
    var i = 0;
    setInterval(function () { segment(i++); }, 1000);
})