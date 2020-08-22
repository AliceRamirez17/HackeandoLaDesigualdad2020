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



const addElementDom = (enunciado, value) => {
    const dataFixed = document.getElementById('data-fixed')
    dataFixed.innerHTML += `
     <h6 class='textAdd' style="font-size: 1em;
     text-align: center;">${enunciado}:${value}</h6>
     `
    dataResumen.appendChild(dataFixed)
}
const divData = document.createElement('div')
const dinamicDom = (enunciado, value) => {
    const div = document.createElement('div')
div.innerHTML=''
    div.innerHTML = `
    <h3>${enunciado}:${value}</h3>
    `
    
    // divData.appendChild(div)
    divData.innerHTML +=div.textContent
    dataResumen.appendChild(divData)
}

btnContinue.addEventListener('click', () => {
    const nameValue = document.getElementById('inputName').value
    const phoneValue = document.getElementById('inputPhone').value
    const ineValue = document.getElementById('inputIne').value
    const emailValue = document.getElementById('inputEmail').value
const error=document.getElementById('error')
error.style.margin='5%'
error.style.color='orange'
    if (nameValue === null || nameValue === '') {
        error.textContent= 'se requiere tu nombre'
    } else if (phoneValue === null || phoneValue === '' ) {
        error.textContent= 'se requiere tu telefono'
    }  else if (ineValue === null || ineValue === '') {
        error.textContent= 'se requiere tu INE'
    } else if (emailValue ===null || emailValue ===''){
            error.textContent= 'se requiere tu email'
    } else {
        error.textContent= ''
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
    const error=document.getElementById('error-message')
    error.style.margin='5%'
    error.style.color='orange'
        

    if (clinicValue === null || clinicValue === '') {
        error.textContent= 'se requiere que elijas una clinica'
    } else if (dateValue === null || dateValue === '') {
        error.textContent= 'se requiere que elijas una fecha'
    } else {
        error.textContent= ''
        data.push({ clinic: clinicValue, acompPerson: doctorValue, date: dateValue, acomp: acompValue })
        const result = { ...data[0], ...data[1] }

        console.log(result);

        firebaseFunctions.crearCita(result)
    }
})

const containerInputDoctor = document.getElementById('containerInputDoctor');

window.onload = function () {
    containerInputDoctor.classList.add('ocultar');
    acomp.onchange = function () {
        if (acomp.checked === true) {
            containerInputDoctor.classList.remove('ocultar');
        } else {
            containerInputDoctor.classList.add('ocultar');
        }
    }
}
