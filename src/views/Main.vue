<template>
  <div class="main-wrapper">
    <div class="task-wrapper">
      <div>
        <h2 class="p-0 mb-1 fw-900">Задачи</h2>
      </div>
      <ul v-if="loaded">
        <li v-for="(task, index) in tasks" :key="index">
          <a class="w-100" @click="$router.push('/page/'+task.id)">{{index+1}}) {{task.text}}</a>
          <a @click="deleteTask(task.id)" class="cancel">&times;</a>
        </li>
      </ul>
      <div v-else>
        <preloader />
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
import preloader from "@/components/preloader";
// @ is an alias to /src

export default {
  data() {
    return {
      showInputter: false,
      taskText: "",
      loaded: false
    };
  },
  components: { preloader },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    async getTasks() {
      await this.$store.dispatch("getTasks");
      this.loaded = true;
    },
    async createTask() {
      await this.$store.dispatch("createTask", this.taskText);
      this.taskText = "";
    }
  },
  beforeMount() {
    this.loaded = false;
    this.getTasks();
  }
};
</script>
<style lang="less">
@bg: #ccc;

.main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .cancel {
    padding: 0;
    margin: 0;
    margin-left: 1rem;
    font-weight: 900;
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
    max-width: 450px;
    background-color: @bg;
    justify-content: space-between;
    min-width: 360px;
    ul {
      margin: 0;
      display: flex;
      flex-direction: column-reverse;
      overflow-y: auto;
      max-height: 350px;
      padding-left: 0.5rem;
      padding-right: 1.5rem;
      margin-bottom: 1rem;
      li {
        cursor: pointer;
        background-color: white;
        border-radius: 5px;
        list-style: none;
        font-weight: 600;
        width: 350px;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        border-bottom: 2px darkgray solid;

        a {
          padding: 0.35rem 0.6rem;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .cancel {
      font-size: 12x;
    }

    .task-wrapper {
      min-width: 260px;
      padding: 0.3rem 0.6rem;
      ul {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        margin-bottom: 0.5rem;
        li {
          padding: 0.25rem 0.3rem;
          min-width: 250px;
          margin-bottom: 0.75rem;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
