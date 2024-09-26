import scrollama from "scrollama";
const scroller = scrollama();
var last = 0;

function init() {
    scroller
        .setup({
            step: "#scrolly .scrolly-overlay .step",
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

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                    }
                    for (var i=1; i<=7; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";

                        var item = document.querySelector("#novotes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                    }
                }
                if (index === 2 && last != 2) {
                    for (var i=1; i<=68; i++) {
                        var item = document.querySelector("#noballot"+String(i));
                        item.classList.add("opacity-fade");
                        item.style.opacity="0";

                        var item = document.querySelector("#noballot"+String(i)+"-2");
                        item.classList.add("opacity-fade");
                        item.style.opacity="0";
                    }
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=1; i<=7; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#novotes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=2; i<=15; i++) {
                        var item = document.querySelector("#ballots-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }

                    for (var i=17; i<=30; i++) {
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

                    for (var i=245; i<=486; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=241; i<=478; i++) {
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

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
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

                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=47; i<=92; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=47; i<=90; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=48; i<=92; i++) {
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

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
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

                    for (var i=241; i<=478; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=47; i<=90; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=48; i<=92; i++) {
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

                    for (var i=241; i<=478; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=245; i<=486; i++) {
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

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=118; i<=120; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=127; i<=130; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=136; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=2; i<=3; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#novotes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    var item = document.querySelector("#novotes5");
                    item.classList.add("fill-fade");
                    item.style.fill="#9FC2CC";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                    var item = document.querySelector("#novotes5-2");
                    item.classList.add("fill-fade");
                    item.style.fill="#9FC2CC";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    var item = document.querySelector("#yes117");
                    item.classList.add("fill-fade");
                    item.style.fill="#694D75";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                    var item = document.querySelector("#yes117-2");
                    item.classList.add("fill-fade");
                    item.style.fill="#694D75";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    for (var i=121; i<=126; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=131; i<=135; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
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

                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=47; i<=90; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=47; i<=92; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=107; i<=210; i++) {
                        var item = document.querySelector("#note-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
            }
            if (direction === "up") {
                if (index === 6 && last != 6) {
                    for (var i=1; i<=116; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=118; i<=120; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=127; i<=130; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=136; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=2; i<=3; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#novotes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    var item = document.querySelector("#novotes5");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                    var item = document.querySelector("#novotes5-2");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    var item = document.querySelector("#yes117");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                    var item = document.querySelector("#yes117-2");
                    item.classList.add("fill-fade");
                    item.style.fill="#d3d3d3";
                    item.classList.add("move-fade");
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    for (var i=121; i<=126; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=131; i<=135; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=45; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=105; i++) {
                        var item = document.querySelector("#note-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }

                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=47; i<=90; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=47; i<=92; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=107; i<=210; i++) {
                        var item = document.querySelector("#note-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
                if (index === 5 && last != 5) {
                    for (var i=2; i<=239; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=243; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }

                    for (var i=241; i<=478; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=245; i<=486; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
                if (index === 4 && last != 4) {
                    for (var i=2; i<=239; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#9FC2CC";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#694D75";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=45; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }

                    for (var i=245; i<=486; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=241; i<=478; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=47; i<=90; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.style.visibility = "visible";
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
                if (index === 3 && last != 3) {
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+25);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=48; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=45; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=46; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }

                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=50; i<=96; i++) {
                        var item = document.querySelector("#yess1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=47; i<=92; i++) {
                        var item = document.querySelector("#nos2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=47; i<=90; i++) {
                        var item = document.querySelector("#nos1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=48; i<=92; i++) {
                        var item = document.querySelector("#novote1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
                if (index === 2 && last != 2) {
                    for (var i=2; i<=243; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=2; i<=239; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }

                    for (var i=245; i<=486; i++) {
                        var item = document.querySelector("#statement2-"+String(i));
                        item.style.visibility = "hidden";
                    }
                    for (var i=241; i<=478; i++) {
                        var item = document.querySelector("#statement1-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
                if (index == 1 && last != 1) {
                    for (var i=1; i<=68; i++) {
                        var item = document.querySelector("#noballot"+String(i));
                        item.classList.add("opacity-fade");
                        item.style.opacity="100";

                        var item = document.querySelector("#noballot"+String(i)+"-2");
                        item.classList.add("opacity-fade");
                        item.style.opacity="100";
                    }
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=1; i<=7; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#novotes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#331832";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-25);
                    }
                    for (var i=2; i<=15; i++) {
                        var item = document.querySelector("#ballots-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }

                    for (var i=17; i<=30; i++) {
                        var item = document.querySelector("#ballots-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
                if (index == 0 && last != 0) {
                    for (var i=1; i<=142; i++) {
                        var item = document.querySelector("#yes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#yes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=18; i++) {
                        var item = document.querySelector("#no"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#no"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                    for (var i=1; i<=7; i++) {
                        var item = document.querySelector("#novotes"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";

                        var item = document.querySelector("#novotes"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                    }
                }
            }

            last = index;
        }) 
}

document.addEventListener('DOMContentLoaded', init);