//loan amount
$(function () {
    $("#slider_la").slider({
        range: "min",
        value: 20000000,
        min: 10000000,
        step: 10000000,
        max: 500000000,
        slide: function (event, ui) {
            $("#amount_1a").val("" + ui.value);
        }
        , change: function () {
            EMI_calc()
        }
    });
    $("#amount_1a").val("" + $("#slider_la").slider("value"));
});

//interest rate
$(function () {
    $("#slider_intr").slider({
        range: "min",
        value: 14.5,
        min: 10,
        step: .5,
        max: 50,
        slide: function (event, ui) {
            $("#amount_intr").val("" + ui.value);
        }
        , change: function () {
            EMI_calc()
        }
    });
    $("#amount_intr").val("" + $("#slider_intr").slider("value"));
});

//loan tenure
$(function () {
    $("#slider_lt").slider({
        range: "min",
        value: 3,
        min: 1,
        step: 1,
        max: 6,
        slide: function (event, ui) {
            $("#amount_lt").val("" + ui.value);
        }
        , change: function () {
            EMI_calc()
        }
    });
    $("#amount_lt").val("" + $("#slider_lt").slider("value"));

});


$(document).ready(function (e) {
    EMI_calc();
    $("#amount_1a").val($("#amount_1a").val()).change();
});


function EMI_calc() {
    var emiPrincipal = jQuery("#amount_1a").val();
    var emiRate = jQuery("#amount_intr").val() / 12 / 100;
    var emiTenure = jQuery("#amount_lt").val() * 12;
    var emi = emiPrincipal * emiRate * (Math.pow(1 + emiRate, emiTenure) / (Math.pow(1 + emiRate, emiTenure) - 1));
    jQuery("#emi_monthly span").text(number_format(Math.round(emi)) + " VNĐ");
    jQuery("#total_intr span").text(number_format(Math.round(emi * emiTenure - emiPrincipal)) + " VNĐ");
    jQuery("#total_amt span").text(number_format(Math.round(emi * emiTenure)) + " VNĐ");
    jQuery("#loan_amt span").text(number_format(Math.round(emiPrincipal)) + " VNĐ");
    var month_emi = Math.round(emi);
    var emi_tenure = Math.round(emiTenure);
    var intRate = emiRate * 12 * 100;
    commitData(emiPrincipal, intRate, emiTenure);
    displayBarChart(emiPrincipal, intRate, emiTenure);
    fillrates(emiPrincipal, emiTenure);

    displayPieChart(month_emi, emi_tenure, emiPrincipal);
}

