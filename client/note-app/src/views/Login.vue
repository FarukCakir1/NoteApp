<template>
  <div
    class="w-screen h-screen flex justify-center items-center overflow-hidden"
  >
    <div class="h-5/6 w-1/4 bg-lgnbg rounded-sm flex flex-col justify-start items-center shadow-2xl px-8 py-6">
      <h1 class="text-xl font-bold text-white text-center">Log in with</h1>
      <div class="w-full flex justify-between mt-7">
        <button
          class="bg-input py-3 w-36 flex justify-center rounded-sm text-center gap-x-3"
        >
          <svg
            width="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#EA4335 "
              d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
            />
            <path
              fill="#34A853"
              d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
            />
            <path
              fill="#4A90E2"
              d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
            />
            <path
              fill="#FBBC05"
              d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
            />
          </svg>

          <span class="font-semibold text-text">Google</span>
        </button>
        <button class="bg-input py-3 w-36 rounded-sm text-center flex justify-center gap-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            width="24px"
          >
            <path
              style="fill: #385c8e"
              d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159
	c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44
	c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0
	c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0
	c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258
	v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"
            />
          </svg>
          <span class="font-semibold text-text">Facebook</span>
        </button>
      </div>
      <span class="text-md text-text mt-8">or</span>
      <span v-if="loginSucces === false" class="text-sm text-red-500">Kullanıcı Adı ve ya Şifre Yanlış</span>
      <div class="w-full mt-5">
        <label for="email" class="text-white">
            Email
            <input v-model="loginData.email" placeholder="Enter Email adress" type="text" name="email" class="w-full bg-input outline-none rounded-md py-3 px-3 text-text placeholder:text-placeholder mt-1" :class="{'border-red-500 border-[1px]' : loginSucces === false}">
        </label>
      </div>
      <div class="w-full mt-5">
        <label for="Password" class="text-white">
            Password
            <input v-model="loginData.password" placeholder="Enter Password" type="password" name="Password" class="w-full bg-input outline-none rounded-md py-3 px-3 text-text placeholder:text-placeholder mt-1" :class="{'border-red-500 border-[1px]' : loginSucces === false}">
        </label>
      </div>
      <button @click="handleLogin" class="w-full bg-btn text-white py-4 mt-20 rounded-md">Login</button>
      <p class="text-white mt-3 text-sm">Don't have an acoount? <span class="text-btn">Sign up</span></p>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue"
  import { userStore } from "../store";

  const store = userStore();
  const appAxios = inject("appAxios")
  const router = inject("router")
  const loginSucces = ref(null)
  const loginData = ref({
    email: null,
    password: null
  })

  const handleLogin = () => {
    appAxios.post("users/login", loginData.value).
      then(response =>{
        store.setCurrentUser(response.data)
        router.push({name: "Home"})
        loginSucces.value = null
      })
      .catch(err => {
        console.log(err);
        loginSucces.value = false
      })
  }
</script>
