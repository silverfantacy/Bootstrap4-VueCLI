<template>
  <div class=" d-flex justify-content-between align-self-start">
    <div class="w-75 container mt-5 border border-primary p-4 rounded mr-2" style="">
      <div class="input-group mb-5">
        <input type="text" class="form-control" v-model="message" placeholder="Search for..." aria-label="Search for...">
        <span class="input-group-btn">
          <button class="btn btn-primary" @click="submitMessage()" type="button">Go!</button>
        </span>
      </div>
      <div class="media my-3" v-for="item in messages">
        <img v-if="item.username !== username" class="d-flex align-self-start mr-3" src="http://lorempixel.com/100/100/sports" alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0">{{item.username}}</h5>
          <p>{{item.message}}</p>
        </div>
        <img v-if="item.username == username" class="d-flex ml-3" src="http://lorempixel.com/100/100/sports" alt="Generic placeholder image">
      </div>
      <!-- <div class="media">
        <div class="media-body">
          <h5 class="mt-0 mb-1">Media object</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
        <img class="d-flex ml-3" src="http://lorempixel.com/100/100/sports" alt="Generic placeholder image">
      </div>         -->
    </div>
    <div class="w-25 container mt-5 border border-secondary rounded ml-2" style="">
        <form>
          <div class="form-group">
            <label for="name">暱稱</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="輸入暱稱">
            <small id="nameHelp" class="form-text text-muted">請輸入暱稱大家才知道是誰發言喔> <</small>
          </div>
          <button type="submit" class="btn btn-primary btn-sm">送出</button>
        </form>            
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: 'Zero',
      message:  '',
      messages: [
        {
          username: 'Zero',
          message: 'Hello 你好'
        },
        {
          username: 'Casper',
          message: '你誰啊'
        }
      ]
    }
  },
  methods:{
    submitMessage() {
      let vm = this
      vm.messages.unshift({
        username: vm.username,
        message: vm.message
      })
      vm.message = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
