// ====================Submit Btn=====================
const submitBtn = document.querySelector('#btn');

//=============================Form===================
const form = document.querySelector('#myForm');
//================================Inputs========================
const myName = document.querySelector('#name');
const myMail = document.querySelector('#contact');
const message = document.querySelector('#msg');

//==============================spans=================================
const nameSpan = document.querySelector('#fullName');
const emailSpan = document.querySelector('#email');
const msgSpan = document.querySelector('#message');

// =======================Validation=======================
function validation() {
  if (myName.value == '' && myMail.value == '') {
    return false
  } else if (myName.value == '') {
    nameSpan.innerHTML = '***Name is required***';
    nameSpan.style.color = '#FF724C';
    return false
  } else if (myMail.value == '') {
    emailSpan.innerHTML = '***Email is required for contact plz***';
    emailSpan.style.color = '#FF724C';
    return false
}else if (message.value == "") {
    msgSpan.innerHTML = '***Msg is required***';
    msgSpan.style.color = '#FF724C';
    return false

      
  }
   else {
    return true
  }
}

//======================Check on submit;=================================
submitBtn.onclick = () => {

  if (myName.value == '') {
    myName.style.border = '1px solid red';
    nameSpan.innerHTML = '***Name is required***';
    nameSpan.style.color = '#FF724C';
  } if (myMail.value == '') {
    myMail.style.border = '1px solid red';
    emailSpan.innerHTML = '***Email is required for contact.***';
    emailSpan.style.color = '#FF724C';
  } 
  if (message.value == '') {
    message.style.border = '1px solid red';
    msgSpan.style.display = 'inline-flex';
    msgSpan.innerHTML = '***Message is required***';
    msgSpan.style.color = '#FF724C';

      
  }else {
    alert('You have submitted your response:)');
  }
}
// ======================Onblur output==========================

function onBlur(get){

  // console.log(get.value);
  if (get.value=="") {
    document.querySelector('#' + get.name).innerHTML = `***${get.name}` + " is required";
    document.querySelector('#' + get.name).style.color = "red";
    
  }else{
    document.querySelector('#' + get.name).innerHTML = "";
  }
 
}