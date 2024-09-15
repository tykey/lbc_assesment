export const pt = {
  pages: {
    homepage: {
      my_tasks: 'As minhas tarefas',
      total_tasks: (totalTasks: number) => `Total de tarefas: ${totalTasks}`,
      add_success: 'Tarefa adicionada',
      remove_success: 'Tarefa excluída',
    },
  },
  components: {
    add_task: {
      title: 'Descrição da tarefa:',
      add_button: 'Adicionar Tarefa',
    },
    pagination: {
      page_info: (currPage: number, totalPages: number) =>
        `Página ${currPage} de ${totalPages}`,
      previous_page: 'Anterior',
      next_page: 'Seguinte',
    },
    tasks_list: {
      task_label: 'Tarefa',
      creation_date_label: 'Data de criação',
      finished_data_label: 'Data de conclusão',
      remove_button_text: 'Excluir',
      no_results: 'Ainda não adicionou nenhuma tarefa!',
    },
    footer: {
      text: 'Exercício desenvolvido por: Tiago Costa',
    },
  },
}
