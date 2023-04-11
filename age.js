function cal(){
var Tdate = new Date();
var Tyear = Tdate.getFullYear();
var Tmonth = Tdate.getMonth();
var Tday = Tdate.getDay();
//alert(Tdate);
var Byear = document.getElementById("year").value;
var Bmonth = document.getElementById("month").value;
var Bday = document.getElementById("day").value;
var Bdat = Byear + " " + Bmonth + " " + Bday;
var Bdate = new Date(Bdat);
var dif = Tdate.getTime() - Bdate.getTime();
var year = Math.floor(dif / (1000 * 60 * 60 * 24 * 365));
var month = Math.floor(dif % (1000 * 60 * 60 * 24 * 365) / (1000*60*60*24*30));
var day = Math.floor( dif % (1000*60*60*24*30.4) / (1000 * 60 * 60 * 24 ))
document.getElementById("ye").innerText=year;
document.getElementById("mo").innerText=month;
document.getElementById("da").innerText=day;
if ( Byear.length < 1 || Byear.length > 4  || Bmonth.length < 1 || Bmonth.length > 2 || Bmonth > 12 || Bday.length < 1 || Bday.length > 2 || Bday > 31){alert("error! check the input date")
document.getElementById("ye").innerText="--";
document.getElementById("mo").innerText="--";
document.getElementById("da").innerText="--";
}
//alert(day)
//alert(Bdate);
}
