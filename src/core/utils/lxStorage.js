/**
 * author: 林欣
 * describe: web storage存储封装
 */

const supportStorage = typeof Storage !== 'undefined'

const setStorageValue = Symbol('setStorageValue')
const getStorageValue = Symbol('getStorageValue')
const delStorageValue = Symbol('delStorageValue')

class LxStorage {
  constructor (mode) {
    const storage = window[mode || 'sessionStorage']
    this.set = LxStorage[setStorageValue](storage)
    this.get = LxStorage[getStorageValue](storage)
    this.del = LxStorage[delStorageValue](storage)
  }

  static[setStorageValue] = storage => (key, value) => {
    if (!supportStorage) return
    value = typeof value === 'string' ? value : JSON.stringify(value)
    return storage.setItem(key, value)
  }

  static[getStorageValue] = storage => key => {
    if (!supportStorage) return
    var value = storage.getItem(key)
    try {
      return JSON.parse(value)
    } catch (error) {
      if (!value || value === 'undefined') return null
      return value
    }
  }

  static[delStorageValue] = storage => key => {
    if (!supportStorage) return
    return storage.removeItem(key)
  }
}

export const locals = new LxStorage('localStorage')
export const sessions = new LxStorage('sessionStorage')
