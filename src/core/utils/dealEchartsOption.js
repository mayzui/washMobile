export default function (data, config) {
  data = data || []
  const series = config.map(item => ({name: item.name, data: data.map(d => d[item.key])}))

  const seriesAllData = series.reduce((seriesList, item) => seriesList.concat(item.data.reduce((dataList, d) => {
    dataList.push(d)
    return dataList
  }, [])), [])

  return {series, max: Math.max(...seriesAllData)}
}
