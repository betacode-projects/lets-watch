<template>
  <div id="main" class="container">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>

</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
