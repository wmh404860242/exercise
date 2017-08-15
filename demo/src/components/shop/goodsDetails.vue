<template>
    <div>
      <div>
        <router-link to="/shop"><a>返回</a></router-link>
        <span>商品详情</span>
      </div>
      <div>
        商品ID：{{goodsId}}
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodsId:''
            }
        },
        methods: {
            getGoodsId (){
                this.goodsId = this.$route.params.goodsId
            }
        },
        created (){
          this.getGoodsId()
        },
        components: {}
    }
</script>

<style scoped>
div{background: #fff}
</style>
