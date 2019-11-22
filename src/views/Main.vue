<template>
  <div class="main-wrapper">
    <div class="task-wrapper">
      <div>
        <h2 class="p-0 mb-1 fw-900">Задачи</h2>
      </div>
      <ul v-if="tasks">
        <li v-for="(task, index) in tasks" :key="index">
          <div>{{index+1}}) {{task.text}}</div>
           <a @click="deleteTask(task.id)" class="cancel">&times;</a>
        </li>
      </ul>
      <div v-else>
        <h2>Загрузка</h2>
      </div>
      <div class="task-footer">
        <textarea v-if="showInputter" v-model="taskText" class="add-task-input" type="Введите" />
        <div class="footer-actions">
          <button
            @click="showInputter ? createTask() : showInputter = true"
            class="green-btn"
          >{{!showInputter ? 'Добавить запись' : 'Отправить'}}</button>
          <a v-if="showInputter" @click="taskText = ''; showInputter=false" class="cancel">&times;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      showInputter: false,
      taskText: ""
    };
  },
  components: {},
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  methods: {
    async getTasks() {
      return await this.$store.dispatch("getTasks");
    },
    async createTask() {
      await this.$store.dispatch("createTask", this.taskText);
      this.taskText = "";
    }
  },
  beforeMount() {
    this.getTasks();
  }
};
</script>
<style lang="less" scoped>
@bg: #ccc;

.main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .cancel {
    font-size: 30px;
    padding: 0;
    margin: 0;
    margin-left: 1rem;
    cursor: pointer;
  }

  .add-task-input {
    padding: 0.5rem 0.7rem;
  }
  .task-footer {
    display: flex;
    flex-direction: column;
    .footer-actions {
      display: flex;
      align-items: center;
    }
    textarea {
      border-radius: 6px;
      margin-bottom: 0.5rem;
    }
  }
  .task-wrapper {
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: @bg;
    justify-content: space-between;
    ul {
      margin: 0;
      display: flex;
      flex-direction: column-reverse;
      overflow-y: auto;
      max-height: 450px;
      padding-left: .5rem;
      padding-right: 1.5rem;
      margin-bottom: 1rem;
      li {
        background-color: white;
        border-radius: 5px;
        padding: 0.35rem 0.6rem;
        list-style: none;
        font-weight: 600;
        min-width: 350px;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px darkgray solid;
      }
    }
  }
}
</style>
