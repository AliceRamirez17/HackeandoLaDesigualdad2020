// aqui va todo que tenga que ver con DOM
import { firebaseFunctions } from './logic.js'

const btnContinue = document.getElementById('btn-continue')
const btnConfirm = document.getElementById('btn-confirm')
const clinic = document.getElementById('inputClinic')
const doctor = document.getElementById('inputDoctor')
const formInitial = document.getElementById('form-initial')
const formEspecific = document.getElementById('form-especific')
const dataResumen = document.getElementById('datos')
const data = []

formInitial.classList.add('flexbox');

btnContinue.addEventListener('click', () => {
    const nameValue = document.getElementById('inputName').value
    const phoneValue = document.getElementById('inputPhone').value
    const ineValue = document.getElementById('inputIne').value
    const emailValue = document.getElementById('inputEmail').value

    if (nameValue === null || nameValue === '') {
        alert('llena los campos')
    } else if (phoneValue === null || phoneValue === '') {
        alert('llena los campos')
    } else if (ineValue === null || ineValue === '') {
        alert('llena los campos')
        }else if (emailValue ===null || emailValue ===''){
            alert('llena los campos')
    } else {
        data.push({ name: nameValue , phone: phoneValue , ine: ineValue ,  email: emailValue })
        console.log(data);
    }

    formInitial.classList.add('ocultar');
    formInitial.classList.remove('flexbox');
})

let clinicValue = ''
clinic.addEventListener('change', (e) => {
    e.preventDefault()
    clinicValue = clinic.value
})

let doctorValue = ''
doctor.addEventListener('change', (e) => {
    e.preventDefault()
    doctorValue = doctor.value
})


btnConfirm.addEventListener('click', (e) => {
    e.preventDefault()
   
    const dateValue = document.getElementById('inputDate').value
    const acompValue = document.getElementById('inputCheck').checked
    if (clinicValue === null || clinicValue === '') {
        alert('llena los campos')
    } else if (doctorValue === null || doctorValue === '') {
        alert('llena los campos')
    } else if (dateValue === null || dateValue === '') {
        alert('llena los campos')
    } else {
        data.push({ clinic: clinicValue ,  doctor: doctorValue ,  date: dateValue , acomp: acompValue })
        const result = {
            ...data[0],
            ...data[1],
          }
          console.log(result);
        firebaseFunctions.crearCita(result)
    }
})
