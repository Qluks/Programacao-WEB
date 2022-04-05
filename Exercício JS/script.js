const lista = document.getElementById("lista");
const inputAleatorios = document.getElementById("inputAleatorios");
const inputColunas = document.getElementById("inputColunas");
const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");

function inserir(inicio) {
  console.log("IIIIR");
  const aleatorios = inputAleatorios.value.trim();
  const colunas = inputColunas.value.trim();
  const min = inputMin.value.trim();
  const max = inputMax.value.trim();
  if (colunas) {
    const linha = document.createElement("tr");
    for (i = 0; i < colunas; i++) {
      const nodeLi = document.createElement("td");
      nodeLi.innerText = Math.trunc(Math.random() * (max - min) + min);
      linha.appendChild(nodeLi);
    }
    if (i % aleatorios == 0) {
      lista.innerHTML += "\n";
   }
    lista.appendChild(linha);
  }
}
function limpar() {
  lista.innerHTML = "";
  inputNum.value = "";
  inputNum.focus();
}

function capturarEnter(event) {
  if (event.keyCode === 13) {
    btInserir.click();
  }
}

btInserir.onclick = inserir;