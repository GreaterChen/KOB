import $ from 'jquery'

export default {
    state: {
        id: "",
        username: "",
        photo: "",
        token: "",
        is_login: false,
        pulling_info: true,
    },
    getters: {},
    mutations: {    // 异步操作
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.is_login = user.is_login;
        },

        updateToken(state, token) {
            state.token = token;
        },

        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.token = "";
            state.is_login = false;
        },

        updatePullingInfo(state, info) {
            state.pulling_info = info;
        }
    },
    actions: {  // 同步操作
        login(context, data) {
            $.ajax({
                // url: "https://app2799.acapp.acwing.com.cn/api/user/account/token/",
                url: "http://localhost:3000/api/user/account/token/",
                type: "post",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    if(resp.error_message === "success"){
                        localStorage.setItem("jwt_token",resp.token);
                        context.commit("updateToken", resp.token);
                        data.success(resp);
                    }else{
                        data.error(resp);
                    }
                },
                error(resp) {
                    data.error(resp);
                },
            });

        },

        getinfo(context, data) {
            $.ajax({
                // url: "https://app2799.acapp.acwing.com.cn/api/user/account/info/",
                url: "http://localhost:3000/api/user/account/info/",
                type: "get",
                headers: {
                    Authorization: "Bearer " + context.state.token,
                },
                success(resp) { //resp是服务器返回来的Map
                    if (resp.error_message === "success") {
                        context.commit("updateUser", {
                            ...resp,
                            is_login: true,
                        });
                        data.success(resp);
                    } else {
                        data.error(resp);
                    }
                },
                error(resp) {
                    data.error(resp);
                },
            });
        },

        logout(context) {
            localStorage.removeItem("jwt_token");
            context.commit("logout");
        }
    },
    modules: {}
}