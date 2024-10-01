function openTabf(){
    let li1 = document.querySelector(".tedb-tab1");
    let li2 = document.querySelector(".tedb-tab2");
    let li3 = document.querySelector(".tedb-tab3");
    li1.classList.add("active");
    li2.classList.remove("active");
    li3.classList.remove("active");

    let tabcont1 = document.querySelector(".tedb-tab-cards-cont1");
    let tabcont2 = document.querySelector(".tedb-tab-cards-cont2");
    let tabcont3 = document.querySelector(".tedb-tab-cards-cont3");
    tabcont1.style.display = "block";
    tabcont2.style.display = "none";
    tabcont3.style.display = "none";
}
function openTabs(){
    let li2 = document.querySelector(".tedb-tab2");
    let li1 = document.querySelector(".tedb-tab1");
    let li3 = document.querySelector(".tedb-tab3");
    li2.classList.add("active");
    li1.classList.remove("active");
    li3.classList.remove("active");

    let tabcont1 = document.querySelector(".tedb-tab-cards-cont1");
    let tabcont2 = document.querySelector(".tedb-tab-cards-cont2");
    let tabcont3 = document.querySelector(".tedb-tab-cards-cont3");
    tabcont1.style.display = "none";
    tabcont2.style.display = "block";
    tabcont3.style.display = "none";

}
function openTabt(){
    let li3 = document.querySelector(".tedb-tab3");
    let li1 = document.querySelector(".tedb-tab1");
    let li2 = document.querySelector(".tedb-tab2");
    li3.classList.add("active");
    li1.classList.remove("active");
    li2.classList.remove("active");

    let tabcont1 = document.querySelector(".tedb-tab-cards-cont1");
    let tabcont2 = document.querySelector(".tedb-tab-cards-cont2");
    let tabcont3 = document.querySelector(".tedb-tab-cards-cont3");
    tabcont1.style.display = "none";
    tabcont2.style.display = "none";
    tabcont3.style.display = "block";
}
