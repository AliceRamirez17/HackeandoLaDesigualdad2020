// aqui va todo que tenga que ver con DOM


const btnContinuar = document.getElementById('btn-continue')
const btnConfirm = document.getElementById('btn-confirm')
const clinic = document.getElementById('inputClinic')
const doctor = document.getElementById('inputDoctor')
const data=[]


btnContinuar.addEventListener('click', () => {
    const nameValue = document.getElementById('inputName').value
    const phoneValue = document.getElementById('inputPhone').value
    const ineValue = document.getElementById('inputIne').value
    const emailValue = document.getElementById('inputEmail').value
    
})


let clinicValue=''
clinic.addEventListener('change', (e) => {
    e.preventDefault()
   clinicValue =  clinic.value  
})

let doctorValue=''
clinic.addEventListener('change', (e) => {
    e.preventDefault()
    doctorValue =  doctor.value  
})


btnConfirm.addEventListener('click', (e) => {
e.preventDefault()

const dateValue = document.getElementById('inputDate').value
const acompValue = document.getElementById('inputCheck').checked

if((clinicValue !== undefined) || (doctorValue !== undefined)||(dateValue !== undefined)){
 console.log(clinicValue);
 }else {
  //mostarr "llena este campo"
  alert('no')
}
// if(doctorValue !== undefined){
    
// }



})