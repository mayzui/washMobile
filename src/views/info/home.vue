<template>
    <div style="width:80%;">
        <div class="flex_y_center" style="margin-bottom: 20px">
            生成代理商链接
            <cubtn @tap="dialogVisible = true" type="success" style="margin-left: 10px">点击打开</cubtn>
        </div>
        <div id="report"></div>
        <div class="flex_y_center" style="margin-bottom: 20px">
            状态：
            <el-select :clearable="true" @clear="clearStatus" @visible-change="blurStatus" v-model="form.status" placeholder="请选择" size="mini" style="margin-right: 10px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            到期时间：
            <el-date-picker v-model="date" type="daterange" @change="changeDate" align="right" unlink-panels value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" size="mini" :picker-options="pickerOptions">
            </el-date-picker>
        </div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="max-width:1200px;">
            <el-table-column width="50" label="序号" type="index" align="center">
            </el-table-column>
            <el-table-column label="创建时间" width="120" prop="createtime" align="center">
            </el-table-column>
            <el-table-column prop="name" label="店铺名称" width="120" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="sort" label="店铺编号" width="120" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="ascription_city" label="所在城市" width="120" align="center">
            </el-table-column>
            <el-table-column label="地址" show-overflow-tooltip align="center">
                <template slot-scope="scope">
                    <div>
                        {{ scope.row.ascription_province }}
                        {{ scope.row.ascription_city }}
                        {{ scope.row.ascription_area }}
                        {{ scope.row.ascription_address }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="full_name" label="店主姓名" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="phone" min-width="120" label="电话" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column :formatter="getStatus" label="状态" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="到期时间" align="center" show-overflow-tooltip>
                <template slot-scope="scope">
                    <div>
                        <span v-if="scope.row.expire_time == 0">长期使用</span>
                        <span v-else>{{ scope.row.expire_time }}</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="代理端链接" :visible.sync="dialogVisible" width="30%" center>
            <div class="agentlink">
                <div>代理端链接:</div>
                <div class="right-link">
                    {{url}}
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import echarts from "echarts";
    let canvas_time = null
    export default {
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                            text: "最近一周",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit("pick", [start, end]);
                            },
                        },
                        {
                            text: "最近一个月",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                picker.$emit("pick", [start, end]);
                            },
                        },
                        {
                            text: "最近三个月",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                picker.$emit("pick", [start, end]);
                            },
                        },
                    ],
                },
                date: [],
                url: '',
                options: [{
                        value: "0",
                        label: "正常",
                    },
                    {
                        value: "1",
                        label: "试用",
                    },
                    {
                        value: "2",
                        label: "失效",
                    },
                ],
                form: {
                    status: "",
                    startTime: "",
                    endTime: "",
                },
                tableData: [],
                xAxis: [],
                legend: [],
                formal: [],
                trial: [],
                failure: [],
                screenWidth: document.body.clientWidth,
                dialogVisible: false
            };
        },
        mounted() {
            this.getData();
            const that = this
            window.addEventListener("resize", function() {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth;
                })();
            });
            this.getUrl()
        },
        methods: {
            changeDate(e) {
                if (e) {
                    this.form.startTime = e[0];
                    this.form.endTime = e[1];
                } else {
                    this.form.startTime = "";
                    this.form.endTime = "";
                }
                this.getData();
            },
            getStatus(row) {
                return row.status == 0 ? "正常" : row.status == 1 ? "试用" : "失效";
            },
            blurStatus(e) {
                if (!e) {
                    this.getData();
                }
            },
            getUrl() {
                this.$api.info.agenturl().then(data => {
                    if (data.code == 200) {
                        this.url = data.data
                    }
                })
            },
            clearStatus() {
                this.getData();
            },
            getData() {
                this.$api.info.homechart(this.form).then((data) => {
                    if (data.code == 200) {
                        //start 修改时间格式
                        data.data.rows.map((item) => {
                            if (item.createtime) {
                                let time = new Date(item.createtime * 1000);
                                let year = time.getFullYear();
                                let month = time.getMonth() + 1;
                                let day = time.getDate();
                                if (month < 10) {
                                    month = "0" + month;
                                }
                                if (day < 10) {
                                    day = "0" + day;
                                }
                                item.createtime = year + "-" + month + "-" + day;
                            }
                            if (item.expire_time != 0) {
                                let time = new Date(item.expire_time * 1000);
                                let year = time.getFullYear();
                                let month = time.getMonth() + 1;
                                let day = time.getDate();
                                if (month < 10) {
                                    month = "0" + month;
                                }
                                if (day < 10) {
                                    day = "0" + day;
                                }
                                item.expire_time = year + "-" + month + "-" + day;
                            }
                        });
                        //end 修改时间格式

                        let legend = [] //所有类型标签
                        let xAxis = []  //所有时间段
                        let formal = []//正式 数量数组
                        let trial = []//试用 数量数组
                        let failure = []//失效 数量数组
                        this.tableData = data.data.rows;
                        //获取所有类型 正式 失效 试用等
                        data.data.line.map(item => {
                            legend.push(item.name)
                        })
                        //获取所有时间段
                        data.data.line[0].rows.map(item => {
                            xAxis.push(item.time)
                        })
                        //获取每个时间段的数量
                        data.data.line.map(item => {
                            if (item.name == '正式') {
                                item.rows.map(item => {
                                    formal.push(item.counts)
                                })
                            }
                            if (item.name == '试用') {
                                item.rows.map(item => {
                                    trial.push(item.counts)
                                })
                            }
                            if (item.name == '失效') {
                                item.rows.map(item => {
                                    failure.push(item.counts)
                                })
                            }
                        })
                        this.legend = legend
                        this.xAxis = xAxis
                        this.formal = formal
                        this.trial = trial
                        this.failure = failure
                        this.setreport()
                    }
                });
            },
            setreport() {
                const report = document.getElementById("report");
                let myChart = echarts.init(report);
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                            label: {
                                backgroundColor: "#6a7985",
                            },
                        },
                    },
                    legend: {
                        x: "100px",
                        y: "0px",
                        itemHeight: 16,
                        itemWidth: 16,
                        icon: "circle",
                        data: this.legend,
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                        },
                    },
                    grid: {
                        left: "40px",
                        right: "40px",
                        bottom: "20px",
                        containLabel: true,
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: false,
                        data: this.xAxis,
                        name: "日",
                    }, ],
                    yAxis: [{
                        type: "value",
                        name: "套",
                    }, ],
                    series: [{
                            name: "正式",
                            smooth: true,
                            type: "line",
                            stack: "总量",
                            areaStyle: {},
                            data: this.formal,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: "#3ED2B5",
                                        },
                                        {
                                            offset: 0.2,
                                            color: "rgba(62,210,181,.6)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(62,210,181,.2)",
                                        },
                                    ]),
                                },
                            },
                        },
                        {
                            name: "试用",
                            smooth: true,
                            type: "line",
                            stack: "总量",
                            areaStyle: {},
                            data: this.trial,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: "#2FADE4",
                                        },
                                        {
                                            offset: 0.2,
                                            color: "rgba(47,173,228,.6)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(47,173,228,.2)",
                                        },
                                    ]),
                                },
                            },
                        },
                        {
                            name: "失效",
                            smooth: true,
                            type: "line",
                            stack: "总量",
                            areaStyle: {},
                            data: this.failure,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: "#FF7878",
                                        },
                                        {
                                            offset: 0.2,
                                            color: "rgba(255,120,120,.6)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(255,120,120,.2)",
                                        },
                                    ]),
                                },
                            },
                        },
                    ],
                });
            },
        },
        watch: {
            screenWidth: {
                immediate: true,
                handler(newValue) {
                    clearTimeout(canvas_time)
                    canvas_time = setTimeout(() => {
                        echarts.init(document.getElementById('report')).dispose()
                        this.setreport()
                    }, 500);
                }
            }
        }
    };
</script>
<style scoped lang='scss'>
    #report {
        width: 100%;
        height: 400px;
    }

    .agentlink {
        display: flex;
        align-items: center;

        .right-link {
            border: 1px solid #d4d1d193;
            padding: 10px 10px;
            margin-left: 15px;
            border-radius: 4px;
        }
    }
</style>