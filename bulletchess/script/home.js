const date = new Date();
const Day = date.getDate();
var month = date.getMonth();
const year = date.getFullYear();
if (month == 0) {month = "января"};
if (month == 1) {month = "февраля"};
if (month == 2) {month = "марта"};
if (month == 3) {month = "апреля"};
if (month == 4) {month = "мая"};
if (month == 5) {month = "июня"};
if (month == 6) {month = "июля"};
if (month == 7) {month = "августа"};
if (month == 8) {month = "сентября"};
if (month == 9) {month = "октября"};
if (month == 10) {month = "ноября"};
if (month == 11) {month = "декабря"};
document.getElementById("date").innerHTML=Day +" "+month+" "+year;





var one = document.getElementById("1");
const weekChield = date.getDay();
if (weekChield == 1) {document.getElementById("1").innerHTML=Day, document.getElementById("1").classList.toggle("orange")}
else { if (Day - weekChield + 1 > 0) {
    document.getElementById("1").innerHTML=Day - weekChield + 1}};
if (weekChield == 2) {document.getElementById("2").innerHTML=Day, document.getElementById("2").classList.toggle("orange")}
else { if (Day - weekChield + 2 > 0) {
document.getElementById("2").innerHTML=Day - weekChield + 2}};
if (weekChield == 3) {document.getElementById("3").innerHTML=Day, document.getElementById("3").classList.toggle("orange")}
else { if (Day - weekChield + 3 > 0) {
    document.getElementById("3").innerHTML=Day - weekChield + 3}};
if (weekChield == 4) {document.getElementById("4").innerHTML=Day, document.getElementById("4").classList.toggle("orange")}
else { if (Day - weekChield + 4 > 0) {
    document.getElementById("4").innerHTML=Day - weekChield + 4}};
if (weekChield == 5) {document.getElementById("5").innerHTML=Day, document.getElementById("5").classList.toggle("orange")}
else { if (Day - weekChield + 5 > 0) {
    document.getElementById("5").innerHTML=Day - weekChield + 5}};
if (weekChield == 6) {document.getElementById("6").innerHTML=Day, document.getElementById("6").classList.toggle("orange")}
else { if (Day - weekChield + 6 > 0) {
    document.getElementById("6").innerHTML=Day - weekChield + 6}};
if (weekChield == 7) {document.getElementById("7").innerHTML=Day, document.getElementById("7").classList.toggle("orange")}
else { if (Day - weekChield + 7 > 0) {
    document.getElementById("7").innerHTML=Day - weekChield + 7}};








