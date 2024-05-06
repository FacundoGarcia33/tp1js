let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola," +nombre)

const añoUsuario = prompt("¿En qué año naciste?");
const añoActual = 2024;
let edadUsuario = añoActual - añoUsuario;
alert("Tu nombre es "+nombre+ "y tienes "+edadUsuario+ "años")

let autos = prompt("¿quieres ver nuestras ofertas de autos? (Responde 'SI' o 'NO')");

if (autos.toUpperCase() === 'SI') {
    let seleccionPlan = prompt("Perfecto. ¿Qué plan de autos te interesa?\n1. puegeot208,2010 325ks =6.0000usd (cuotas sin interes)\n2. toyota hilux,2013,4x4,550km 22.000usd(cuotas sin iteres)\n3. renaul megane,2011,208km, 3500usd (cuotas sin interes)\nEscribe el número del plan:");
    
    switch (seleccionPlan) {
        case '1':
            console.log("Seleccionaste el Plan 1.puedes abonar con cualquier targeta");
            alert("Seleccionaste el Plan Básico. El valor es de 220usd por mes.");
            break;
        case '2':
            console.log("Seleccionaste el Plan toyota. puedes abonar con cualquier tarjeta,tenes descuntos con naranja y master");
            alert("Seleccionaste el Plan Avanzado. El valor es de 400usd por mes.");
            break;
        case '3':
            console.log("Seleccionaste el Plan 3. puedes abonar con cualquier tarjeta.");
            alert("Seleccionaste el Plan Premium. El valor es de 250usd.");
            break;
        default:
            console.log("No has seleccionado una opción válida.");
            alert("No has seleccionado una opción válida.");
            break;
    }
} else if (comercioOk.toUpperCase() === 'NO') {
    console.log("gracias por entrar al sitio");
    alert("gracias por venir");
} else {
    console.log("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
    alert("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
}