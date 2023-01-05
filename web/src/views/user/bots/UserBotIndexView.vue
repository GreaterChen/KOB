<template>
    <ContentField>
        我的Bot
    </ContentField>
</template>

<script>
import ContentField from "../../../components/ContentField.vue"
import $ from 'jquery'
import {useStore} from 'vuex'

export default {
    components: {
        ContentField
    },

    setup() {
        const store = useStore();
        // $.ajax({
        //     url: 'http://localhost:3000/api/user/bot/add/',
        //     type: 'POST',
        //     data: {
        //         title: "Bot标题",
        //         description: "Bot描述",
        //         content: "Bot代码",
        //     },
        //     headers: {
        //         Authorization: "Bearer " + store.state.user.token,
        //     },
        //     success: (res) => {
        //         console.log(res);
        //     },
        //     error: (res) => {
        //         console.log(res);
        //     }
        // })


        // $.ajax({
        //     url: "http://localhost:3000/api/user/bot/remove/",
        //     type: "POST",
        //     data: {
        //         bot_id : 3,
        //     },
        //     headers: {
        //         "Authorization": "Bearer " + store.state.user.token,
        //     },
        //     success(resp) {
        //         console.log(resp);
        //     },
        //     error(res) {
        //         console.log(res);
        //     },
        // })

        // $.ajax({
        //     url: "http://localhost:3000/api/user/bot/update/",
        //     type: "POST",
        //     data: {
        //         bot_id: 4,
        //         title:"new bot",
        //         description:"new bot description",
        //         content:"new bot content",
        //     },
        //     headers: {
        //         "Authorization": "Bearer " + store.state.user.token,
        //     },
        //     success(resp) {
        //         console.log(resp);
        //     },
        //     error(res) {
        //         console.log(res);
        //     },
        // })

        $.ajax({
            url: "http://localhost:3000/api/user/bot/getlist/",
            type: "GET",
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp) {
                console.log(resp);
            },
            error(res) {
                console.log(res);
            },
        })


    }
}
</script>

<style scoped>

</style>  