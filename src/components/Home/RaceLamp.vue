<template>
  <div class="thnu_RaceLamp">
     <div class="RaceLamp">
           <div class="row">
                <marquee behavior="scroll">{{info}}</marquee>
           </div>
     </div>
  </div>
</template>
<script>
export default {
  data(){
     return{
         info:"9月29日由于网站男作者无聊整容停止维护,造成麻烦,望同学们理解和见谅哈!",
         intervalId:null,
     }  
  },
}
</script>
<style scoped>
.thnu_RaceLamp{
    width: 100%;
    height: 50px;
    position: relative;
    background: #fff;
}
.RaceLamp{
  position: absolute;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color:#fff;
  z-index:999;
  line-height: 50px;
  background: #000;
  opacity: .5;
}
.row{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  /* background-color: rebeccapurple; */
}
</style>



