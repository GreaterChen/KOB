<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" :to="{name:'home'}">King of Bots</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <!--如果属性class需要使用表达式，则在class前加':',内部使用单引号，整体用双引号括起来-->
                    <!--‘:’为v-bind:的简写-->
                    <router-link :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link' " :to="{name:'pk_index'}">对战</router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="route_name == 'record_index' ? 'nav-link active' : 'nav-link'" :to="{name:'record_index'}">对局列表</router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="route_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'" :to="{name:'ranklist_index'}">排行榜</router-link>
                </li>
            </ul>

            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        陈立标
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link class="dropdown-item" :to="{name:'UserBot_index'}">我的Bot</router-link>
                            </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">退出</a></li>
                    </ul>
                </li>
            </ul>
 
        </div>
    </div>
</nav>
</template>

<script>
//下面是点击某个项目即可保持高亮
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
    setup() {
        const route = useRoute();   // 获取当前路由信息
        let route_name = computed(() => route.name) // 动态计算

        return {
            route_name
        }
    }
}
</script>

<style scoped>

</style>