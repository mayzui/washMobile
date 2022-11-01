/**
 * author: 林欣
 * describe: 业务模块导入
 */
import lxModuleIn from '@utils/lxModuleIn'

const apiFiles = require.context('../_api/', true, /\S*\.js/)
export const APT_LIST = lxModuleIn(apiFiles, 'object', 'letterHead')

const routerFiles = require.context('../_router/', true, /\S*\.js/)
export const ROUTES_LIST = lxModuleIn(routerFiles, 'array', 'letterHead')

const storeFiles = require.context('../_store/', true, /\S*\.js/)
export const STORE_MODELES = lxModuleIn(storeFiles, 'object', 'letterHead')
