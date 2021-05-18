import newFriend from '../../static/images/newfriend.jpg';
import robotAvatar from '../../static/images/robotAvatar.jpg';
import selfAvatar from '../../static/images/userAvatar.jpg';
const Users = {
    id: 1,
    name: 'nico',
    avatar: selfAvatar,
    area: '成都', //地区
    sex: 1, //性别 1为男，0为女
    wxid: 'wx-' + new Date().getTime(), //微信号
};
const now = new Date();
const friendlist = [];
for (let i = 0; i < 30; i++) {
    let cName = '李四';
    friendlist.push({
        id: i,
        wxid: 'wx-' + new Date().getTime(), //微信号
        initial: i == 0 ? '新的朋友' : '王二', //姓名首字母
        avatar: i == 0 ? newFriend :robotAvatar, //头像
        signature: "", //个性签名
        nickname: cName, //昵称
        sex: 0, //性别 1为男，0为女
        remark: i == 0 ? '新的朋友' : cName, //备注
        area: '上海', //地区
    });
}
const msgList = [{
    id: 1,
    user: {
        id:friendlist.length,
        name: "聊天机器人",
        avatar:robotAvatar,
        area: '北京', //地区
        sex: 1, //性别 1为男，0为女
        wxid: "wx-lpszswxjzlhzaoe", //微信号
        nickname: "聊天机器人", //昵称
        initial:"R",
        remark:"聊天机器人"
    },
    messages: [{
        content: "按回车可以发送信息，还可以给我发送表情哟",
        date: now
    }],
    index: 1 // 当前在聊天列表中的位置,从1开始
}];
friendlist.push(msgList[0].user)
localStorage.setItem('friend-list',JSON.stringify(friendlist))
export {
    Users,
    friendlist,
    msgList
};
