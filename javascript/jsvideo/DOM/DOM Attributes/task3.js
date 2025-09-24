
// in the inspectors console, if you click on an element you can refer to it as $0 only used for testing purposes

const tcCheckbox = document.querySelector('.js-tc')
function alwaysAcceptClicked(){
    window.localStorage.setItem('acceptTc', true);
    tcCheckbox.checked = true;
}

function neverAcceptClicked(){
    if(window.localStorage.getItem('acceptTc') === 'true'){
        tcCheckbox.checked = false;
    }
    window.localStorage.removeItem('acceptTc');
}

function formSubmitted(event){
    // if form is invadid {event.preventDefault(); + display error message}

    if (!tcCheckbox.checked){
        event.preventDefault();
        alert('please accpet the terms and conditions before submitting the form.')
    }

      if(window.localStorage.getItem('acceptTc') === 'true'){
        tcCheckbox.checked = true;
    }
}




document.querySelector('.js-form').addEventListener('submit', formSubmitted);
document
.querySelector('.js-always-accept')
.addEventListener('click', alwaysAcceptClicked());
document
.querySelector('.js-never-accept')
.addEventListener('click', neverAcceptClicked());
