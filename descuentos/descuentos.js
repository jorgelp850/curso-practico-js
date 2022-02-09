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

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = Number(inputDiscount.value);

    const precioConDescuento = calcularPreciosConDescuento(priceValue,discountValue );

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "el precio con descuento son $ " + precioConDescuento;
}



/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})*/