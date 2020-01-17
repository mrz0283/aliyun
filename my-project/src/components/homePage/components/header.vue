<template>
  <div class="divClass">
    <div class="divContent">
      <div class="headerLeft">
        <img class="divImg" src="https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png" alt='阿里云' />
        <el-popover class="popverClass" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <el-button slot="reference" class="popverButton">中国站<i class="el-icon-arrow-down"></i></el-button>
        </el-popover>
      </div>
      <el-tabs type="border-card" class="tabsStyle">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
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
    height: 150px;
    background-color: #fff;
    padding-top: 30px;
}
.divContent {
    position: relative;
    height: 40px;
    margin-top: 10px;
    background-color: #42b983;
}
.divImg {
    height: 40px;
    float: left;
}
.headerLeft {
    width: 100%;
    width: 250px;
    float: left;
}
.popverClass {
    top: 0px;
    height: 10px;
    position: absolute;
    float: left;
}
.popverButton {
    height: 23px;
    font-size: 14px;
    line-height: 5px;
    width: 75px;
    padding: 0px;
    text-align: center;
}
.popverButton :hover :before {
    content: '\e658';
}
.tabsStyle {
    float: left;
    position: absolute;
    bottom: 0px;
    height: 70px;
    left: 350px;
}
.el-tabs--border-card > .el-tabs__content {
    padding: 0px;
}
</style>
