<template>
<!--  Главный контейнер-->
  <div>
<!--    Заголовок + подзаголовок-->
    <div class="flex flex-col items-center mt-5">
      <p class="text-h1">СПИСОК ЗАДАЧ</p>
      <p class="pt-1">Добавить задачу можно ниже</p>
    </div>
<!--    Поле + кнопка для добавления новой задачи-->
    <div class="flex justify-center items-center mt-10">
      <input class="border rounded px-4 py-2.5 text-center active:border-sky-400" type = "text" placeholder="Добавить новую задачу" />
      <button class="border rounded px-4 py-2 bg-green-300 ml-4">Добавить</button>
    </div>
<!--    Компонент "Добавленная Задача"-->
    <div>
      <task />
    </div>
  </div>
</template>

<script>
import Task from "../components/task";
export default {
  name: "index",
  components: {Task}
}
</script>

<style scoped>

</style>