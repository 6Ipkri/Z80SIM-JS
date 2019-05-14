segment = n => {
    var display1 = document.getElementById('display-1');

    var baseClass = 'display-container display-size-12 display-no-';

    display1.className = baseClass + n % 10;
}

volume = flag => {
    var v = document.getElementById('volume');
    v.className = "fas fa-volume-up icon-" + ((flag) ? "on" : "off");
}

dot = (n, flag) => {
    var d = document.getElementById('dot' + n);
    d.className = "fas fa-circle icon-" + ((flag) ? "on" : "off");
}

dot_only = (n) => {
    var j;
    for (j = 1; j < 10; j++) {
        dot(j, (n == j));
    }
}

$(document).ready(function () {
    var i = 0;
    setInterval(function () {
        segment(i++);
        volume((i % 2 == 0) ? true : false);
        dot_only(i % 9 + 1)
    }, 1000);
})