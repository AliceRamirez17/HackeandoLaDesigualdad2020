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
    doctor: data.doctor,
    fecha: data.date,
    acompañante: data.acomp,
}).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
}


export const firebaseFunctions = { citas, crearCita }
