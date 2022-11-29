<script setup>

  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({note: Object})
</script>

<template>
  <div
    class="w-44 h-56 bg-orange-50 border border-slate-400 rounded-sm flex flex-col justify-between items-center py-1 px-2"
  >
    <h1 class="font-semibold">{{props.note.title}}</h1>
    <div class="w-full border-b border-b-slate-400" />
    <span class="font-thin text-sm">
      {{props.note.content}}</span
    >
    <div class="w-full border-b border-b-slate-400" />
    <div
      class="justify-self-end w-full h-8 flex justify-end items-center gap-x-4"
    >
      <button >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 488.728 488.728"
          width="15px"
        >
          <g>
            <path
              d="M487.147,462.52l-36.4-167.6c0-4.2-2.1-7.3-5.2-10.4l-261.3-261.3c-20-22.9-74.3-38.1-112.4,0l-47.9,47.9
        c-31,31-31,81.4,0,112.4l261.3,261.3c2.1,2.1,5.2,4.2,9.4,5.2l168.6,38.5C473.347,490.02,492.347,483.62,487.147,462.52z
         M53.047,154.42c-15.6-15.6-15.6-39.6,0-55.2l47.9-47.9c15.2-15.2,40-15.2,55.2,0l238.4,238.4h-27.1c-11.4,0-20.8,9.4-20.8,20.8
        v34.3h-34.3c-11.4,0-20.8,9.4-20.8,20.8v26.1L53.047,154.42z M333.047,415.72v-29.2h34.3c18,1.7,20.8-16.5,20.8-20.8v-34.4h29.2
        l24,109.3L333.047,415.72z"
            />
          </g>
        </svg>
      </button>
      <button @click="$emit('delete-event', props.note._id)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 443 443"
          style="enable-background: new 0 0 443 443"
          xml:space="preserve"
          width="15px"
        >
          <g>
            <path
              d="M321.785,38h-83.384V0H125.169v38H41.785v60h280V38z M155.169,30h53.232v8h-53.232V30z"
            />
            <path
              d="M295.142,214.31l5.66-86.31H62.769l19.016,290h114.172c-14.861-21.067-23.602-46.746-23.602-74.43
		C172.355,274.43,226.849,217.779,295.142,214.31z"
            />
            <path
              d="M301.785,244.141c-54.826,0-99.43,44.604-99.43,99.429S246.959,443,301.785,443s99.43-44.604,99.43-99.43
		S356.611,244.141,301.785,244.141z M355.961,376.533l-21.213,21.213l-32.963-32.963l-32.963,32.963l-21.213-21.213l32.963-32.963
		l-32.963-32.963l21.213-21.213l32.963,32.963l32.963-32.963l21.213,21.213l-32.963,32.963L355.961,376.533z"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
