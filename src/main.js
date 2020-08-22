// aqui va todo que tenga que ver con DOM
import { firebaseFunctions } from './logic.js'

//buttons
const btnContinue = document.getElementById('btn-continue')
const btnConfirm = document.getElementById('btn-confirm')
//inputs
const clinic = document.getElementById('inputClinic')
const doctor = document.getElementById('inputDoctor')
const date = document.getElementById('inputDate')
const acomp = document.getElementById('inputCheck')
// date.style.display= 'none'
//sections
const formInitial = document.getElementById('form-initial')
const formEspecific = document.getElementById('form-especific')
const dataResumen = document.getElementById('datos')
const data = []

formInitial.classList.add('flexbox');
formEspecific.classList.add('ocultar');

const divData = document.createElement('div')

const addElementDom = (enunciado, value) => {
    divData.innerHTML += `
    <h3>${enunciado}:${value}</h3>
    `
    dataResumen.appendChild(divData)
}

btnContinue.addEventListener('click', () => {
    const nameValue = document.getElementById('inputName').value
    const phoneValue = document.getElementById('inputPhone').value
    const ineValue = document.getElementById('inputIne').value
    const emailValue = document.getElementById('inputEmail').value

    if (nameValue === null || nameValue === '') {
        alert('llena los campos')
        // } else if (phoneValue === null || phoneValue === '') {
        //     alert('llena los campos')
        // } else if (ineValue === null || ineValue === '') {
        //     alert('llena los campos')
        //     }else if (emailValue ===null || emailValue ===''){
        //         alert('llena los campos')
    } else {
        addElementDom('Nombre', nameValue)
        addElementDom('Telefono', phoneValue)
        addElementDom('INE', ineValue)
        addElementDom('Email', emailValue)

        data.push({ name: nameValue, phone: phoneValue, ine: ineValue, email: emailValue })
        console.log(data);
        
        formInitial.classList.add('ocultar');
        formInitial.classList.remove('flexbox');
        formEspecific.classList.add('flexbox');
        formEspecific.classList.remove('ocultar');
    }
})

let clinicValue = ''
clinic.addEventListener('change', (e) => {
    e.preventDefault()
    clinicValue = clinic.value
    // divData.innerHTML = ''
    addElementDom('Clinica', clinicValue)
})

let doctorValue = ''
doctor.addEventListener('change', (e) => {
    e.preventDefault()
    doctorValue = doctor.value
    // divData.innerHTML = ''
    addElementDom('Acompañante', doctorValue)
})

let dateValue = ''
date.addEventListener('change', (e) => {
    e.preventDefault()
    dateValue = date.value
    // divData.innerHTML = ''
    addElementDom('Fecha', dateValue)
})

let acompValue = ''
acomp.addEventListener('change', (e) => {
    e.preventDefault()
    acompValue = acomp.checked
    const estado = (acompValue) ? 'Si' : 'No';
    // divData.innerHTML = ''
    addElementDom('Con acompañante', estado)
})


btnConfirm.addEventListener('click', (e) => {
    e.preventDefault()

    if (clinicValue === null || clinicValue === '') {
        alert('llena los campos')
    } else if (doctorValue === null || doctorValue === '') {
        alert('llena los campos')
    } else if (dateValue === null || dateValue === '') {
        alert('llena los campos')
    } else {

        data.push({ clinic: clinicValue, acompPerson: doctorValue, date: dateValue, acomp: acompValue })
        const result = { ...data[0], ...data[1] }

        console.log(result);

        firebaseFunctions.crearCita(result)
    }
})

const containerInputDoctor = document.getElementById('containerInputDoctor');

window.onload = function() {
    containerInputDoctor.classList.add('ocultar');
    acomp.onchange = function() {
        if (acomp.checked === true) {
            containerInputDoctor.classList.remove('ocultar');
        } else {
            containerInputDoctor.classList.add('ocultar');
      }
    }
  }
