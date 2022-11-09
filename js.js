const sumar =()=> {
    const forma= document.getElementById('forma')
    console.log(forma);
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    console.log(operandoA);
    const resultado = Number(operandoA.value)+ Number(operandoB.value);
   document.getElementById('resultado').innerHTML = `resultado ${resultado}`
}

const restar =()=> {
    const forma= document.getElementById('forma')
    console.log(forma);
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    console.log(operandoA);
    const resultado2 = Number(operandoA.value)- Number(operandoB.value);
   document.getElementById('resultado2').innerHTML =`resultado ${resultado2}`
}