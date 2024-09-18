import scrollama from "scrollama";
var scroller = scrollama();
var last = 0;

function init() {
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.45,
            debug: false,
        }) 
        .onStepEnter(function({element, index, direction}) {
            if (direction === "down") {
                if (index === 1 && last != 1) {
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                    }
                    for (var i=1; i<=7; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                    }
                }
                if (index === 2 && last != 2) {
                    for (var i=1; i<=68; i++) {
                        var item = document.querySelector("#noballot"+String(i));
                        item.classList.add("opacity-fade");
                        item.style.opacity="0";
                    }
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=1; i<=7; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=2; i<=15; i++) {
                        var item = document.querySelector("#ballots-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
                if (index === 3 && last != 3) {
                    for (var i=2; i<=243; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=239; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
                if (index === 4 && last != 4) {
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=45; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
                if (index === 5 && last != 5) {
                    for (var i=2; i<=239; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=45; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
                if (index === 6 && last != 6) {
                    for (var i=2; i<=239; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=243; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
                if (index === 7 && last != 7) {
                    for (var i=1; i<=116; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=118; i<=120; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=127; i<=130; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=136; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=2; i<=3; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    var item = document.querySelector("#novotes5");
                    item.classList.add("fill-fade");
                    item.style.fill="#9FC2CC";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    var item = document.querySelector("#yes117");
                    item.classList.add("fill-fade");
                    item.style.fill="#694D75";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    for (var i=121; i<=126; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=131; i<=135; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=45; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=105; i++) {
                        var item = document.querySelector("#note-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
                if (index === 8 && last != 8) {
                    for (var i=2; i<=243; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=1; i<=116; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=118; i<=120; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=127; i<=130; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=136; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    for (var i=2; i<=3; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    }
                    var item = document.querySelector("#novotes5");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+100);
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    var item = document.querySelector("#yes117");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    for (var i=121; i<=126; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=131; i<=135; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
            }
            /*
            if (direction === "up") {
                if (index === 17 && last != 17) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                }
                if (index === 16 && last != 16) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#449DD1";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#449DD1";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 15 && last != 15) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#E2C2C6";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#E2C2C6";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 14 && last != 14) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#735290";
                    }
                }
                if (index === 13 && last != 13) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 12 && last != 12) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                }
                if (index == 11 && last != 11) {
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C4A69D";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#C4A69D";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#98A886";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#98A886";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#465C69";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#465C69";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#363457";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#363457";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+50);
                    }
                }
                if (index === 10 && last != 10) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 9 && last != 9) {
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 8 && last != 8) {
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 6 && last != 6) {
                    var item = document.querySelector("#undergrad15");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad16");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad18");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";

                    var item = document.querySelector("#undergrad15-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad16-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    var item = document.querySelector("#undergrad18-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                }
                if (index === 5 && last != 5) {
                    var item = document.querySelector("#undergrad17");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";

                    var item = document.querySelector("#undergrad17-2");
                    item.classList.remove("move-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                }
                if (index === 3 && last != 3) {
                    for (var i=1; i<=14; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#B9D9EB";
                    }
                }
                if (index === 2 && last != 2) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#noconnection"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#noconnection"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#alum"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#alum"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#nycuni"+String(i));
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#nycuni"+String(i)+"-2");
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-50);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#undergrad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#undergrad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=8; i++) {
                        var item = document.querySelector("#grad"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#grad"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=5; i++) {
                        var item = document.querySelector("#uts"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#uts"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#staff"+String(i));
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#staff"+String(i)+"-2");
                        item.classList.remove("move-fade");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
                if (index === 1 && last != 1) {
                    var item = document.querySelector("#nodocket1");
                    item.classList.remove("move-fade");
                    item.classList.add("opacity-fade");
                    item.style.opacity="100";

                    var item = document.querySelector("#nodocket1-2");
                    item.classList.remove("move-fade");
                    item.classList.add("opacity-fade");
                    item.style.opacity="100";
                }
                if (index === 0 && last != 0) {
                    var item = document.querySelector("#nodocket1");
                    item.classList.remove("move-fade");
                    item.classList.remove("opacity-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";

                    var item = document.querySelector("#nodocket1-2");
                    item.classList.remove("move-fade");
                    item.classList.remove("opacity-fade");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                }
            }*/

            last = index;
        }) 
}

document.addEventListener('DOMContentLoaded', init);