function fillrates(emiPrincipal, emiTenure) {
    var MAFC_rate1 = 30 / 1200;
    var MAFC_rate2 = 45 / 1200;
    var getemicalcMAFC1 = emiPrincipal * MAFC_rate1 * (Math.pow(1 + MAFC_rate1, emiTenure) / (Math.pow(1 + MAFC_rate1, emiTenure) - 1));
    var getemicalcMAFC2 = emiPrincipal * MAFC_rate2 * (Math.pow(1 + MAFC_rate2, emiTenure) / (Math.pow(1 + MAFC_rate2, emiTenure) - 1));
    var viewemiMAFC = number_format(Math.round(getemicalcMAFC1)) + " VNĐ - " + number_format(Math.round(getemicalcMAFC2)) + " VNĐ";
    jQuery("#MAFC_bnk span").text(viewemiMAFC);
    var PRU_rate1 = 18 / 1200;
    var PRU_rate2 = 38 / 1200;
    var getemicalcPRU1 = emiPrincipal * PRU_rate1 * (Math.pow(1 + PRU_rate1, emiTenure) / (Math.pow(1 + PRU_rate1, emiTenure) - 1));
    var getemicalcPRU2 = emiPrincipal * PRU_rate2 * (Math.pow(1 + PRU_rate2, emiTenure) / (Math.pow(1 + PRU_rate2, emiTenure) - 1));
    var viewemiPRU = number_format(Math.round(getemicalcPRU1)) + " VNĐ - " + number_format(Math.round(getemicalcPRU2)) + " VNĐ";
    jQuery("#PRU_bnk span").text(viewemiPRU);
    var SAISON_rate1 = 35 / 1200;
    var SAISON_rate2 = 45 / 1200;
    var getemicalcSAISON1 = emiPrincipal * SAISON_rate1 * (Math.pow(1 + SAISON_rate1, emiTenure) / (Math.pow(1 + SAISON_rate1, emiTenure) - 1));
    var getemicalcSAISON2 = emiPrincipal * SAISON_rate2 * (Math.pow(1 + SAISON_rate2, emiTenure) / (Math.pow(1 + SAISON_rate2, emiTenure) - 1));
    var viewemiSAISON = number_format(Math.round(getemicalcSAISON1)) + " VNĐ - " + number_format(Math.round(getemicalcSAISON2)) + " VNĐ";
    jQuery("#SAISON_bnk span").text(viewemiSAISON);
    var STANDARDCHARTERED_rate1 = 18 / 1200;
    var STANDARDCHARTERED_rate2 = 24 / 1200;
    var getemicalcSTANDARDCHARTERED1 = emiPrincipal * STANDARDCHARTERED_rate1 * (Math.pow(1 + STANDARDCHARTERED_rate1, emiTenure) / (Math.pow(1 + STANDARDCHARTERED_rate1, emiTenure) - 1));
    var getemicalcSTANDARDCHARTERED2 = emiPrincipal * STANDARDCHARTERED_rate2 * (Math.pow(1 + STANDARDCHARTERED_rate2, emiTenure) / (Math.pow(1 + STANDARDCHARTERED_rate2, emiTenure) - 1));
    var viewemiSTANDARDCHARTERED = number_format(Math.round(getemicalcSTANDARDCHARTERED1)) + " VNĐ - " + number_format(Math.round(getemicalcSTANDARDCHARTERED2)) + " VNĐ";
    jQuery("#STANDARDCHARTERED_bnk span").text(viewemiSTANDARDCHARTERED);
    var VPBCF_rate1 = 30 / 1200;
    var VPBCF_rate2 = 60 / 1200;
    var getemicalcVPBCF1 = emiPrincipal * VPBCF_rate1 * (Math.pow(1 + VPBCF_rate1, emiTenure) / (Math.pow(1 + VPBCF_rate1, emiTenure) - 1));
    var getemicalcVPBCF2 = emiPrincipal * VPBCF_rate2 * (Math.pow(1 + VPBCF_rate2, emiTenure) / (Math.pow(1 + VPBCF_rate2, emiTenure) - 1));
    var viewemiVPBCF = number_format(Math.round(getemicalcVPBCF1)) + " VNĐ - " + number_format(Math.round(getemicalcVPBCF2)) + " VNĐ";
    jQuery("#VPBCF_bnk span").text(viewemiVPBCF);
    /*var hdfc_rate1=13.99/1200;
     var hdfc_rate2=22.25/1200;
     var getemicalcHDFC1=emiPrincipal*hdfc_rate1*(Math.pow(1+hdfc_rate1,emiTenure)/(Math.pow(1+hdfc_rate1,emiTenure)-1));
     var getemicalcHDFC2=emiPrincipal*hdfc_rate2*(Math.pow(1+hdfc_rate2,emiTenure)/(Math.pow(1+hdfc_rate2,emiTenure)-1));
     var viewemi=number_format(Math.round(getemicalcHDFC1)) + " VNĐ - " + number_format(Math.round(getemicalcHDFC2)) + " VNĐ";
     jQuery("#hdfc_bnk span").text(viewemi);
     //ICICI
     var icici1=14/1200;
     var icici2=18.5/1200;
     var getemicalcicici1=emiPrincipal*icici1*(Math.pow(1+icici1,emiTenure)/(Math.pow(1+icici1,emiTenure)-1));
     var getemicalcicici2=emiPrincipal*icici2*(Math.pow(1+icici2,emiTenure)/(Math.pow(1+icici2,emiTenure)-1));
     var viewemiicici=number_format(Math.round(getemicalcicici1)) + " VNĐ - " + number_format(Math.round(getemicalcicici2)) + " VNĐ";
     jQuery("#icici_bnk span").text(viewemiicici);
     //For Bajaj
     var bajaj1=15.75/1200;
     var bajaj2=17/1200;
     var getemicalcbajaj1=emiPrincipal*bajaj1*(Math.pow(1+bajaj1,emiTenure)/(Math.pow(1+bajaj1,emiTenure)-1));
     var getemicalcbajaj2=emiPrincipal*bajaj2*(Math.pow(1+bajaj2,emiTenure)/(Math.pow(1+bajaj2,emiTenure)-1));
     var viewemibajaj=number_format(Math.round(getemicalcbajaj1)) + " VNĐ - " + number_format(Math.round(getemicalcbajaj2)) + " VNĐ";
     jQuery("#bajaj_bnk span").text(viewemibajaj);
     //for ING Vysya
     var ing1=14.50/1200;
     var ing2=18.25/1200;
     var getemicalcing1=emiPrincipal*ing1*(Math.pow(1+ing1,emiTenure)/(Math.pow(1+ing1,emiTenure)-1));
     var getemicalcing2=emiPrincipal*ing2*(Math.pow(1+ing2,emiTenure)/(Math.pow(1+ing2,emiTenure)-1));
     var viewemiing=number_format(Math.round(getemicalcing1)) + " VNĐ - " + number_format(Math.round(getemicalcing2)) + " VNĐ";
     jQuery("#ing_bnk span").text(viewemiing);*/
}

