<template>
  <div id="app">
    <!-- {{message}} -->
    <!-- <element-view></element-view> -->
    <!-- <emp-view></emp-view> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import ElementView from './views/ElementView.vue'
// import EmpView from './views/oort/EmpView.vue'
export default {
  components: {  },
  data(){
    return {
      "message":"hello world"
    }
  }
}
</script>

<style>

</style>
