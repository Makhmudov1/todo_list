<template>
  <!--  Главный контейнер-->
  <div>
    <!--    Заголовок + подзаголовок-->
    <div class="flex flex-col items-center mt-5">
      <p class="text-h1">СПИСОК ЗАДАЧ (ВСЕГО: <span>{{ tasks.length }})</span></p>
      <p class="pt-1">Добавить задачу можно ниже</p>
    </div>
    <!--    Поле + кнопка для добавления новой задачи-->
    <div class="flex justify-center items-center my-10">
      <input
          v-model="newTask"
          class="border rounded px-4 py-2.5 text-center active:border-sky-400"
          type="text"
          placeholder="Добавить новую задачу"
          @keypress.enter="addTask"
      />
      <button @click="addTask" class="border rounded px-4 py-2 bg-green-300 ml-4">Добавить</button>
    </div>
    <!--    Компонент "Добавленная Задача"-->
    <div>
      <TaskItem
          v-for="(task, index) in tasks"
          :task="task"
          :isDone="false"
          :key="index"
          @removeTask="removeTask(index)"
          @completeTask="completeTask(index)"
      />
    </div>
  </div>
</template>

<script setup>
import TaskItem from "../components/TaskItem";

const tasks = ref([
  {
    text: 'Iya novaya taskka',
    isDone: false
  },
  {
    text: 'Iya novaya taskka',
    isDone: false
  },
  {
    text: 'Iya novaya taskka',
    isDone: false
  },
  {
    text: 'Iya novaya taskka',
    isDone: false
  },
])

const newTask = ref('')

function addTask() {
  tasks.value.push({
  text: newTask.value,
  isDone: false
})
  localStorage.setItem('tasks', JSON.stringify(tasks.value))


  newTask.value = ''
}

function removeTask(index) {
  tasks.value.splice(index, 1)
}

function completeTask(index) {
  tasks.value[index].isDone = !tasks.value[index].isDone
}

onMounted(() => {
  if (localStorage.getItem('tasks')){
    tasks.value = JSON.parse(localStorage.getItem('tasks'))
  }
})
</script>

<style scoped>

</style>