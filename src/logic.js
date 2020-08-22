// aqui van funciones puras o de firebase
const db = firebase.firestore()

const citas = () => db.collection("citas").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
    });
});
const crearCita = (data) => {
    console.log(data);
    db.collection("citas").add({
    nombre: data.name,
    telefono: data.phone,
    ine: data.ine,
    email: data.email,
    clinica: data.clinic,
    acompPerson: data.acompPerson,
    fecha: data.date,
    acomp: data.acomp,
}).then(function(docRef) {
    const modalShow= document.getElementById('modalShow') 
    modalShow.href="#modal1"
})
}


export const firebaseFunctions = { citas, crearCita }
