<template>
    <NuxtLink
        :to="url"
        class="bg-black w-[520px] h-[328px] flex gap-6 flex-shrink-0"
    >
        <img :src="posterUrl" :alt="title" class="my-[-20px] ml-[-20px]">
        <div class="pt-6 pr-9">
            <p class="flex gap-1.5 text-lg font-bold"><img src="/images/star.svg" alt="Rating" class="w-[16px]">
                <span>{{ rate }}</span>
            </p>
            <h3 class="text-3xl text-left font-semibold max-h-[72px] line-clamp-[2]" :title="title">{{ title }}</h3>
            <div class="flex gap-1.5 items-center py-3">
                <span>{{ releaseYear }}</span>
                <div class="w-[7px] h-[7px] rounded-full bg-[rgba(255,255,255,0.5)]"></div>
                <span class="h-[24px] line-clamp-1 text-left" :title="genres">{{ genres }}</span>
            </div>
            <p class="w-[240px] h-[107px] text-[12px] line-clamp-[6] text-left" :title="overview">{{ overview }}</p>
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
})
</script>