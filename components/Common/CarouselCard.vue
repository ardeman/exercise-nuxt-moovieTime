<template>
    <NuxtLink
        :to="url"
        :class="'bg-black w-[520px] h-[328px] flex gap-6 flex-shrink-0 ' + classStatus"
    >
        <img :src="posterUrl" :alt="title" class="my-[-20px] ml-[-20px]">
        <div class="pt-6 pr-9">
            <p class="flex gap-1.5 text-lg font-bold"><img src="/images/star.svg" alt="Rating" class="w-[16px]">
                <span>{{ rate }}</span>
            </p>
            <h3 class="text-3xl font-semibold max-h-[108px] overflow-hidden">{{ title }}</h3>
            <div class="flex gap-1.5 items-center py-3">
                <span>{{ releaseYear }}</span>
                <div class="w-[7px] h-[7px] rounded-full bg-[rgba(255,255,255,0.5)]"></div>
                <span>{{ genres }}</span>
            </div>
            <p class="w-[240px] h-[107px] text-[12px] overflow-hidden">{{ overview }}</p>
        </div>
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
    overview: String,
    classStatus: String,
})
</script>