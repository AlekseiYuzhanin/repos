let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-navigation');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active');
});

function selectTab(tabIndex){
    document.getElementById('tab1Content').style.display="none";
    document.getElementById('tab2Content').style.display="none";
    document.getElementById('tab3Content').style.display="none";
    document.getElementById('tab4Content').style.display="none";
    document.getElementById('tab5Content').style.display="none";
    document.getElementById('tab6Content').style.display="none";

    document.getElementById('tab' + tabIndex + 'Content').style.display="flex";
}

