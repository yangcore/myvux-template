<template>
  <div id="app">
    <loading v-model="isLoading"/>
  </div>
</template>

<script>
  import { Loading } from 'vux'
  import { mapState } from 'vuex'

  export default {
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    }
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
