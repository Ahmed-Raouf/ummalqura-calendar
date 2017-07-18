/*   http://keith-wood.name/calendars.html * /

/* date: The date of Hijri calander */
/* calGerId: The Id of the Geregenion Calander Element */

function convertDtFromHijriToGer(date, calGerId) {
    try {
        var calHijri = $.calendars.instance('ummalqura');
        var calG = $.calendars.instance();

        var day = date[0]['_day'];
        var month = date[0]['_month'];
        var year = date[0]['_year'];

        var dtHj = calHijri.newDate(parseInt(year), parseInt(month), parseInt(day));
        var days = dtHj.toJD();
        var dtGer = calG.fromJD(days);
        var dayHj = pad(dtHj._day, 2);
        var monthHj = pad(dtHj._month, 2);

        $('#' + calGerId).val(dtGer);
        $('#' + calGerId).calendarsPicker('setDate', dtGer);
    }
    catch (err) {
        alert('من فضلك حدد التاريخ بطريقة سليمة');
        $('#' + calGerId).val('');
    }
};

/* date: The date of Geregenion calander */
/* calGerId: The Id of the Hijri Calander Element */
function convertDtFromGerToHijri(date, calHjId) {
    try {
        var calHijri = $.calendars.instance('ummalqura');
        var calG = $.calendars.instance();

        var day = date[0]['_day'];
        var month = date[0]['_month'];
        var year = date[0]['_year'];

        var dtGer = calG.newDate(parseInt(year), parseInt(month), parseInt(day));
        var days = dtGer.toJD();
        var dtHj = calHijri.fromJD(days);

        $('#' + calHjId).val(dtHj);
        $('#' + calHjId).calendarsPicker('setDate', dtHj);
    }
    catch (err) {
        alert('من فضلك حدد التاريخ بطريقة سليمة');
        $('#' + calHjId).val('');
    }
};


function checkChar(e) {
    var key;
    var keychar;

    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;
    keychar = String.fromCharCode(key);
    // control keys


    if ((key >= 1569 && key < 1708) || key == 32 || key > 57) {
        //alert("Ø§Ù„Ø£Ø­Ø±Ù Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© ØºÙŠØ± Ù…Ø³Ù…ÙˆØ­ Ø¨Ù‡Ø§");
        return false;
    }
    return true;
};


function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}
function validateDigits(elem) {
    elem.value = elem.value.replace(/[^0-9]+/g, "");
};

function validateNumbers(elem) {
    elem.value = elem.value.replace(/[^0-9\.]+/g, "");
};

function validatePercentage(elem) {
    elem.value = elem.value.replace(/[^0-9\.]+/g, "");

    var num = parseFloat(elem.value).toFixed(5);
    if (num > 100.0) {
        elem.value = "100";
    }
};

function strEndsWith(str, suffix) {
    return str.match(suffix + "$") == suffix;
};

function enableSubmitDelayed() {
    $(":submit").attr('disabled', false);
};

