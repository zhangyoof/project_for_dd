import PersonalInformation from "./personalInformation/personalInformation"//个人信息
import MyReference from "./myReference/myReference";//版本介绍
import VersionIntroduction from "./versionIntroduction/versionIntroduction";//版本信息列表


 const mineRouter = {
    PersonalInformation: {
        screen: PersonalInformation,
        navigationOptions: {
            header: null
        }
    },
     MyReference: {
         screen: MyReference,
         navigationOptions: {
             header: null
         }
     },
     VersionIntroduction:{
         screen:VersionIntroduction,
         navigationOptions: {
             header: null
         }
     },
};
export default mineRouter

