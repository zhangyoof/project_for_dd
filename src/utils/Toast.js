/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/10/9
 * Time: 17:10
 * Desc: 全局toast服务
 *       使用时 直接调用showToast('登录成功');
 */
import Toast, {ToastOptions} from 'react-native-root-toast';

export function showToast(message: string, type: ('danger' | 'success' | 'warning'), options: ToastOptions): void {

    let typeOptions = {};
    switch (type) {
        case 'danger': {
            typeOptions = {textColor: COLOR.primary_red, backgroundColor: COLOR.red_light};
            break;
        }
        case 'success': {
            typeOptions = {textColor: COLOR.primary_green, backgroundColor: COLOR.green_light};
            break;
        }
        case 'warning': {
            typeOptions = {textColor: COLOR.primary_orange, backgroundColor: COLOR.yellow_light};
            break;
        }
        default: {
            typeOptions = {textColor: COLOR.query_color, backgroundColor: COLOR.font_black_6};
            break;
        }
    }

    Toast.show(
        message,
        {
            delay: 0,
            duration: 3000,
            position: 0,
            shadow: false,
            animation: true,
            hideOnPress: true,
            textStyle: {
                fontSize: 15,
            },
            ...typeOptions,
            ...options,
        },
    );
}

export default showToast;
