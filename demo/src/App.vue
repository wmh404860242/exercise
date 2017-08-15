<template>
  <div id="app">
    <tabbar style="position: fixed;z-index: 999">
      <tabbar-item link="/Home">
        <img src="../static/icon-home.png" slot="icon">
        <img src="../static/icon-home-active.png" slot="icon-active">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected link="/shop">
        <img src="../static/icon-shop.png" slot="icon">
        <img src="../static/icon-shop-active.png" slot="icon-active">
        <span slot="label">商品</span>
      </tabbar-item>
      <tabbar-item  v-bind:show-dot=showdot v-on:on-item-click="onItemClick" link="/mine">
        <img src="../static/icon-mine-active.png" slot="icon-active">
        <img src="../static/icon-mine.png" slot="icon">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    data(){
          return {
            showdot:true
          }
      },
    components: {
      Tabbar,
      TabbarItem
    },
    methods:{
      onItemClick(){
          this.showdot=false
      }
    }
  }
</script>

<style>
  html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,a,abbr,address,big,em,img,q,small,strike,strong,
  sub,sup,tt,var,i,dl,dt,dd,ol,ul,li,form,fieldset,label,table,caption,tbody,thead,tfoot,tr,th,td,article,
  aside,canvas,details,figure,figcaption,header,footer,hgroup,menu,nav,output,section,time,mark,audio,
  video,input,select,button{margin:0;padding:0;border:0;font-family:'微软雅黑',Arial;font-size:16px;}
  /*去除默认样式*/
  ul,ol,li{list-style:none;}
  /*表格边框合并，边框距零*/
  table{border-collapse:collapse;border-spacing:0;}
  /*继承父元素的字体系列样式*/
  input,select,textarea,button{font-family:inherit;}
  /*a链接*/
  a{text-decoration:none;color:#000;}
  a:hover{text-decoration:none;}
  /*去除点击高亮效果*/
  a,button,input,select,img,label{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;outline:medium none;}
  input::-moz-focus-inner{border:none;padding:0;}
  select, input{vertical-align:middle;}
  /*去掉苹果的默认UI来渲染按钮*/
  input[type="submit"],input[type="reset"],input[type="button"],button,select{-webkit-appearance:none;}
  /*placeholder文本颜色*/
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
    color:#ccc;
  }
  input:-moz-placeholder,textarea:-moz-placeholder{
    color:#ccc;
  }
  /*html5标签*/
  header,footer,section,article,aside,nav,figure{display:block;}
  /*长英文字母 数字 换行*/
  p{word-break:break-all;word-wrap:break-word;}
  /*去除默认样式*/
  h1,h2,h3,h4,h5,h6,strong,i,em,address, caption, cite, code, dfn, th, var{font-weight:normal;font-style:normal;}
  fieldset, img{border:none;display:block;}
  /*去除长按a链接弹框*/
  html,body{-webkit-touch-callout:none;}
  span{font-size: 14px}
  body{background: #f2f2f2}
  ::-webkit-scrollbar{width:0;height:0}
  html,body{overflow:hidden;overflow-y:auto;}
</style>
