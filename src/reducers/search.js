import * as reducerType from '../utils/reducerType';
import avatar_url from '../asserts/img/me.jpg';

const defaultValue = {
    avatar_url,
    name: null,
    id: null,
    data: {
        "id_1": {
            img: "../asserts/img/kate.jpg;"
            name: "张三1",
            dialog: {
                "2018-1-1": [0, "你好"]           //0代表联系人对话
            }
        },
        "id_2": {
            img: "../asserts/img/kate.jpg;"
            name: "张三2",
            dialog: {
                "2018-1-2": [0, "你好"]
            }
        },
        "id_3": {
            img: "../asserts/img/kate.jpg;"
            name: "张三3",
            dialog: {
                "2018-1-3": [0, "你好"]
            }
        },
        "id_4": {
            img: "../asserts/img/kate.jpg;"
            name: "张三4",
            dialog: {
                "2018-1-4": [0, "你好"]
            }
        },
        "id_5": {
            img: "../asserts/img/kate.jpg;"
            name: "张三5",
            dialog: {
                "2018-1-5": [0, "你好"]
            }
        }
    }
};

