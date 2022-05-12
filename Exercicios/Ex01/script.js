const lista = document.getElementById("lista");
const inputNum = document.getElementById("inputNum");
const btInserir = document.getElementById("btInserir");
const btCriarLista = document.getElementById("btCriarLista");
const fragment = new DocumentFragment();
function inserir(inicio) {
  console.log("INSERIIIIIIIIIIIR");
  const num = inputNum.value.trim();
  if (num) {
    // lista.innerHTML += `<li>${num}</li>`;
    const nodeLi = document.createElement("li");
    const nodeText = document.createTextNode(num);
    nodeLi.appendChild(nodeText);

    lista.appendChild(nodeLi);

    inputNum.value = "";
  }
  inputNum.focus();
}
function inserirInicio() {
  console.log("INSERIIIIIIIIIIIR");
  const num = inputNum.value.trim();
  if (num) {
    // lista.innerHTML += `<li>${num}</li>`;
    const nodeLi = document.createElement("li");
    const nodeText = document.createTextNode(num);
    nodeLi.appendChild(nodeText);

    lista.insertBefore(nodeLi, lista.firstChild);

    inputNum.value = "";
  }
  inputNum.focus();
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

function criarLista() {
  lista.innerHTML = "";
  for (let i = 1; i <= 10; ++i) {
    lista.innerHTML += `<li>${i}</li>`;
  }
}

function inputNomeOnFocus() {
  console.log("Entrou no input num");
}

function inputNomeOnBlur(event) {
  console.log("Saiu do input numero");
  if (!inputNum.value) {
    alert("Precisa digitar um numero!");
  }
}

function handleListaMouseOver() {
  console.log("on mouse over");
}

function handleListaMouseEnter() {
  console.log("on mouse enter");
}

function handleInputNomeChange(event) {
  console.log(event);
  console.log("valor atual = ", event.target.value);
  console.log("onChange");
}

btInserir.onclick = inserir;
btInserirInicio.onclick = inserirInicio;
document.getElementById("btLimpar").onclick = limpar;

inputNum.onkeyup = capturarEnter;
inputNum.onfocus = inputNomeOnFocus;
inputNum.onblur = inputNomeOnBlur;
inputNum.onchange = handleInputNomeChange;

lista.onmouseover = handleListaMouseOver;
lista.onmouseenter = handleListaMouseEnter;

btCriarLista.onclick = criarLista;