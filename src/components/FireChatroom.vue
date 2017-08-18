<template>
  <div class=" d-flex justify-content-between align-self-start">
    <div class="w-75 container mt-5 border border-primary p-4 rounded mr-2" style="">
      <div class="input-group mb-5">
        <input type="text" class="form-control" v-model="tempMessage">
        <span class="input-group-btn">
          <button class="btn btn-primary" @click="submitMessage()" type="button">送出</button>
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
    <div class="w-25 container mt-5 border border-secondary rounded ml-2 p-4" style="">
        <form class="">
          <div class="form-group">
            <label for="name">暱稱</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="輸入暱稱" v-model="tempUsername">
            <small id="nameHelp" class="form-text text-muted">請輸入暱稱大家才知道是誰發言喔> <</small>
          </div>
          <button type="submit" class="btn btn-primary btn-sm" @click="updataUsername()">送出</button>
        </form>            
    </div>
  </div>
</template>

<script>
// 產生關連
var chatroomRef = firebase.database().ref('/chatroom/')


export default {
  name: 'hello',
  data () {
    return {
      tempUsername: '',
      tempMessage: '',
      username: '',
      message: '',
      messages: [
        // {
        //   username: 'Zero',
        //   message: 'Hello 你好'
        // },
        // {
        //   username: 'Casper',
        //   message: '你誰啊'
        // }
      ]
    }
  },
  methods:{
    updataUsername(){
      let vm =this;
      vm.username = vm.tempUsername;
      console.log(vm.username, vm.tempUsername);
    },
    submitMessage() {
      let vm = this;
      // vm.messages.push({
      //   username: vm.username,
      //   message: vm.tempMessage
      // })
      // vm.tempMessage = ''
      // 避免亂數產生，使用時間命名
      let  timestamp = Math.floor(Date.now() / 1000);
      // console.log({
      //   username: vm.username,
      //   message: vm.tempMessage
      // });
      chatroomRef.child(timestamp).set({
        timestamp: timestamp,
        username: vm.username,
        message: vm.tempMessage
      });
      vm.tempMessage= '';
    }
  },
  mounted(){
    let vm =this;
    let messages = [];
    // 排序操作
    chatroomRef.orderByChild('timestamp').on('value', function(snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function(chatVal) {
        console.log(chatVal.val());
        messages.unshift(chatVal.val());
      });
      var val = snapshot.val();
      // 指向回重新排序後的data
      vm.messages = messages;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
