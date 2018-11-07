import * as reducerType from '../utils/reducerType';
import avatar_url from '../asserts/img/data/me.jpg';

//0代表联系人对话
const defaultValue = [
    {
        id: "id_0",
        name: "张三",
        data: [
            ["0", "你好，我是张三", "2018-11-7 18:30:22"] ,
            ["1", "你好，我知道你是张三", "2018-11-7 18:31:23"]
        ]
    },
    {
        id: "id_1",
        name: "张三1",
        data: [
            ["0", "你好，我是张三1", "2018-11-6 18:30:21"] ,
            ["1", "你好，我知道你是张三1", "2018-11-6 18:31"]
        ]
    },
    {
        id: "id_2",
        name: "张三2",
        data: [
            ["0", "你好，我是我是张三2", "2018-11-5 18:30"]
        ]
    },
    {
        id: "id_3",
        name: "张三3",
        data: [
            ["0", "你好，我是张三3", "2018-11-3 18:30"]
        ]
    },
    {
        id: "id_4",
        name: "张三4",
        data: [
            ["0", "你好，我是张三4", "2018-11-4 18:30"]
        ]
    },
    {
        id: "id_5",
        name: "张三5",
        data: [
            ["0", "你好，我是张三5", "2018-11-5 18:30"]
        ]
    },
    {
        id: "id_6",
        name: "李四1",
        data: [
            ["0", "你好，我是李四1", "2018-11-1 18:30"] ,
            ["1", "你好，我知道你是李四1", "2018-11-1 18:31:31"]
        ]
    },
    {
        id: "id_7",
        name: "李四2",
        data: [
            ["0", "你好，我是我是李四2", "2018-1-2 18:30:23"]
        ]
    },
    {
        id: "id_8",
        name: "李四3",
        data: [
            ["0", "你好，我是李四3", "2018-1-3 18:30"]
        ]
    },
    {
        id: "id_9",
        name: "李四4",
        data: [
            ["0", "你好，我是李四4", "2018-1-4 18:30"]
        ]
    },
    {
        id: "id_10",
        name: "李四5",
        data: [
            ["0", "你好，我是李四5", "2018-1-5 18:30"]
        ]
    }

];

const dialogs = (state = defaultValue, action) => {
    switch(action.type) {
        case reducerType.GET_DIALOGS:
            return action.payload;
        case reducerType.UPDATE_DIALOGS:
            let result = [];
            state.forEach(({id, name, data}) => {
                if(action.payload.id === id ) {
                    data.push(["1", action.payload.message, action.payload.time]);
                    result.unshift({id, name, data});
                } else {
                    result.push({id, name, data});
                }
                return result;
            });
        case reducerType.SEARCH_CONTACTS:
           if(action.payload) {
                let contacts = [];
                state.map(({id, name, data}) => {
                    if(name.indexOf(action.payload) !== -1) {
                        contacts.push({id, name, data});
                    }
                });
                return contacts;
           } else {
                return defaultValue;
           }
        case reducerType.SEND_MESSAGE:
            let messages = [];
            state.forEach(({id, name, data}) => {
                if(id == action.payload.id) {
                    data.push(["1", action.payload.message, action.payload.time]);
                    messages.unshift({id, name, data})
                } else {
                    messages.push({id, name, data});
                }
            });
            return messages;
        default: return state;
    }
}

export default dialogs;