function displayPieChart(month_emi, emi_tenure, emiPrincipal) {
    piechart = new Highcharts.Chart({
        chart: {
            renderTo: "container",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            width: 200,
            height: 200,
            plotShadow: true
        },
        title: false,
        tooltip: {
            formatter: function () {
                return "<b>" + this.point.name + "</b>: " + this.y + " %"
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true, cursor: "pointer",
                dataLabels: {enabled: false, color: '#000000'},
                showInLegend: true
            }
        },
        series: [{
            type: "pie",
            name: " ",
            data: [["Số Tiền Cho Vay",
                Math.round(emiPrincipal * 100 / (month_emi * emi_tenure))],
                {
                    name: "Tổng Số Lãi",
                    y: Math.round(100 - emiPrincipal * 100 / (month_emi * emi_tenure)),
                    sliced: true, selected: true
                }]
        }]
    })
}

function displayBarChart(loanAmount, intRate, numPay) {
    var monPmt = calcMonthly(loanAmount, numPay, intRate);
    var finalVal = amortizePmtsCharts(loanAmount, intRate, numPay, monPmt);
    var principalAxis = [];
    principalAxis = finalVal[0];
    var intrAxis = finalVal[1];
    var catxAxis = finalVal[2];
    var sWidth = screen.width;
    var totWidth;
    var totHeight;
    if (sWidth > 680) {
        totWidth = 550;
        totHeight = 300;
    } else {
        totWidth = 300;
        totHeight = 200;
    }//550
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'barChart',
            type: 'bar',
            height: 300
        },
        title: {
            text: false
        },
        xAxis: {
            categories: catxAxis, labels: {rotation: -25}
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Gốc + Lãi ( Đơn vị: Triệu Đồng )'
            }
        },
        legend: {
            backgroundColor: '#FFFFFF',
            reversed: true
        },
        tooltip: {
            formatter: function () {
                return '' +
                    this.series.name + ': ' + number_format(this.y) + '';
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Gốc',
            data: principalAxis
        }, {
            name: 'Lãi',
            data: intrAxis
        }]
    });
}

