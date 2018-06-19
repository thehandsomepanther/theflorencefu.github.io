
function GetClock(){
var tzOffset = -6;//set this to the number of hours offset from UTC

var d=new Date();
var dx=d.toGMTString();
dx=dx.substr(0,dx.length -3);
d.setTime(Date.parse(dx))
d.setHours(d.getHours()+tzOffset);
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('time').innerHTML=""+nhour+":"+nmin+":"+nsec+ap+"";
}

GetClock();
setInterval(GetClock,1000);

var d=new Date();

if(d.getHours()>18) {
  document.querySelector("body").className+="dark";
}

var fullMoon ="oooooooo<br>"+
"oooooooooooooo<br>"+
"oooooooooooooooo<br>"+
"oooooooooooooooooo<br>"+
"oooooooooooooooooooo<br>"+
"oooooooooooooooooooo<br>"+
"oooooooooooooooooo<br>"+
"oooooooooooooooo<br>"+
"oooooooooooooo<br>"+
"oooooooo"

var waningGibbous ="oooooo..<br>"+
"oooooooooooo..<br>"+
"oooooooooooooo..<br>"+
"oooooooooooooooo..<br>"+
"oooooooooooooooooo..<br>"+
"oooooooooooooooooo..<br>"+
"oooooooooooooooo..<br>"+
"oooooooooooooo..<br>"+
"oooooooooooo..<br>"+
"oooooo..<br>"

var thirdQuarter ="oooo....<br>"+
"ooooooo.......<br>"+
"oooooooo........<br>"+
"ooooooooo.........<br>"+
"oooooooooo..........<br>"+
"oooooooooo..........<br>"+
"ooooooooo.........<br>"+
"oooooooo........<br>"+
"ooooooo.......<br>"+
"oooo...."

var waningCrescent ="oo......<br>"+
"oo............<br>"+
"oo...............<br>"+
"oo.................<br>"+
"oo.................<br>"+
"oo.................<br>"+
"oo.................<br>"+
"oo...............<br>"+
"oo............<br>"+
"oo......"

var newMoon ="........<br>"+
"..............<br>"+
"................<br>"+
"..................<br>"+
"....................<br>"+
"....................<br>"+
"..................<br>"+
"................<br>"+
"..............<br>"+
"........"

var waxingCrescent ="......oo<br>"+
"............oo<br>"+
"..............oo<br>"+
"................oo<br>"+
"..................oo<br>"+
"..................oo<br>"+
"................oo<br>"+
"..............oo<br>"+
"............oo<br>"+
"......oo"

var firstQuarter = "....oooo<br>"+
".......ooooooo<br>"+
"........oooooooo<br>"+
".........ooooooooo<br>"+
"..........oooooooooo<br>"+
"..........oooooooooo<br>"+
".........ooooooooo<br>"+
"........oooooooo<br>"+
".......ooooooo<br>"+
"....oooo"

var waxingGibbous="..oooooo<br>"+
"..oooooooooooo<br>"+
"..oooooooooooooo<br>"+
"..oooooooooooooooo<br>"+
"..oooooooooooooooooo<br>"+
"..oooooooooooooooooo<br>"+
"..oooooooooooooooo<br>"+
"..oooooooooooooo<br>"+
"..oooooooooooo<br>"+
"..oooooo"



var moonCode =getMoonPhase(d.getFullYear(),d.getMonth(),d.getDate())

if(moonCode==0) {
  document.querySelector(".moon").innerHTML=newMoon;
}

if(moonCode==1) {
  document.querySelector(".moon").innerHTML=waxingCrescent;
}

if(moonCode==2) {
  document.querySelector(".moon").innerHTML=thirdQuarter;
}

if(moonCode==3) {
  document.querySelector(".moon").innerHTML=waxingGibbous;
}

if(moonCode==4) {
  document.querySelector(".moon").innerHTML=fullMoon;
}

if(moonCode==5) {
  document.querySelector(".moon").innerHTML=waningGibbous;
}

if(moonCode==6) {
  document.querySelector(".moon").innerHTML=firstQuarter;
}

if(moonCode==7) {
  document.querySelector(".moon").innerHTML=waningCrescent;
}

function getMoonPhase(year, month, day)
{
    var c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon

    // code from https://gist.github.com/endel/dfe6bb2fbe679781948c
    return b;
}
