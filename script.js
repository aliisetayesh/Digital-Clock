function timeDisplay() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let dates = dateTime.getDate();
    let month = dateTime.getMonth() + 1;
    let years = dateTime.getFullYear();
    let amPm = document.getElementById('am-pm');

    hrs >= 12 ? amPm.innerHTML = "PM" : amPm.innerHTML = "AM";

    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (dates < 10) {
        dates = "0" + dates;
    }
    if (month < 10) {
        month = "0" + month;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('dates').innerHTML = dates;
    document.getElementById('months').innerHTML = month;
    document.getElementById('years').innerHTML = years;
}
setInterval(timeDisplay, 1000);