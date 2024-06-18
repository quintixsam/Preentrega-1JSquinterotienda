function Bienvenida() {
    let Nombre; 
    let articulo;
    let precio;

    // Nombredelusuario
    do {
        Nombre = prompt("¿Cuál es tu nombre?");
        if (!Nombre) {
            alert("Ingresa un nombre válido");
            continue;
        }

        alert("¡Bienvenido " + Nombre + " a nuestra tienda!");

        alert("Selecciona alguna opción " + "\n" + 
              "1. Camisetas de selecciones" + "\n" + 
              "2. Camisetas de clubes" + "\n" + 
              "3. Camiseta retro");

        articulo = menu();
        precio = precios(articulo);

        if (!articulo) {
            break;
        }

        console.log("Recibo de compra:");
        console.log(`Nombre: ${Nombre}`);
        console.log(`Artículo: ${articulo}`);
        console.log(`Precio: $${precio} USD`);

    } while (Nombre && (articulo >= 1 && articulo <= 3));
}

function menu() {
    let articulo = parseInt(prompt("¿Cuál artículo deseas?"));

    switch (articulo) {
        case 1:
            alert("Has escogido camisetas de selecciones");
            return "Camisetas de selecciones";
        case 2:
            alert("Has escogido camisetas de clubes");
            return "Camisetas de clubes";
        case 3:
            alert("Has escogido camiseta retro");
            return "Camiseta retro";
        default:
            alert("Artículo no válido");
            return undefined;
    }
}

function precios(articulo) {
    switch (articulo) {
        case "Camisetas de selecciones":
            return 50;
        case "Camisetas de clubes":
            return 50;
        case "Camiseta retro":
            return 80;
        default:
            return 0;
    }
}

Bienvenida();
