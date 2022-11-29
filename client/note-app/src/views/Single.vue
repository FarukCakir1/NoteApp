<script setup>
    import { inject, ref } from 'vue';
    import { userStore } from "../store" 
    const store = userStore()  
    const note = ref(store._currentNote[0])   
</script>


<template>
    <div class="w-screen h-screen flex justify-center py-5">
        <div class="w-4/6 h-5/6 bg-orange-50 border rounded-sm py-4 flex flex-col items-center px-5">
            <h1 class="text-xl font-medium">
                {{note.title}}
            </h1>
            
            <div class="w-full h-[1px] bg-slate-500"/>
            
            <div class="w-full h-3/6 text-left mt-3 text-lg font-thin px-2">
                <p>{{note.content}}</p>
            </div>
            <div class="w-full h-[1px] mt-2 bg-slate-500"/>
            <div class="w-full h-2/6 flex justify-center items-center text-2xl">
                <span>{{note.category_name}}</span>
            </div>
        </div>
    </div>
</template>

