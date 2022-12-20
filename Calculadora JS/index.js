const suma= document.getElementById('suma');
const resta= document.getElementById('resta');
const multiplicacion= document.getElementById('multiplicacion');
const division= document.getElementById('division');
const raiz= document.getElementById('raiz');
const potencia= document.getElementById('potencia');
const residuo= document.getElementById('residuo');
const reinicio= document.getElementById('reinicio');


suma.addEventListener('click', function(){
    let num1= parseFloat(document.getElementById('first_number').value);
    let num2= parseFloat(document.getElementById('second_number').value);
    let result= num1 + num2;
    document.getElementById("resultado").innerHTML = result;
})

resta.addEventListener('click', function(){
    num1= parseFloat(document.getElementById('first_number').value);
    num2= parseFloat(document.getElementById('second_number').value);
    result= num1 - num2;
    document.getElementById("resultado").innerHTML = result;
})

multiplicacion.addEventListener('click', function(){
    num1= parseFloat(document.getElementById('first_number').value);
    num2= parseFloat(document.getElementById('second_number').value);
    result= num1 * num2;
    document.getElementById("resultado").innerHTML = result;
})

division.addEventListener('click', function(){
    num1= parseFloat(document.getElementById('first_number').value);
    num2= parseFloat(document.getElementById('second_number').value);
    result= num1 / num2;
    document.getElementById("resultado").innerHTML = result;
})

raiz.addEventListener('click', function(){
    num1= parseFloat(document.getElementById('first_number').value);
    num2= document.getElementById('second_number').value = '';
    result= Math.sqrt(num1);
    document.getElementById("resultado").innerHTML = result;
})

potencia.addEventListener('click', function(){
    num1= parseFloat(document.getElementById('first_number').value);
    num2= parseFloat(document.getElementById('second_number').value);
    result= num1 ** num2;
    document.getElementById("resultado").innerHTML = result;
})

residuo.addEventListener('click', function(){
    num1= parseFloat(document.getElementById('first_number').value);
    num2= parseFloat(document.getElementById('second_number').value);
    result= num1 % num2;
    document.getElementById("resultado").innerHTML = result;
})


reinicio.addEventListener('click', function(){
    num1= document.getElementById('first_number').value = '';
    num2= document.getElementById('second_number').value = '';
    result= document.getElementById("resultado").value = '';
    document.getElementById("resultado").innerHTML = result;
})