function FloatTopDiv() {
    startLX = ((document.body.clientWidth - MainContentW) / 2) - LeftBannerW - LeftAdjust , startLY = TopAdjust + 80;
    startRX = ((document.body.clientWidth - MainContentW) / 2) + MainContentW + RightAdjust , startRY = TopAdjust + 80;
    var d = document;

    function ml(id) {
        var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
        el.sP = function (x, y) {
            this.style.left = x + 'px';
            this.style.top = y + 'px';
        };
        el.x = startRX;
        el.y = startRY;
        return el;
    }

    function m2(id) {
        var e2 = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
        e2.sP = function (x, y) {
            this.style.left = x + 'px';
            this.style.top = y + 'px';
        };
        e2.x = startLX;
        e2.y = startLY;
        return e2;
    }

    window.stayTopLeft = function () {
        if (document.documentElement && document.documentElement.scrollTop) {
            var pY = document.documentElement;
        } else if (document.body) {
            var pY = document.body;
        }
        if (document.body.scrollTop > 30) {
            startLY = 3;
            startRY = 3;
        } else {
            startLY = TopAdjust;
            startRY = TopAdjust;
        }

        ftlObj.y += (pY + startRY - ftlObj.y) / 16;
        ftlObj.sP(ftlObj.x, ftlObj.y);
        ftlObj2.y += (pY + startLY - ftlObj2.y) / 16;
        ftlObj2.sP(ftlObj2.x, ftlObj2.y);
        setTimeout("stayTopLeft()", 1);
    };
    ftlObj = ml("divAdRight");
    //stayTopLeft();
    ftlObj2 = m2("divAdLeft");
    stayTopLeft();
}
function ShowAdDiv() {
    var objAdDivRight = document.getElementById("divAdRight");
    var objAdDivLeft = document.getElementById("divAdLeft");
    if (document.body.clientWidth < 1000) {
        objAdDivRight.style.display = "none";
        objAdDivLeft.style.display = "none";
    }
    else {
        objAdDivRight.style.display = "block";
        objAdDivLeft.style.display = "block";
        FloatTopDiv();
    }
}

function commitData(loanAmount, intRate, numPay) {
    // Declair and initialize the variables
    var eleId;
    var eleDat;
    var loopNum;
    var tagNum;
    var tagNam;
    var displayData;

    // Render the display tables to echo the user input
    displayData = "<table  align='center' cellpadding='0' cellspacing='0'>";
    displayData += "<tr>";
    // Render the amortization table, this table displays the number of
    // rows specified by the number of payments input by the user in the numPay field.
    displayData += "<td><table style='clear: both;background: none repeat scroll 0 0 #FCFCFC; margin: 0 0 20px 0;text-align: center;' id='pmtTab'><tr ><td height='20' style='border: 1px solid #DBDAD7;background: #4572A7; border-top: 0; width:90px; font-size: 12px; color:#FFFFFF;' id='numHead'>Năm</td><td style='border: 1px solid #DBDAD7;background: #4572A7;	border-top: 0; width:110px; font-size: 12px; color:#FFFFFF;' id='pt'>Gốc</td><td id='newBal' style='border: 1px solid #DBDAD7;background: #4572A7;	border-top: 0; width:110px; font-size: 12px; color:#FFFFFF;'>Lãi</td><td id='oil' style='border: 1px solid #DBDAD7;background: #4572A7;	border-top: 0; width:210px; font-size: 12px; color:#FFFFFF;'>Gốc còn lại</td></tr>";
    for (var i = 1; i <= numPay; i++) {
        loopNum = i;
        var counter = i % 12;
        if (counter == 0) {
            var count = i / 12;
            displayData += "<tr ><td height='18' style='border: 1px solid #DBDAD7;background: #ffffff;border-top: 0;font-size: 12px;' id=tagNam>" + count + "</td>";

            tagNam = "p" + loopNum.toString(10);
            displayData += "<td height='18' style='border: 1px solid #DBDAD7;background: #ffffff;border-top: 0;font-size: 12px;' id=" + tagNam + "></td>";

            tagNam = "oi" + loopNum.toString(10);
            displayData += "<td height='18' style='border: 1px solid #DBDAD7;background: #ffffff;border-top: 0;font-size: 12px;' id=" + tagNam + "></td>";

            tagNam = "nb" + loopNum.toString(10);
            displayData += "<td height='18' style='border: 1px solid #DBDAD7;background: #ffffff;border-top: 0;font-size: 12px;' id=" + tagNam + "></td>";
        }
    }
    // This statement outside the loop completes the table
    displayData += "</table></td></tr></table>";
    // Echo the input in the display table using the displayTableField() function
    //Calculate and display the monthly payment amount
    document.getElementById('tblpaymentsDetails').innerHTML = displayData;

    var monPmt = calcMonthly(loanAmount, numPay, intRate);
    amortizePmts(loanAmount, intRate, numPay, monPmt);

    return;
}

