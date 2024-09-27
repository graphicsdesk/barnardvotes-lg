import scrollama from "scrollama";
var scroller = scrollama();
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
                if (index === 10 && last != 10) {
                    for (var i=1; i<=81; i++) {
                        var item = document.querySelector("#resolved"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#53687E";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-100);

                        var item = document.querySelector("#resolved"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#53687E";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-5);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#enrolled"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+75);

                        var item = document.querySelector("#enrolled"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+5);
                    }
                    for (var i=1; i<=3; i++) {
                        var item = document.querySelector("#suspended"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+75);

                        var item = document.querySelector("#suspended"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+5);
                    }
                    for (var i=2; i<=35; i++) {
                        var item = document.querySelector("#resolvedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=40; i++) {
                        var item = document.querySelector("#pendingtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }

                    for (var i=37; i<=70; i++) {
                        var item = document.querySelector("#resolvedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=42; i<=80; i++) {
                        var item = document.querySelector("#pendingtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
                if (index === 12 && last != 12) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#enrolled"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#C49E85";
                        item.classList.add("move-fade-y");
                        item.setAttribute("cy",Number(item.cy.baseVal.value)-50);

                        var item = document.querySelector("#enrolled"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#C49E85";
                    }
                    for (var i=1; i<=3; i++) {
                        var item = document.querySelector("#suspended"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#7B3E19";
                        item.classList.add("move-fade-y");
                        item.setAttribute("cy",Number(item.cy.baseVal.value)+50);

                        var item = document.querySelector("#suspended"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#7B3E19";
                    }
                    for (var i=2; i<=18; i++) {
                        var item = document.querySelector("#enrolledtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=26; i++) {
                        var item = document.querySelector("#suspendedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=2; i<=74; i++) {
                        var item = document.querySelector("#source-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }

                    for (var i=20; i<=36; i++) {
                        var item = document.querySelector("#enrolledtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=28; i<=52; i++) {
                        var item = document.querySelector("#suspendedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                    for (var i=76; i<=148; i++) {
                        var item = document.querySelector("#source-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#000000";
                    }
                }
            }
            if (direction === "up") {
                if (index === 11 && last != 11) {
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#enrolled"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                        item.classList.add("move-fade-y");
                        item.setAttribute("cy",Number(item.cy.baseVal.value)+50);

                        var item = document.querySelector("#enrolled"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                    }
                    for (var i=1; i<=3; i++) {
                        var item = document.querySelector("#suspended"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                        item.classList.add("move-fade-y");
                        item.setAttribute("cy",Number(item.cy.baseVal.value)-50);

                        var item = document.querySelector("#suspended"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#6B4E71";
                    }
                    for (var i=2; i<=18; i++) {
                        var item = document.querySelector("#enrolledtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=26; i++) {
                        var item = document.querySelector("#suspendedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=74; i++) {
                        var item = document.querySelector("#source-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }

                    for (var i=20; i<=36; i++) {
                        var item = document.querySelector("#enrolledtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=28; i<=52; i++) {
                        var item = document.querySelector("#suspendedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=76; i<=148; i++) {
                        var item = document.querySelector("#source-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
                if (index === 9 && last != 9) {
                    for (var i=1; i<=81; i++) {
                        var item = document.querySelector("#resolved"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+100);

                        var item = document.querySelector("#resolved"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+5);
                    }
                    for (var i=1; i<=2; i++) {
                        var item = document.querySelector("#enrolled"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-75);

                        var item = document.querySelector("#enrolled"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-5);
                    }
                    for (var i=1; i<=3; i++) {
                        var item = document.querySelector("#suspended"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-75);

                        var item = document.querySelector("#suspended"+String(i)+"-2");
                        item.classList.add("fill-fade");
                        item.style.fill="#d3d3d3";
                        item.classList.add("move-fade");
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-5);
                    }
                    for (var i=2; i<=35; i++) {
                        var item = document.querySelector("#resolvedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=2; i<=40; i++) {
                        var item = document.querySelector("#pendingtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=37; i<=70; i++) {
                        var item = document.querySelector("#resolvedtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                    for (var i=42; i<=80; i++) {
                        var item = document.querySelector("#pendingtext-"+String(i));
                        item.classList.add("fill-fade");
                        item.style.fill="#FFFFFF";
                    }
                }
            }

            last = index;
        }) 
}

document.addEventListener('DOMContentLoaded', init);
init();