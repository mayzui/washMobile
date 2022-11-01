<template>
    <div class="cubtn select" :style="sty[type]" @click="tap">
        <slot>{{type!='error'?'按钮':''}}</slot>
    </div>
</template>
<script>
    export default {
        name: 'cubtn',
        props: {
            type: {
                type: String,
                default: 'info'
            }
        },
        data() {
            return {
                sty: {
                    info: {
                        'background-image': `url(${require('./../assets/image/navbtn.png')})`,
                        color: '#8F8F8F'
                    },
                    success: {
                        'background-image': `url(${require('./../assets/image/navbtns.png')})`,
                        color: 'white'
                    },
                    error: {
                        'background-image': `url(${require('./../assets/image/remove.png')})`,
                        color: 'white'
                    }
                }
            };
        },
        methods: {
            tap() {
                this.$emit('tap')
            }
        },
        created() {}
    };
</script>
<style scoped lang='scss'>
    .cubtn {
        width: 100px;
        height: 36px;
        font-size: 15px;
        font-weight: bold;
        background-size: 100px 36px;
        cursor: pointer;
        text-align: center;
        line-height: 36px;
        float: left;
    }

    .cubtn+.cubtn {
        margin-left: 10px;
    }
</style>