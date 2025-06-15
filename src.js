//I should be able to type a guest's name into the input field.
const guestForm = document.getElementById('guestform');
const guestNameInput = document.getElementById('guestname');

//this an event listner for form submission

guestForm.addEventListener('submit', function(event){
    
    
    event.defaultPrevented();


    //we check if the is empty 

if(guestName) {
    console.log('Guest added', guestName)


    guestNameInput.value = '';
}
else{
    console.log('please enter guest name');
}




});