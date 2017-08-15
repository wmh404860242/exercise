<template>
  <div>
    <div class="search" style="position: fixed;z-index:999">
      <search @on-change="getSearch"></search>
    </div>
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;position: fixed;top:40px;z-index:999">
      <tab :line-width=2 style="width: 500px">
        <tab-item selected>全部</tab-item>
        <tab-item>便宜购</tab-item>
        <tab-item>限时购</tab-item>
        <tab-item>经销商专区</tab-item>
        <tab-item>体验专区</tab-item>
      </tab>
    </div>
    <div style="height: 100px"></div>
    <scroller height="-46px" :lockX=true use-pulldown="true" :pulldown-config="{downContent: '下拉刷新', upContent: '释放后更新'}"
              :use-pulldown=true @on-pulldown-loading="pullDown" v-model="status">
      <goods-list :goodsList="List"></goods-list>
      <!--<div>1</div>-->
    </scroller>
  </div>
</template>

<script>
    import GoodsList from 'components/shop/goodsList.vue'
    import { Tab, TabItem, Search, Scroller} from 'vux';
    export default {
        data(){
            return {
              status:{
                pulldownStatus: 'default',
              },
              List:[{name:'红酒1',price:'100',id:'1'},{name:'红酒2',price:'200',id:'2'},{name:'红酒3',price:'300',id:'3'},{name:'红酒4',price:'400',id:'4'}]
            }
        },
        components: {
          Tab,
          TabItem,
          Search,
          Scroller,
          GoodsList,
        },
        methods: {
          getSearch (val) {
            console.log(val)
          },
          pullDown (){
              var pulldown_this=this;
              setTimeout(function () {
                pulldown_this.status.pulldownStatus = 'default';
              },2000)
          }
        }

    }
</script>

<style>
  .search{
    width: 100%;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search input {
    border: 1px solid #ddd;
    border-radius: 2px;
  }
</style>
