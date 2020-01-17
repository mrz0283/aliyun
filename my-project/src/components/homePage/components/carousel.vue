<template>
  <div class="divClass">
    <div :style="{width:'240px',backgroundColor:'#fff',height:'100%',float:'left'}">
      <div :style="{height:'30px',textAlign:'center',backgroundColor:'#ff6a00',color:'#fff',lineHeight:'30px'}">
        精选爆款
      </div>
      <div :style="{height:'69px'}" v-for="item in 8" :key='item'>
        <div class="carouselLeftDiv">
          <span :style="{height:'17px'}"><span :style="{fontSize:'14px'}">弹性计算</span>
            <i class="el-icon-arrow-right" :style="{height:'16px',top:'1px',position:'relative',marginLeft:'2px'}"></i>
          </span>
          <div :style="{width:'100%'}"><span :style="{fontSize:'13px',color:'#999'}">云服务器ESC</span>
            <el-divider direction="vertical"></el-divider>
            <span :style="{fontSize:'13px',color:'#999'}">轻量应用服务器</span>
          </div>
        </div>
      </div>
      <div :style="{height:'40px',textAlign:'center',color:'#ff6a00',lineHeight:'40px'}">
        查看全部
      </div>
    </div>
    <div :style="{float:'right',width:'940px',height:'100%',position:'relative',dispaly:'block'}">
      <el-carousel trigger="click" :style="{float:'right',width:'940px',height:'320px',position:'relative',dispaly:'block'}" class="carouselStyle">
        <el-carousel-item v-for="item in ['https://img.alicdn.com/tfs/TB1eMOrtxD1gK0jSZFsXXbldVXa-1880-640.jpg','https://img.alicdn.com/tfs/TB1KFs0sKL2gK0jSZFmXXc7iXXa-1880-640.jpg'
                                        ,'https://img.alicdn.com/tfs/TB10iFGsAL0gK0jSZFAXXcA9pXa-1176-402.jpg','https://img.alicdn.com/tfs/TB1y5DRsYj1gK0jSZFuXXcrHpXa-1880-640.jpg']" :key="item">
          <img :src="item" :style="{width:'100%',height:'100%'}" />
        </el-carousel-item>
      </el-carousel>
      <div :style="{width:'680px',height:'285px',backgroundColor:'white',position:'absolute',bottom:'0px'}">
        <div :style=" item !== 3 ? {width:'226px',height:'244px',float:'left',marginTop:'20px',textAlign:'-webkit-center',borderRight:'1px solid #eee'} :  {width:'226px',height:'244px',float:'left',marginTop:'20px',textAlign:'-webkit-center'}" v-for="item in 3" :key="item">
          <div :style="{width:'177px',marginBottom:'20px',marginTop:'24px'}">新人礼遇</div>
          <div :style="{width:'177px',fontSize:'14px',marginBottom:'25px'}">企业级高性能实例低至0.8折入门级实例1C2G89元/年起</div>
          <img :style="{width:'70px',height:'70px'}" src="https://img.alicdn.com/tfs/TB1bFEyrBr0gK0jSZFnXXbRRXXa-134-134.png" />
        </div>
      </div>
      <div :style="{height:'285px',width:'240px',float:'right',backgroundColor:'white',marginTop:'20px'}">
        <div :style="{height:'226px', display: 'table-cell',textAlign: 'center',verticalAlign: 'middle'}">
          <img src="https://img.alicdn.com/tfs/TB1Sv5PV9zqK1RjSZPcXXbTepXa-80-80.png" :style="{height:'40px',width:'40px'}" />
          <p :style="{width:'240px'}">Hi!欢迎来到阿里云</p>
          <el-button :style="{background:'#ff6a00',color:'white'}">登录</el-button>
          <el-button  :style="{background:'white',color:'#ff6a00',border:'1px solid #ff6a00'}">注册</el-button>
        </div>
        <div :style="{width:'240px',height:'58px',bottom:'0px',position:'absolute', lineHeight:'58px',textAlign: 'center',borderTop:'1px solid #eee'}">
          <a :style="{color:'#ff6a00',fontSize:'13px'}">全民云计算</a>
          <el-divider direction="vertical"></el-divider>
          <a :style="{color:'#ff6a00',fontSize:'13px'}">免费试用</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    // 组件名称
    name: "HeaderScript",
    // 组件中数据
    data() {
        return {
            visible: false
        };
    },
    methods: {}
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.divClass {
    height: 624px;
    width: 1200px;
    /* background-color: #f50; */
    margin: 100px auto;
}
.carouselLeftDiv {
    padding: 15px 16px 0;
}
.el-divider--vertical {
    margin: 0;
}
.el-carousel__indicators {
    left: 50px;
}
.divClass >>> .el-carousel__indicators--horizontal {
    left: 160px;
    bottom: 30px;
}
/* .divClass >>> .el-carousel__button:nth-child(1) {
    height: 5px;
    background-color: blue;
} */

.divClass /deep/ .el-carousel__indicator:nth-child(2n) .el-carousel__button{
    height: 5px;
    background-color: #f00;
}

.divClass /deep/ .el-carousel__indicator:nth-child(2n+1) .el-carousel__button{
    height: 5px;
    background-color: #ff0;
}
/* .divClass >>> .el-carousel__button:nth-child(2) {
    height: 5px;
    background-color: red;
} */
</style>
