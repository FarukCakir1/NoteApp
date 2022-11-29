<script setup>
    import {inject, ref} from "vue"

    const appAxios = inject("appAxios")

    const userData = ref({
        fullname: null,
        email: null,
        password: null,
    })
    
    const handleSubmit = () => {
        appAxios.post("/users", userData.value)
            .then(resp => {
            userData.value.fullname = ""
            userData.value.email = ""
            userData.value.password = ""

            })
            .catch(err => console.log(err))
    }
</script>



<template>
    <div
    class="w-screen h-screen flex justify-center items-center overflow-hidden"
  >
    <div class="h-5/12 w-1/4 bg-lgnbg rounded-sm flex flex-col justify-start items-center shadow-2xl px-8 py-6">
      <h1 class="text-xl font-bold text-white text-center">Create an account</h1>
      <div class="w-full mt-4">
        <label for="Name" class="text-white">
            Fullname
            <input v-model="userData.fullname" placeholder="Your Fullname.." type="text" name="Name" class="w-full bg-input outline-none border-none rounded-md py-3 px-3 text-text placeholder:text-placeholder mt-1">
        </label>
      </div>
      <div class="w-full mt-4">
        <label for="email" class="text-white">
            Email
            <input v-model="userData.email" placeholder="Enter Email adress" type="text" name="email" class="w-full bg-input outline-none border-none rounded-md py-3 px-3 text-text placeholder:text-placeholder mt-1">
        </label>
      </div>
      <div class="w-full mt-5">
        <label for="Password" class="text-white">
            Password
            <input v-model="userData.password" placeholder="Enter Password" type="password" name="Password" class="w-full bg-input outline-none border-none rounded-md py-3 px-3 text-text placeholder:text-placeholder mt-1">
        </label>
      </div>
      <router-link to="/" @click="handleSubmit" class="w-full bg-btn text-white flex justify-center py-3 mt-5 rounded-md">Submit</router-link>
    </div>
  </div>
</template>


