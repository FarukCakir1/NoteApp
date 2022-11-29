<script setup>
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { userStore } from "../../store";
const store = userStore();
const currentRoute = computed(() => {
  return useRoute().name;
});
const dropDown = ref(false)

const handleLogOut = () => {
  dropDown.value = false
  store.LogOut();
}

</script>

<template>
  <div
    class="w-screen h-14 bg-slate-200 flex justify-between items-center px-10 border-b border-b-slate-700"
  >
    <router-link to="/" class="flex justify-center items-center gap-x-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        width="30px"
      >
        <circle style="fill: #ff2746" cx="256" cy="256" r="256" />
        <path
          style="fill: #940030"
          d="M512,256c0-3.043-0.072-6.068-0.178-9.085l-93.775-93.775L113.778,398.222L225.77,510.214
	C235.685,511.381,245.77,512,256,512C397.384,512,512,397.384,512,256z"
        />
        <polygon
          style="fill: #ffad9e"
          points="378.685,113.778 227.556,113.778 227.556,312.889 426.667,312.889 426.667,161.759 "
        />
        <polygon
          style="fill: #d3857a"
          points="426.667,161.759 378.685,113.778 316.912,113.778 316.912,312.889 426.667,312.889 "
        />
        <polygon
          style="fill: #ffffff"
          points="378.685,161.759 426.667,161.759 378.685,113.778 "
        />
        <polygon
          style="fill: #ffc61b"
          points="264.907,199.111 113.778,199.111 113.778,398.222 312.889,398.222 312.889,247.093 "
        />
        <polygon
          style="fill: #d48b07"
          points="312.889,247.093 264.907,199.111 205.433,199.111 205.433,398.222 312.889,398.222 "
        />
        <polygon
          style="fill: #fee187"
          points="264.907,247.093 312.889,247.093 264.907,199.111 "
        />
        <g>
          <rect
            x="142.222"
            y="267.636"
            style="fill: #121149"
            width="142.222"
            height="10.343"
          />
          <rect
            x="142.222"
            y="344.35"
            style="fill: #121149"
            width="142.222"
            height="10.343"
          />
          <rect
            x="142.222"
            y="305.993"
            style="fill: #121149"
            width="142.222"
            height="10.343"
          />
        </g>
      </svg>
      <span class="text-xl font-semibold text-orange-400">NoteAwesome</span>
    </router-link>
    <div
      v-if="currentRoute === 'Home' && store._currentUser"
      class="flex items-center gap-x-5"
    >
      <router-link
        to="/create"
        class="px-5 py-2 border border-orange-500 rounded-md flex items-center text-lg font-medium bg-orange-50"
      >
        + New Note
      </router-link>
      <div @click="dropDown = !dropDown"
        to="/account"
        class="hover:fill-orange-500 rounded-full duration-300 hover:bg-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 459 459"
          style="enable-background: new 0 0 459 459"
          xml:space="preserve"
          width="30px"
        >
          <g>
            <g>
              <path
                d="M229.5,0C102.53,0,0,102.845,0,229.5C0,356.301,102.719,459,229.5,459C356.851,459,459,355.815,459,229.5
			C459,102.547,356.079,0,229.5,0z M347.601,364.67C314.887,393.338,273.4,409,229.5,409c-43.892,0-85.372-15.657-118.083-44.314
			c-4.425-3.876-6.425-9.834-5.245-15.597c11.3-55.195,46.457-98.725,91.209-113.047C174.028,222.218,158,193.817,158,161
			c0-46.392,32.012-84,71.5-84c39.488,0,71.5,37.608,71.5,84c0,32.812-16.023,61.209-39.369,75.035
			c44.751,14.319,79.909,57.848,91.213,113.038C354.023,354.828,352.019,360.798,347.601,364.67z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div
        class="w-40 h-32 border border-black rounded-sm bg-white absolute top-16 right-12"
        :class="{'hidden' : !dropDown}"
      >
        <div
          class="w-full h-full px-1 flex flex-col items-start justify-center gap-y-4"
        >
          <router-link @click="dropDown = false" to="/account" class="w-full hover:bg-gray-300 p-2 flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 459 459"
              style="enable-background: new 0 0 459 459"
              xml:space="preserve"
              width="18px"
            >
              <g>
                <g>
                  <path
                    d="M229.5,0C102.53,0,0,102.845,0,229.5C0,356.301,102.719,459,229.5,459C356.851,459,459,355.815,459,229.5
			C459,102.547,356.079,0,229.5,0z M347.601,364.67C314.887,393.338,273.4,409,229.5,409c-43.892,0-85.372-15.657-118.083-44.314
			c-4.425-3.876-6.425-9.834-5.245-15.597c11.3-55.195,46.457-98.725,91.209-113.047C174.028,222.218,158,193.817,158,161
			c0-46.392,32.012-84,71.5-84c39.488,0,71.5,37.608,71.5,84c0,32.812-16.023,61.209-39.369,75.035
			c44.751,14.319,79.909,57.848,91.213,113.038C354.023,354.828,352.019,360.798,347.601,364.67z"
                  />
                </g>
              </g>
            </svg>
            <span>Profile</span>
          </router-link>
          <router-link @click="handleLogOut" to="/" class="w-full hover:bg-gray-300 p-2 flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              width="18px"
            >
              <g>
                <g>
                  <path
                    d="M358.401,192V12.8c0-7.066-5.734-12.8-12.8-12.8h-332.8c-7.066,0-12.8,5.734-12.8,12.8v486.4
			c0,7.066,5.734,12.8,12.8,12.8h332.8c7.066,0,12.8-5.734,12.8-12.8V320h-25.6v166.4h-307.2V25.6h307.2V192H358.401z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M508.161,246.844l-74.931-76.595c-4.941-5.06-13.047-5.146-18.099-0.205c-5.052,4.941-5.146,13.056-0.205,18.099
			l53.854,55.057H193.673c-7.066,0-12.8,5.734-12.8,12.8c0,7.066,5.734,12.8,12.8,12.8h275.098l-53.854,55.057
			c-4.941,5.043-4.847,13.158,0.205,18.099c5.06,4.941,13.158,4.855,18.099-0.205l75.128-76.8
			C513.289,259.9,513.204,251.785,508.161,246.844z"
                  />
                </g>
              </g>
            </svg>
            <span>Logout</span>
          </router-link>
        </div>
      </div>
    </div>

    <router-link
      v-if="!store._currentUser"
      to="/login"
      class="px-5 py-2 border border-orange-500 rounded-md flex items-center text-lg font-medium bg-orange-50"
    >
      Login
    </router-link>
  </div>
</template>
