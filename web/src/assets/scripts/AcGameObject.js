const AC_GAME_OBJECTS = [];

export class AcGameObject{
    constructor(){
        AC_GAME_OBJECTS.push(this);
        this.has_called_start =false;
        this.timedelta = 0;
    }

    start(){

    }

    update(){ // 每帧执行一次，除了第一帧

    }

    on_destroy(){

    }

    destory(){
        this.on_destroy();
        for(let i in AC_GAME_OBJECTS){
            const obj = AC_GAME_OBJECTS[i];
            if(obj === this){
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}
let last_timestamp; //上一次执行的时刻
const step=timestamp=>{
    for(let obj of AC_GAME_OBJECTS){
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step) // 该函数为每当浏览器刷新一帧时调用括号内函数
}

requestAnimationFrame(step)