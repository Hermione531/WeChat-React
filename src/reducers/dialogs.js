import * as reducerType from '../utils/reducerType';
import avatar_url from '../asserts/img/data/me.jpg';

const defaultValue = [
    {
        id: "id_1",
        name: "张三1",
        data: [
            ["0", "你好", "2018-1-1"]           //0代表联系人对话
        ]
    },
    {
        id: "id_2",
        name: "张三2",
        data: [
            ["0", "你好", "2018-1-2"]
        ]
    },
    {
        id: "id_3",
        name: "张三3",
        data: [
            ["0", "你好", "2018-1-3"]
        ]
    },
    {
        id: "id_4",
        name: "张三4",
        data: [
            ["0", "你好", "2018-1-4"]
        ]
    },
    {
        id: "id_5",
        name: "张三5",
        data: [
            ["0", "你好", "2018-1-5"]
        ]
    }
    
];

const dialogs = (state = defaultValue, action) => {
    switch(action.type) {
        case reducerType.GET_DIALOGS:
            return action.payload;
        case reducerType.UPDATE_DIALOGS:
            const result = [];
            state.forEach(({id, img, name, data}) => {
                if(action.payload.id === id ) {
                    data.push([1, action.payload.word, action.payload.time]);
                    result.unshift({id, img, name, data});
                } else {
                    result.push({id, img, name, data});
                }
                return result;
            });
        default: return state;
    }
}

export default dialogs;