<script setup>
    import { reactive, inject, ref } from 'vue';
    import { userStore } from '../store';
    const appAxios = inject("appAxios")
    const store = userStore();
    const categories = ref([])
    const newNote = reactive({
        title: "",
        content: "",
        category_name: null
    })
    const getCategories = async () => {
        appAxios.get("/users/categories", {
            headers: {
                Authorization: `Bearer ${store._currentUser?.tokens?.access_token}`
            }
        }).then(response => {
            categories.value = response.data
        }).catch(err => console.log(err))
    }
    const handleSubmit = () => {
        appAxios.post("/notes",  newNote, {
            headers: {
        Authorization: `Bearer ${store._currentUser?.tokens?.access_token}`,
      },
        })
    
    }
    
    getCategories();
    </script>


<template>
    <div class="w-screen h-screen flex flex-col justify-start items-center gap-y-5 py-16">
        <h1 class="text-3xl font-thin text-orange-400">New Note</h1>
        <div class="w-2/6 h-4/6 rounded-sm bg-slate-600 flex flex-col justify-between items-center px-16 py-5">
            <label for="title" class="text-white w-full">
                <p class="mb-2 font-thin">Başlık:</p>
                <input v-model="newNote.title" type="text" id="title" class="w-full border-none outline-none bg-slate-100 text-black py-1 pl-2">
            </label>
            <label for="categories" class="text-white w-full">
                <p class="mb-2 font-thin">category</p>
                <select v-model="newNote.category_name" name="categories" id="" class="w-full pl-1 outline-none appearance-none text-black py-2">
                <option selected disabled hidden>Category</option>    
                <option  v-for="category in categories">{{category.name}}</option>
            </select>
            </label>      
            <label for="title" class="text-white w-full">
                <p class="mb-2 font-thin">Not:</p>
                <textarea  v-model="newNote.content" id="title" class="w-full h-40 border-none outline-none bg-slate-100 text-black pl-2 pt-3 resize-none font-thin " />
            </label>
            <router-link @click="handleSubmit" to="/" class="flex justify-center items-center px-4 py-2 border text-orange-400 font-medium rounded-md text-lg bg-white w-3/6 hover:bg-slate-200">Kaydet</router-link>
        </div>
    </div>
</template>


