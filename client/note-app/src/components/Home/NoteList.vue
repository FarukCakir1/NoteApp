<script setup>
import { inject, ref } from "vue";
import SingleNote from "./SingleNote.vue";
import { userStore } from "../../store";
import SideBar from "./SideBar.vue";

const appAxios = inject("appAxios");
const router = inject("router")
const store = userStore();
const popup = ref(false);
const notes = ref([]);

const getData = async () => {
  appAxios
    .get("/users/notes", {
      headers: {
        Authorization: `Bearer ${store._currentUser?.tokens?.access_token}`,
      },
    })
    .then((res) => {
      notes.value = res.data;
    });
};

const handleDelete = (e) => {
  appAxios.delete(`/notes/${e}`);
  notes.value = notes.value.filter((n) => n._id !== e);
};

const handleChange = (e) => {
  appAxios
    .get(`/users/notes?category_name=${e}`, {
      headers: {
        Authorization: `Bearer ${store._currentUser?.tokens?.access_token}`,
      },
    })
    .then((response) => (notes.value = response.data));
};

const handleOpen = (id) => {
  appAxios
    .get(`/notes?_id=${id}`, {
      headers: {
        Authorization: `Bearer ${store._currentUser?.tokens?.access_token}`,
      },
    })
    .then((res) => {
      store.setSingleNote(res.data)
      router.push("/single")
    })
    .catch(err => console.log(err));
};

getData();
</script>

<template>
  <div class="w-screen h-screen flex">
    <SideBar @change-category="handleChange" @see-all="getData()" />

    <div
      v-if="store._currentUser"
      class="w-full h-full grid gap-y-32 grid-cols-6 grid-rows-3 p-6"
    >
      <SingleNote
        v-for="note in notes"
        :key="note.key"
        :note="note"
        @delete-event="handleDelete"
        @click="handleOpen(note._id)"
      />
    </div>
    <div
      v-else
      class="w-full h-full py-16 flex flex-col justify-start items-center"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          width="170px"
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
      </div>
      <h2 class="mt-5 text-2xl font-thin text-orange-500">
        Welcome to NoteAwesome...
      </h2>
      <p class="w-4/6 text-center font-thin mt-3 text-xl">
        You can write your notes here. You can separate them into categories and
        in order of importance. You can change them, delete them and do a lot
        more. So let's start
      </p>
      <div class="w-full flex justify-center mt-8 gap-x-5 items-center">
        <router-link
          class="w-1/6 shadow-lg bg-green-400 text-white text-xl py-2 text-center border border-orange-200 rounded-md"
          to="/register"
          >Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>
