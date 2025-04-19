function showDate() {
    let date = new Date();
    let day = date.getDate();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    document.getElementById("dateDisplay").innerHTML = day + "/" + month + "/" + year;
}

function showTime() {
    let time = new Date();
    document.getElementById("timeDisplay").innerHTML = time.toString();
}
