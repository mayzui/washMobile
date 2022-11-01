<template>
    <section class="page_home">
        <header class="flex_between">
            <div class="logo">
                <img src="./../assets/logo.png" alt="">
            </div>
            <div class="navs flex_between">
                <cubtn v-for="(item,index) in nav" :key="index" :type="$route.path == item.path ? 'success' : 'info'" @tap="$router.push(item.path)">
                    {{ item.title }}
                </cubtn>
            </div>
            <div class="dropout" @click="dropout">
                <img src="./../assets/image/dropout.png" alt="">
            </div>
        </header>
        <main>
            <el-scrollbar class="info_scroll content" ref="scroll">
                <div class="children">
                    <router-view></router-view>
                </div>
            </el-scrollbar>
        </main>
    </section>
</template>
<script>
    import {
        handleAuthToken
    } from '@control/control_site'
    export default {
        data() {
            return {
                nav: [{
                    title: '首页',
                    path: '/info/home'
                }, {
                    title: '账号管理',
                    path: '/info/account'
                }, {
                    title: '日志',
                    path: '/info/log'
                }]
            };
        },
        methods: {
            // 退出
            dropout() {
                this.$confirm('你将要退出登录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    handleAuthToken.del()
                    this.$router.push('/')
                }).catch(() => {});
            }
        },
        created() {}
    };
</script>
<style scoped lang='scss'>
    .page_home {
        width: 100vw;
        height: 100vh;

        header {
            width: 100vw;
            height: 50px;
            background: linear-gradient(to bottom, rgb(246, 246, 246) 0%, rgb(192, 192, 192) 100%);

            >div {
                height: 50px;
            }

            .logo {
                width: 36px;
                height: 38px;

                >img {
                    width: 36px;
                    height: 38px;
                }

                margin-left: 50px;
            }

            .navs {
                width: 400px;

                .flex_center {
                    width: 100px;
                    height: 36px;
                    font-size: 15px;
                    font-weight: bold;
                    background-size: 100px 36px;
                    cursor: pointer;
                }
            }

            .dropout {
                width: 22px;
                height: 22px;

                >img {
                    width: 22px;
                    height: 22px;
                }

                margin-right: 50px;
            }
        }

        main {
            width: 100vw;
            height: calc(100vh - 50px);
            overflow: hidden;

            .content {
                width: 100%;
                height: 100%;

                .children {
                    width: calc(100% - 40px);
                    margin: 30px 20px;
                }
            }
        }
    }
</style>