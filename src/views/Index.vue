<template>
  <form method="GET">
    <input v-model.trim="movieLink" type="text" size="60" placeholder="Youtubeリンク">
    <button type="button" @click="submitLink">決定</button>
    <p>{{status}}</p>
  </form>
</template>

<script>
  import io from 'socket.io-client'

  export default {
    data() {
      return {
        movieLink: '',
        status: '',
        statusFlag: false,
        socket : io(process.env.VUE_APP_SOCKET_SERVER),
        roomId: ''
      }
    },
    methods: {
      submitLink() {
        //if (this.statusFlag) return;

        this.statusFlag = true;
        //this.status = this.movieLink + ' - 読み込み中...'

        this.socket.emit('send message', {roomId: this.roomId, message: this.movieLink} )
      }
    },
    mounted() {
      
      this.socket.emit('create', {url: 'https://sss', name: 'ssssA'})
      this.socket.on('receive', (data) => {
        console.log(data)
        this.status = data
      });
      this.socket.on('created', (data) => {
        console.log(data)
        this.roomId = data
      });
      this.socket.on('joinned', (data) => {
        console.log(data)
      });
    }
  }
</script>