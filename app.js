const app = new Vue({
  el: '#app',
  data:{
    title: 'hello world',
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo(){
      this.todos.push({
        title: this.newTodo,
        done: false
      });
    }
  }
});