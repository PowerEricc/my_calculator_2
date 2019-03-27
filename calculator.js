var num = document.getElementById("n1");
var resultado = document.getElementById("resultado");
var botones = document.getElementById('button-addon4');

botones.innerHTML = `
<button class="btn btn-danger" id="cube" >x^3</button>
`;
var cube = document.getElementById('cube');
cube.addEventListener('click', cube =>
{
      resultado.innerHTML = `<h1>El resultado de ${num.value} <span class="text-danger"><strong>x^3</strong></span> es: <span class="alert alert-success">${Math.pow(num.value, 3)}</span></h1>`;
});
