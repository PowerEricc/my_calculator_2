var num = document.getElementById("n1");
var resultado = document.getElementById("resultado");
var botones = document.getElementById('button-addon4');

botones.innerHTML = `
<button class="btn btn-danger" id="cube" >x^3</button>
<button class="btn btn-info" id="x2" >x^2</button>
<button class="btn btn-secondary" id="inversa" >1/x</button>
`;
var cube = document.getElementById('cube');
cube.addEventListener('click', cube =>
{
      resultado.innerHTML = `<h1>El resultado de ${num.value} <span class="text-danger"><strong>x^3</strong></span> es: <span class="alert alert-success">${Math.pow(num.value, 3)}</span></h1>`;
});
x2.addEventListener('click', x2 =>
{
      resultado.innerHTML = `<h1>El resultado de ${num.value} <span class="text-info"><strong>x^2</strong></span> es: <span class="alert alert-success">${Math.pow(num.value, 2)}</span></h1>`;
});
inversa.addEventListener('click', () =>
{
      resultado.innerHTML = `<h1>El resultado de la <span class="text-secondary"><strong>inversa</strong></span> de ${num.value} <span class="text-secondary"><strong>1/x</strong></span> es: <span class="alert alert-success">${1/num.value}</span></h1>`;
});
