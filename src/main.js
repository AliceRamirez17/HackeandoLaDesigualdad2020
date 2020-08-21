// aqui va todo que tenga que ver con DOM
console.log('hola');

const btnContinuar =document.getElementById('btn-continue')
const btnConfirm= document.getElementById('btn-confirm')



const clinic = document.getElementById('inputClinic')
const dateValue= document.getElementById('inputDate')
const doctor = document.getElementById('inputDoctor')
const acomp= document.getElementById('inputCheck')

let clinicValue=''

btnContinuar.addEventListener('click',()=>{
  const nameValue= document.getElementById('inputName').value
const phoneValue= document.getElementById('inputPhone').value
const ineValue= document.getElementById('inputIne').value
const emailValue= document.getElementById('inputEmail').value
console.log(nameValue,phoneValue,ineValue,emailValue);
})

clinic.addEventListener('change',()=>{
    clinicValue=clinic.value
    console.log(clinicValue);
})