/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/19
 * Time: 11:29
 * Desc: 本地储存服务
 */

import AsyncStorage from '@react-native-community/async-storage'

import STORAGE from './Constants'

export function get<T>(key: STORAGE): Promise<T> {
    return AsyncStorage.getItem(key).then(data => {
        return data ? JSON.parse(data) : data
    })
}

export function set(key: STORAGE, value: any): Promise<void> {
    return AsyncStorage.setItem(key, JSON.stringify(value))
}

export function remove(key: STORAGE): Promise<void> {
    return AsyncStorage.removeItem(key)
}

export function clear(): Promise<void> {
    return AsyncStorage.clear()
}

export default {
    get,
    set,
    remove,
    clear,
}
