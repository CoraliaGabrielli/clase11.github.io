const helado = 100;
let topping = "Oreo";
let precio;
let precioFinal;

if (topping == "Oreo") {
    precio = 10;   
} else if (topping == "Kitkat") {    
    precio = 15;
} else if (topping == "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
}

precioFinal = precio + helado;

console.log("El helado cuesta $ " + precioFinal);



let menu = "pescado"

switch (menu) {
    case "carne":
        console.log("Carne con vino tinto");
    break;
    case "pescado":
        console.log("Pescado con vino blanco");
    break;
    case "verdura":
        console.log("Verdura con agua");
    break;
    default:
        console.log("Elija carne, pescado o verdura");
}



let bebidas = ["café", "té", "licuado", "limonada", "chocolatada", "agua saborizada"];
bebidas.push("gaseosa");
console.log("Cantidad de bebidas: ", bebidas.length);

for (let i=0; i<bebidas.length; i++){
    console.log(bebidas[i]);
}


let numero = 10;

while (numero < 11) {
    numero++;
    console.log("numero es más chico que 11");
}
