const app = new Vue({
  el: '#app',
  data:{
    title: 'hello world'
  },
  methods: {
    addTodo(){
      console.log('form submitted');
    }
  }
});