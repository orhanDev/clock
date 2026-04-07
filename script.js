const WEEK = ["Sonntag", "Montag", "Dienstag", 
    "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const MONTHS = [
  "Januar", "Februar", "März", "April", 
  "Mai", "Juni", "Juli", "August", 
  "September", "Oktober", "November", "Dezember" ];

function updateTime() {
  var now = new Date();
  document.getElementById("time").innerText =
    zeroPadding(now.getHours(), 2) + ":" +
    zeroPadding(now.getMinutes(), 2) + ":" +
    zeroPadding(now.getSeconds(), 2);
  document.getElementById("date").innerText =
    WEEK[now.getDay()] + ", " +
    now.getDate() + ". " +
    MONTHS[now.getMonth()] + " " +
    now.getFullYear();
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
  return String(num).padStart(digit, '0');
} 