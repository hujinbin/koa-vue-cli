<template>
  <div class="box">
        <div class="pad-top">
            <h2> 您访问的页面出去玩了! </h2>
            <h5> 您访问的页面不存在，请点击页底的链接返回</h5>
            <span id="error-link">404</span>
            <h2>! 访问出错 !</h2>
        </div>
        <a class="goBakk" href="/">返回首页</a>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
        .box {
            background-color: #b3c0da;
            color: #fff;
            height: 100%;
            text-align: center;
        }

        .pad-top {
            padding-top: 60px;
        }

        .text-center {
            text-align: center;
        }

        #error-link {
            font-size: 150px;
            padding: 10px;
        }

        .goBakk {
            margin-top: 70px;
            color: #fff;
            background-color: #2db7f5;
            border-color: #2db7f5;
            display: inline-block;
            text-align: center;
            line-height: 1.5;
            padding: 8px 30px;
            font-size: 16px;
            border-radius: 6px;
            text-decoration: none;
        }
</style>