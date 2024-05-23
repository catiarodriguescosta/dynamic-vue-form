<template>
    <button v-if="props.variant === 'primary'" v-bind="$attrs" class="middle none center rounded-lg bg-emerald-950 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg hover:shadow-emerald-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2">
        <slot></slot> 
    </button>

    <button v-else-if="props.variant === 'prev'" v-bind="$attrs" class="flex items-center justify-center rounded-lg bg-emerald-950 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-950/20 transition-all hover:shadow-lg hover:shadow-emerald-950/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2">
        <ChevronLeft class="mr-1 scale-50" />
        <slot></slot> 
    </button>

    <button v-else-if="props.variant === 'next'" v-bind="$attrs" class="flex items-center justify-center rounded-lg bg-emerald-950 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-950/20 transition-all hover:shadow-lg hover:shadow-emerald-950/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2">
        <slot></slot>
        <ChevronRight class="ml-1 scale-50"/>
    </button>

</template>

<script lang="ts" setup>

import ChevronLeft from './icons/ChevronLeft.vue';
import ChevronRight from './icons/ChevronRight.vue';

const props = defineProps(['variant'])

</script>