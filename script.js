function adicionarTarefa() {
  const input = document.getElementById("novaTarefa");
  const texto = input.value.trim();
  if (texto === "") {
    alert("Digite uma tarefa válida!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;
  document.getElementById("listaTarefas").appendChild(li);
  input.value = "";
}
