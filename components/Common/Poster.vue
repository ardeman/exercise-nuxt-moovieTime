<template>
    <NuxtLink :to="url" class="text-[#E5E5E5]">
        <div class="relative bg-[rgba(255,255,255,0.1)">
            <div class="absolute top-0 right-0 text-lg font-bold px-2.5 py-1.5 bg-[rgba(30,35,43,0.8)]">
                {{ rate !== '0.0' ? rate : 'N/A' }}
            </div>
            <div
                class="w-full h-full absolute bg-[rgba(0,0,0,0.8)] hover:opacity-100 opacity-0 flex flex-col items-center justify-center gap-11 font-semibold">
                <p class="flex gap-2.5 text-2xl"><img src="/images/star.svg" alt="Rating" class="w-[32px]">
                    <span>{{ rate !== '0.0' ? rate : 'N/A' }}</span>
                </p>
                <p class="text-center px-3 text-lg"
                    v-text="genres">
                </p>
                <button class="text-sm py-2 px-8 bg-[#FF0000] rounded-[32px]">VIEW</button>
            </div>
            <img :src="posterUrl" :alt="title">
        </div>
        <p class="mt-3 mb-1 font-semibold">{{ title }}</p>
        <p class="text-[#929292] text-sm">{{ releaseYear }}</p>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    url: String,
    rate: String,
    genres: String,
    posterUrl: String,
    title: String,
    releaseYear: String,
})
</script>