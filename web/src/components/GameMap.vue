<template>
    <div ref="parent" class = "gamemap">
        <canvas ref="canvas" tabindex="0">
        </canvas>
    </div>
</template>

<script>
import { GameMap } from '@/assets/scripts/GameMap';
import {ref,onMounted} from 'vue'   // onMounted为挂载完后加载的内容
export default {
    setup() {// eslint-disable-line no-unused-vars
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(()=>{
            new GameMap(canvas.value.getContext('2d'),parent.value)
        });
        return{
            parent,
            canvas
        }
    }
}
</script>

<style scoped>
div.gamemap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
}
</style>