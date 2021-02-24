const app = new Vue({
  el: '#app',
  data:{
    title: 'hello world',
    newTodo: ''
  },
  methods: {
    addTodo(){
      console.log('form submitted ' + this.newTodo);
    }
  }
});