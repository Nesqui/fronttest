<template>
  <div class="main-wrapper">
    <div class="task-wrapper">
      <div v-if="loaded">
        <div class="d-flex justify-content-between w-100">
          <button @click="$router.push('/')" class="home-btn">На главную</button>
          <button @click="eddit = true" class="edit-btn">
            <img class="img-fluid" src="@/assets/icons/edit.svg" alt />
          </button>
        </div>
        <div v-if="currentTask && currentTask.text">
          <h2 v-if="!eddit" class="my-1">Задача: {{currentTask.text}}</h2>
          <div v-else class="d-flex justify-content-between">
            <p>Новое задание:</p>
            <input
              class="my-1"
              @keyup.enter="editTask"
              placeholder="Enter для отправки"
              v-model="newTaskText"
              type="text"
            />
          </div>
          <p class="my-1">Завершено: {{currentTask.completed?'Да':'Нет'}}</p>
          <div v-if="!currentTask.completed" class="task-footer">
            <div class="footer-actions">
              <button @click="completeTask" class="green-btn">Завершить</button>
            </div>
          </div>
        </div>
        <div class="my-1" v-else>Запись не найдена</div>
      </div>
      <preloader v-else></preloader>
    </div>
  </div>
</template>

<script>
import preloader from "@/components/preloader";
export default {
  props: ["tid"],
  data() {
    return {
      loaded: false,
      eddit: false,
      newTaskText: ""
    };
  },
  methods: {
    async getTask() {
      await this.$store.dispatch("getTask", this.tid);
      this.loaded = true;
    },
    completeTask() {
      this.$store.dispatch("updateTask", this.tid);
    },
    editTask() {
      this.$store.dispatch("editTask", {
        tid: this.tid,
        text: this.newTaskText
      });
      this.eddit = false;
    }
  },
  computed: {
    currentTask() {
      return this.$store.getters.currentTask;
    }
  },
  components: { preloader },
  beforeMount() {
    this.getTask();
  }
};
</script>

<style>
</style>