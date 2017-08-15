<template>
  <div class="goods_list">
    <router-link :to="{name:'GoodsDetails',params: { goodsId: goodsId }}">
      <div class="goods" v-for="item in goodsList" @click="getGoodsId(item.id)">
        <p>{{item.name}}</p>
        <p>价格：{{item.price}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
      data () {
            return {
              goodsId: '',
            }
        },
      props:{goodsList:Array},
      methods: {
        getGoodsId (x){
          this.goodsId = x;
        }
      },
    }
</script>

<style scoped>
.goods {
  width: 48%;
  margin: 10px 1%;
  background: #fff;
  display: inline-block;
  height: 200px;
}
</style>