function amortizePmts(loanAmount, intRate, numPay, monPmt) {
    var oldBalance = loanAmount;
    var newBalance = loanAmount;
    intRate = (intRate / 100) / 12;
    var monthly = monPmt;
    var owedInterest = 0;
    var totalInterestPd = 0;
    var tagNam;
    var dispInt;
    var yearlyVal = [];
    var intRateVal = [];
    // The for loop performs the amortization
    for (var i = 1; i <= numPay; i++) {
        var counter = i % 12;
        var loopNum = i;
        owedInterest = newBalance * intRate;
        dispInt = twoDecimal(owedInterest);
        totalInterestPd = totalInterestPd + owedInterest;
        // Test for the final payment
        if (i < numPay) {
            monthly = twoDecimal(monPmt - dispInt);
            oldBalance = newBalance;
            newBalance = twoDecimal(oldBalance - monthly);
        }
        else {
            monthly = (oldBalance - monthly) + owedInterest;
            oldBalance = newBalance;
            newBalance = 0;
            monthly = twoDecimal(monthly);
        }

        yearlyVal.push(monthly);
        intRateVal.push(dispInt);

        if (counter == 0) {
            var finalMonthlySum = number_format(getSum(yearlyVal));
            var finalintRateSum = number_format(getSum(intRateVal));
            tagNam = "p" + loopNum.toString(10);
            displayTableField(tagNam, finalMonthlySum);
            tagNam = "oi" + loopNum.toString(10);
            displayTableField(tagNam, finalintRateSum);
            tagNam = "nb" + loopNum.toString(10);
            displayTableField(tagNam, number_format(newBalance));
            yearlyVal = [];
            intRateVal = [];
        }
    }
    return;
}

function displayTableField(eleId, eleDat) {
    document.getElementById(eleId).innerHTML = eleDat;
    return;
}

function calcMonthly(principal, numPay, intRate) {
    var monthly;
    var intRate = (intRate / 100) / 12;
    var principal;
    // The accounting formula to calculate the monthly payment is
    //    M = P * ((I + 1)^N) * I / (((I + 1)^N)-1)
    // The following code  transforms this accounting formula into JavaScript to calculate the monthly payment
    monthly = (principal * (Math.pow((1 + intRate), numPay)) * intRate / (Math.pow((1 + intRate), numPay) - 1));
    return twoDecimal(monthly);
}

function twoDecimal(chgVar) {
    var chgVar;
    var twoDec = chgVar.toFixed(0);
    return twoDec;
}

function getSum(ups) {
    var i;
    var sum = 0;
    for (i = 0; i < ups.length; i++) {
        if (ups[i]) {
            sum = parseInt(sum) + parseInt(ups[i]);
        }
    }

    return twoDecimal(sum);
}


function amortizePmtsCharts(loanAmount, intRate, numPay, monPmt) {
    var oldBalance = loanAmount;
    var newBalance = loanAmount;
    intRate = (intRate / 100) / 12;
    var monthly = monPmt;
    var owedInterest = 0;
    var totalInterestPd = 0;
    var tagNam;
    var dispInt;
    var yearlyVal = [];
    var intRateVal = [];
    var principalPut = [];
    var emiPut = [];
    var balancePut = [];
    var returnVal = [];
    var counterVal = [];

    // The for loop performs the amortization
    for (var i = 1; i <= numPay; i++) {
        var counter = i % 12;
        var loopNum = i;
        owedInterest = newBalance * intRate;
        dispInt = twoDecimal(owedInterest);
        totalInterestPd = totalInterestPd + owedInterest;
        // Test for the final payment
        if (i < numPay) {
            monthly = twoDecimal(monPmt - dispInt);
            oldBalance = newBalance;
            newBalance = twoDecimal(oldBalance - monthly);
        }
        else {
            monthly = (oldBalance - monthly) + owedInterest;
            oldBalance = newBalance;
            newBalance = 0;
            monthly = twoDecimal(monthly);
        }

        yearlyVal.push(monthly);
        intRateVal.push(dispInt);
        if (counter == 0) {
            var count = i / 12;
            var countVal = "Năm " + count;
            var finalMonthlySum = parseInt(getSum(yearlyVal));
            var finalintRateSum = parseInt(getSum(intRateVal));
            yearlyVal = [];
            intRateVal = [];
            principalPut.push(finalMonthlySum);
            emiPut.push(finalintRateSum);
            balancePut.push(newBalance);
            counterVal.push(countVal);
        }
    }

    returnVal.push(principalPut);
    returnVal.push(emiPut);
    returnVal.push(counterVal);

    return returnVal;
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return "" + s.join(dec);
}