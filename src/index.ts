let producto = document.getElementById("precioProducto");
let boton = document.getElementById("btn");
function precioFinal() {
  let descuento = Number(producto.value) * 0.1;
  console.log("El precio final es", producto.value - descuento);
}

boton.addEventListener("click", precioFinal);
