<template>
    <section class="relative">
        <div class="absolute w-full h-80 bg-[rgba(255,255,255,0.05)]"></div>
        <div class="relative w-[1200px] m-auto pt-24 pb-28 text-[#E5E5E5]">
            <div class="flex justify-between items-center mb-11">
                <CommonTitle>
                    <span class="text-2xl">Discover Movies</span>
                </CommonTitle>
                <div class="flex gap-5">
                    <button class="rounded-[32px] px-4 py-2 text-sm bg-[#FF0000]">Popularity</button>
                    <button class="rounded-[32px] px-4 py-2 text-sm bg-[rgba(0,0,0,0.2)]">Release Date</button>
                </div>
            </div>
            <div class="grid grid-cols-5 gap-[25px]">
                <template v-for="(movie, index) in popular.results">
                    <NuxtLink :to="'/movies/' + movie.id" v-if="index < 10" class="text-[#E5E5E5]">
                        <div class="relative bg-[rgba(255,255,255,0.1)">
                            <div class="absolute top-0 right-0 text-lg font-bold px-2.5 py-1.5 bg-[rgba(30,35,43,0.8)]">{{ movie.vote_average?.toFixed(1) }}</div>
                            <div class="w-full h-full absolute bg-[rgba(0,0,0,0.8)] hover:opacity-100 opacity-0 flex flex-col items-center justify-center gap-11 font-semibold">
                                <p class="flex gap-2.5 text-2xl"><img src="/images/star.svg" alt="Rating"
                                        class="w-[32px]">
                                    <span>{{ movie.vote_average?.toFixed(1) }}</span>
                                </p>
                                <p class="text-center px-3 text-lg" v-text="movie?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)?.join(', ')"></p>
                                <button class="text-sm py-2 px-8 bg-[#FF0000] rounded-[32px]">VIEW</button>
                            </div>
                            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" :alt="movie.title">
                        </div>
                        <p class="mt-3 mb-1 font-semibold">{{ movie.title }}</p>
                        <p class="text-[#929292] text-sm">{{ movie.release_date.substring(0, 4) }}</p>
                    </NuxtLink>
                </template>
            </div>
        </div>
    </section>
</template>

<script setup>
const { categories } = useCategories()
const appConfig = useAppConfig()

const { data: popular, error } = await useAsyncData(
    'popular',
    () => $fetch(`/movie/popular`, {
        method: 'GET',
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: appConfig.apiKey.tmdb,
            page: 1
        }
    })
)
</script>