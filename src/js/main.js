let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-navigation');
let nameInput = document.getElementById('nameId');
let numberPhone = document.getElementById('numberPhoneId');
let footerBtn = document.querySelector('.middle-element__btn');

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

let contactForm = document.querySelector('#contactForm')

function handlerFormSubmit(event) {
    event.preventDefault();
    getDataForm(contactForm);
}
// данные с формы
function getDataForm(formNode) {
    let elements = formNode;
    let data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element;
            return { name, value };
        });
    console.log(data);
}
contactForm.addEventListener("submit", handlerFormSubmit);