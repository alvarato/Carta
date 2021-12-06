const db = firebase.firestore();
//const identificador = document.getElementById("iden");

const getprecios = () => db.collection('carta').get();

window.addEventListener('DOMContentLoaded', async (e) => {
    const lista = await getprecios();
    let i = 0;
    lista.forEach(doc =>{
        console.log(doc.data()) 
         document.getElementById(i).innerHTML= doc.data().precio;
         i = i+1
    })
   
})