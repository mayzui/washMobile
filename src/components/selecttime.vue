<template>
    <div class="timezjs">
        <el-date-picker style="width:230px;" v-model="sertime" :picker-options="pickerOptions" type="daterange" :range-separator="timeisdatas()" start-placeholder="开始日期" end-placeholder="结束日期" :disabled="disabled" size="small">
        </el-date-picker>
    </div>
</template>
<script>
    export default {
        name: 'selecttime',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            pickerOptions: {
                type: Object,
                default: {
                    shortcuts: [{
                            text: "最近一周",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit("pick", [start, end]);
                            }
                        },
                        {
                            text: "最近一个月",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                picker.$emit("pick", [start, end]);
                            }
                        },
                        {
                            text: "最近三个月",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                picker.$emit("pick", [start, end]);
                            }
                        }
                    ]
                }
            },
            value: {
                type: [String, Object],
                default: ''
            }
        },
        watch: {
            sertime() {
                let time = {
                    time_min: 0,
                    time_max: 0
                }
                if (this.sertime && this.sertime.length == 2) {
                    if (this.sertime[0]) {
                        time.time_min = new Date(
                            this.sertime[0]
                        ).getTime()
                    }
                    if (this.sertime[1]) {
                        time.time_max = new Date(
                            this.sertime[1]
                        ).getTime()
                    }
                }
                this.$emit('input', time)
            }
        },
        data() {
            return {
                sertime: this.value
            }
        },
        methods: {
            resettime() {
                this.sertime = []
            },
            timeisdatas() {
                return (this.sertime && this.sertime.length == 2) ? '至' : '至今'
            }
        }
    };
</script>
<style lang='scss'>
    .timezjs {

        .el-range-separator {
            width: 20% !important;
        }
    }
</style>