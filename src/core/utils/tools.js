/**
 * @param {*提示内容} text 
 * @param {*成功还是失败} type 
 */
import {
    Notification
} from 'element-ui'
export let toast = (text, type) => {
    if (text && text != '') {
        Notification({
            title: '系统提示',
            message: text || '操作失败 defa',
            dangerouslyUseHTMLString: true,
            duration: 3000,
            background: type ? "#1989fa" : "#f44",
            color: 'white',
            type: type ? 'success' : 'error'
        });
    }
}