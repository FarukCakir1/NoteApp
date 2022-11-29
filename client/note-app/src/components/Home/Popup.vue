<script setup>
import { inject, ref } from "vue";
import { userStore } from "../../store";
const appAxios = inject("appAxios")
const store = userStore()
const props = defineProps(["popup"])
const emit = defineEmits()
const category = ref({
  name: null,
});



const handleSave = () => {
  appAxios
    .post("/categories", category.value,{
      headers: {
        Authorization: `Bearer ${store._currentUser?.tokens?.access_token}`,
      },
    })
    .then((res) => {
     emit("popup-event")
     category.value.name = ""
    })
    .catch((err) => console.log(err));
    
};
</script>

<template>
  <div
    v-if="popup"
    class="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-25 flex justify-center items-center"
    @keydown.enter="handleSave"
  >
    <div
      class="w-2/6 h-2/6 border border-slate-500 bg-white rounded-md flex flex-col justify-between px-5 py-3"
    >
      <div class="w-full h-1/6 flex justify-end items-start">
        <span @click="emit('popup-close')" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 378.303 378.303"
            style="enable-background: new 0 0 378.303 378.303"
            xml:space="preserve"
            width="15px"
          >
            <polygon
              style="fill: #ff3501"
              points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018 
	28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
            />
          </svg>
        </span>
      </div>
      <label for="input" class="h-2/6">
        Category Name
        <input
          v-model="category.name"
          placeholder="Category name..."
          type="text"
          name="input"
          class="w-full mt-1 py-2 text-lg pl-3 outline-none border-[1px] border-gray-600 rounded-sm"
        />
      </label>
      <div class="w-full h-2/6 flex justify-end items-end gap-x-4">
        <button
          @click="handleSave"
          class="w-2/6 py-2 bg-green-400 text-white rounded-md"
        >
          Save
        </button>
        <button
          @click="emit('popup-close')"
          class="w-2/6 py-2 bg-red-400 text-white rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
