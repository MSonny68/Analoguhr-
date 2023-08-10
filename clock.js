setInterval(()=>{
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');
let sec_dot = document.querySelector('.sec_dot');
let min_dot = document.querySelector('.min_dot');
let hr_dot = document.querySelector('.hr_dot');
let hr =document.getElementById('hr');
let mn =document.getElementById('mn');
let sc =document.getElementById('sc');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

// 12 stunden uhr
hh.style.strokeDashoffset = 510 - (510 * h) / 12;
// 60 minuten
mm.style.strokeDashoffset = 630 - (630 * m) / 60;
// 60 sekunden
ss.style.strokeDashoffset = 760 - (760 * s) / 60;
// 360 grad / 60 sekunden = 6
sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
// 360 grad / 60 minuten = 6
min_dot.style.transform = `rotateZ(${m * 6}deg)`;
// 360 grad / 12 stunden = 30
hr_dot.style.transform = `rotateZ(${h * 30}deg * 2)`;// * 2 wegen 24 stunden

//zeiger bewegen
hr.style.transform = `rotateZ(${h * 30}deg)`;
mn.style.transform = `rotateZ(${m * 6}deg)`;
sc.style.transform = `rotateZ(${s * 6}deg)`;

})

