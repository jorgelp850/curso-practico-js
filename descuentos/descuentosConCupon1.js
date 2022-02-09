/*const precioOriginal = 100;
const descuento = 15;*/




function calcularPreciosConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = Number(inputPrice.value);

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;


    let descuento;

    switch(cuponValue) {
      case coupons[0]: 
        descuento = 15;
      break;
      case coupons[1]: 
        descuento = 30;
      break;
      case coupons[2]:
        descuento = 25;
      break;
    }

    const precioConDescuento = calcularPreciosConDescuento(priceValue,descuento);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "el precio con descuento son $ " + precioConDescuento;
}

const coupons = [
    "cupon_15",
    "cupon_30",
    "cupon_25",
];

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})*/
