/*Prayer Times in Xinjiang,china
       version 0.1
       date:2014-2-8
       Email:UyghurDev@gmail.com
       Web Site:Lab.UyghurDev.net
       */

$(document).ready(function () {
    var cityIndex = 0;
    if (getCookie("city") == "") {
        setCookie("city", "0", 365);
    }
    else {
        cityIndex = getCookie("city");
    }

    //show date in widget
    showDate();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    showCityName(cityIndex);
    showPreayerTimes(cityIndex, mm, dd);

    //select city event
    $(".menuItem").click(function () {
        var CityIndex = $(this).index();
        showCityName(CityIndex);
        showPreayerTimes(CityIndex, mm, dd);
        setCookie("city", CityIndex, 365);

    });
});


//Show prayer Time by city and date.
function showPreayerTimes(city, m, d) {
    var ptDay = getPrayerTime(city, m, d);
    $("#fajir").text(ptDay.Fajir);
    $("#sunRise").text(ptDay.SunRise);
    $("#zuhr").text(ptDay.Zuhr);
    $("#asr").text(ptDay.Asr);
    $("#maghrib").text(ptDay.Maghrib);
    $("#isha").text(ptDay.Isha);



}

//show date
function showDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var week = today.getDay();

    var month_name = new Array(12);
    month_name[0] = "يانۋار"
    month_name[1] = "فېۋرال"
    month_name[2] = "مارت"
    month_name[3] = "ئاپرىل"
    month_name[4] = "ماي"
    month_name[5] = "ئىيۇن"
    month_name[6] = "ئىيۇل"
    month_name[7] = "ئاۋغۇست"
    month_name[8] = "سىنتەبىر"
    month_name[9] = "ئۆكتەبىر"
    month_name[10] = "نويابىر"
    month_name[11] = "دېكابىر"

    var week_Day = new Array(7);
    week_Day[0] = "يەكشەنبە"
    week_Day[1] = "دۈشەنبە"
    week_Day[2] = "سەيشەنبە"
    week_Day[3] = "چارشەنبە"
    week_Day[4] = "پەيشەنبە"
    week_Day[5] = "جۈمە"
    week_Day[6] = "شەنبە"

    $("#WeekDay").text(week_Day[week]);
    $("#Day").text(dd);
    $("#Month").text(month_name[mm] + "(" + (mm + 1) + "-ئاي)");
}




//show city name by index
function showCityName(nCityIndex) {
    var cityNames = new Array(17);
    cityNames[0] = "ئۈرۈمچى";
    cityNames[1] = "خوتەن";
    cityNames[2] = "تۇرپان";
    cityNames[3] = "غۇلجا";
    cityNames[4] = "قاراماي";
    cityNames[5] = "كورلا";
    cityNames[6] = "ئاقسۇ";
    cityNames[7] = "قەشقەر";
    cityNames[8] = "قۇمۇل";
    cityNames[9] = "چۆچەك";
    cityNames[10] = "يەركەن";
    cityNames[11] = "كۇچا";
    cityNames[12] = "شىخۇ";
    cityNames[13] = "بۈگۈر";
    cityNames[14] = "مارالبېشى";
    cityNames[15] = "كېرىيە";
    cityNames[16] = "بورتالا";
    cityNames[17] = "ئۈچتۇرپان";
    $("#City").text(cityNames[nCityIndex]);
}

//save value to cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//read value from cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
