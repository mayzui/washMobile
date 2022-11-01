/**
 * author: 林欣
 * describe: 快速缓存封装，主要用户token及用户信息的全局信息缓存
 */

import {sessions, locals} from '@utils/lxStorage'

const setCacheValue = Symbol('setCacheValue')
const getCacheValue = Symbol('getCacheValue')
const delCacheValue = Symbol('delCacheValue')

class LxCache {
  constructor ({mode, field}) {
    this.field = field
    this.mode = mode
    this.set = LxCache[setCacheValue]
    this.get = LxCache[getCacheValue]
    this.del = LxCache[delCacheValue]
    this.storage = this.mode === 'locals' ? locals : sessions
  }

  static[setCacheValue] (val) {
    return this.storage.set(this.field, val)
  }

  static[getCacheValue] () {
    return this.storage.get(this.field)
  }

  static[delCacheValue] () {
    return this.storage.del(this.field)
  }

}

export default LxCache
