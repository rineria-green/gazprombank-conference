export const SERVER = {
    URL: "http://localhost:8000",
    WS: 'ws://localhost:2346'
};

export const API = {
    SESSION: SERVER.URL + "/api/session",
    CONFERENCE: SERVER.URL + "/api/conference",
    CONFERENCE_POLL: SERVER.URL + "/api/conference/poll",
    USER: SERVER.URL + "/api/user",
    MESSAGE: (id)=> {return SERVER.URL+"/api/message/"+id},
    CHAT_MESSAGE: (id) => {return SERVER.URL + "/api/chat/" + id + "/message"},
    MESSAGE_LIKE: (id) => {return SERVER.URL + "/api/message/" + id + "/like"},
    POLL_ANSWER: (id) => {return SERVER.URL + "/api/poll/" + id + "/answer"},
    USER_CODE: (id) => {return SERVER.URL + "/api/user/" + id + "/code"}
};


export const AXIOS_CONFIG = {withCredentials: true};

export const ROLE = {
    ADMIN: "ROLE_ADMIN",
    USER: "ROLE_USER"
}


