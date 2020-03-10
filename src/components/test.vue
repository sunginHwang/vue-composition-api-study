<template>
    <div>
        <h2>컴포지션 API</h2>
        <p>값 : {{count}}</p>
        <p>두배 : {{doubleCount}}</p>
        <button @click="addCount">값 증가</button>
        <h2>컴포지션 API2</h2>
        <p>변경횟수 : {{state.changeCount}}</p>
        <p>message : {{state.message}}</p>
        <input type="text" :value="state.message" @change="e => setMessage(e.target.value)"/>
        <button @click="setMessage('변경된ㅁ')">값변경</button>
    </div>

</template>

<script>
    import {ref, reactive, computed, onMounted, onUpdated, watch} from '@vue/composition-api';

    export default {
        name: "test",
        setup(){


            return {
                ...useCount(),...useMessage('초기값')
            }
        }
    }

function useCount() {
    const count = ref(12);
    const doubleCount = computed(() => count.value * 2);

    function addCount(){
        count.value = count.value+1;
    }

    watch(()=>{
        console.log(count.value +' : count watched!')
    });
    onMounted(() => {
        console.log(count.value +' : count mounted!')
    })
    onUpdated(() => {
        console.log(count.value +' : count updated!')
    })

    return {
        count,
        doubleCount,
        addCount
    }
}

    function useMessage(initMessage) {
        const state = reactive({
            message: initMessage ? initMessage : '',
            changeCount: 0,
        });


        watch(()=>{
            console.log(state.message +' : message watched!')
        });

        // eslint-disable-next-line no-unused-vars
        function setMessage(value = ''){
            console.log('setMessage');
            state.message = value;
            state.changeCount ++;
        }


        return {
            state,
            setMessage,
        }
    }
</script>

<style scoped>

</style>