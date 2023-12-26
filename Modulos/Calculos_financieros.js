export function calculo_IVA(cantidad){

    let iva =cantidad *0.21;

    return iva;

}

export function calculo_IRPF(cantidad){

    let irpf =cantidad *0.15;

    return irpf;

}

export function calculo_TOTAL(cantidad){

    let total =cantidad - calculo_IRPF(cantidad) + calculo_IVA(cantidad);

    return total;

}
