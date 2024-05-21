var tarefas = [];

        function adicionarTarefa() {
            var input = document.getElementById('inputTarefa');
            var tarefa = input.value;
            tarefas.push(tarefa);
            input.value = '';
            renderizarTarefas();
        }

        function removerTarefa(index) {
            tarefas.splice(index, 1);
            renderizarTarefas();
        }

        function editarTarefa(index) {
            var novaTarefa = prompt('Editar tarefa', tarefas[index]);
            if (novaTarefa) {
                tarefas[index] = novaTarefa;
                renderizarTarefas();
            }
        }

        function renderizarTarefas() {
            var divTarefas = document.getElementById('tarefas');
            divTarefas.innerHTML = '';
            for (var i = 0; i < tarefas.length; i++) {
                divTarefas.innerHTML += `
                    <div class="tarefa">
                        ${tarefas[i]}
                        <button onclick="removerTarefa(${i})">Remover</button>
                        <button onclick="editarTarefa(${i})">Editar</button>
                    </div>
                `;
            }
        }