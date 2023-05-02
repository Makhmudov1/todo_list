<template>
  <div>
    <div class="flex justify-center mt-2">
      <p :class="[
          {
            'line-through' : task.isDone
          }
      ]" class="border rounded px-14 py-2.5 text-center">{{ task.text }}</p>
      <button @click="completeTask" :class="task.isDone ? 'bg-yellow-500' : 'bg-green-500'" class="border rounded px-4 py-2 ml-4">{{ task.isDone ? 'Возврат' : 'Завершить' }}</button>
      <button @click="removeTask" class="border rounded px-4 py-2 bg-red-300 ml-1">Удалить</button>
    </div>
  </div>
</template>

<script setup>

defineProps({
  task: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['removeTask','completeTask'])

function completeTask() {
  emit('completeTask')
}

function removeTask(){
  emit('removeTask')
}
</script>

<style scoped>

</style>