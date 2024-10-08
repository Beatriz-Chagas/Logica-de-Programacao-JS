// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// // Descri��o  : Ler 3 valores (considere que n�o ser�o informados valores iguais) e escrever o maior deles.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');
  const numero1 = parseFloat(document.querySelector('.num1').value);
  const numero2 = parseFloat(document.querySelector('.num2').value);
  const numero3 = parseFloat(document.querySelector('.num3').value);

  const maior = Math.max(numero1, numero2, numero3);

  result.textContent = `  O maior valor inserido foi: ${maior}`

});