function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let numero;
  let sorteados = [];

  //Verifica se as variáveis possuem valor falsy (undefined,null,NaN, 0) ou não estão definidas
  if (!quantidade || !de || !ate) {
    alert("Por favor, preencha todos os campos antes de clicar em sortear!");
    return;
  }

  if (de > ate) {
    alert(
      'O campo "Do número" precisa ser menor do que o campo "Até o número"'
    );
    return;
  }

  //Verifica se Quantidade é maior que o intervalo de "de" e "ate", por exemplo: Gera 5 número sem se repetir entre 1 e 3, não será possível.
  if (quantidade > ate - de + 1) {
    alert(
      'O intervalo dos campos "Do número" e "Até o número" precisam ser maior que o campo "Quantidade".'
    );
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${sorteados} </label> `;

  alterarStatusBotao();
  document.getElementById("btn-reiniciar").removeAttribute("disabled");
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
  document.getElementById("btn-reiniciar").setAttribute("disabled", true);
}
