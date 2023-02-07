<template>
    <section class="z-0 mt-[-74px]">
        <div class="relative h-[468px] flex flex-col">
            <img :src="'https://image.tmdb.org/t/p/original' + details.backdrop_path" alt="Backdrop" class="h-full w-screen absolute object-cover opacity-20">
            <div class="w-screen h-full absolute bottom-[-100px] z-20">
                <div class="h-full flex items-end w-[1200px] mx-auto">
                    <img :src="'https://image.tmdb.org/t/p/original' + details.poster_path" alt="Poster"
                        class="w-[220px]">
                </div>
            </div>
            <div class="w-screen h-full flex">
                <div class="flex items-end w-[1200px] mx-auto">
                    <div class="pl-[253px] pb-8 w-full">
                        <p class="text-lg">{{ details?.release_date?.substr(0, 4) }}</p>
                        <p class="text-4xl font-semibold">{{ details?.title }}</p>
                        <p class="text-sm mt-1">{{ details?.genres?.map(genres => genres?.name)?.join(', ') }}</p>
                    </div>
                </div>
            </div>
            <div class="w-screen h-fit bg-[rgba(0,0,0,0.5)] flex-shrink-0">
                <div class="flex gap-3 w-[1200px] m-auto pl-[253px] py-[20px]">
                    <div class="flex gap-4 items-center flex-shrink-0">
                        <img src="/images/star.svg" alt="Rating" class="w-[32px] h-[32px]">
                        <p class="text-4xl font-semibold">{{ details.vote_average?.toFixed(1) }}</p>
                    </div>
                    <div class="flex text-xs items-center">
                        <div class="mr-6 pr-6 border-r border-[rgba(255,255,255,0.2)] flex-shrink-0">
                            <p class="text-[rgba(255,255,255,0.5)]">USER SCORE</p>
                            <p>{{ details.vote_count }} VOTES</p>
                        </div>
                        <div class="mr-6 pr-6 border-r border-[rgba(255,255,255,0.2)] flex-shrink-0">
                            <p class="text-[rgba(255,255,255,0.5)]">STATUS</p>
                            <p class="uppercase">{{ details.status }}</p>
                        </div>
                        <div class="mr-6 pr-6 border-r border-[rgba(255,255,255,0.2)] flex-shrink-0">
                            <p class="text-[rgba(255,255,255,0.5)]">LANGUAGE</p>
                            <p class="uppercase">{{ details.original_language }}</p>
                        </div>
                        <div class="mr-6 pr-6 border-r border-[rgba(255,255,255,0.2)] flex-shrink-0">
                            <p class="text-[rgba(255,255,255,0.5)]">BUDGET</p>
                            <p>{{ details?.budget?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
                        </div>
                        <div>
                            <p class="text-[rgba(255,255,255,0.5)]">PRODUCTION</p>
                            <p class="uppercase">{{ details.production_companies.map(company => company?.name)?.join(', ') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative bg-white text-black pt-8 pb-14">
            <div class="w-screen">
                <div class="grid w-[1200px] mx-auto pl-[253px] text-sm gap-2">
                    <p class="text-[#FF0000] font-semibold">OVERVIEW</p>
                    <p>{{ details.overview }}</p>
                </div>
                <div class="grid w-[1200px] mx-auto mt-11 text-sm gap-6">
                    <p class="text-[#FF0000] font-semibold">REVIEWS</p>
                    <div class="grid grid-cols-2 grid-rows-1 gap-8">
                        <template v-for="(review, index) in reviews.results">
                            <div v-if="index < 2" class="bg-[#F9F9F9] p-6 rounded-[14px]" :key="index">
                                <div class="mb-6 flex justify-between">
                                    <div class="flex gap-4 items-center">
                                        <img 
                                            :src="review.author_details.avatar_path?.substr(0,4) === '/htt' ? review.author_details.avatar_path.substring(1) : 'https://image.tmdb.org/t/p/original' + review.author_details.avatar_path" 
                                            alt="Avatar" 
                                            class="h-12 w-12 rounded-full bg-[rgba(30,35,43,0.21)]"
                                        >
                                        <div>
                                            <p class="font-bold text-sm">{{ review.author }}</p>
                                            <p class="text-xs">{{ review.updated_at }}</p>
                                        </div>
                                    </div>
                                    <div class="bg-[rgba(196,196,196,0.28)] px-4 py-1 rounded-md flex justify-start gap-1">
                                        <img src="/images/star.svg" alt="Rating" class="w-[17px] h-[17px]">
                                        <p class="font-semibold text-4xl">{{ review?.author_details?.rating?.toFixed(1) }}</p>
                                    </div>
                                </div>
                                <div class="h-[166px] overflow-hidden">
                                    <p>{{ review.content }}</p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative text-white bg-[#1E232B] pt-12 pb-12">
            <div class="w-screen">
                <div class="grid w-[1200px] mx-auto text-sm gap-9">
                    <p>RECOMMENDATION MOVIES</p>
                    <div class="grid grid-cols-5 gap-[25px]">
                        <template v-for="(movie, index) in recommendations.results">
                            <NuxtLink :to="'/movies/' + movie.id" v-if="index < 5" class="text-[#E5E5E5]">
                                <div class="relative bg-[rgba(255,255,255,0.1)">
                                    <div class="absolute top-0 right-0 text-lg font-bold px-2.5 py-1.5 bg-[rgba(30,35,43,0.8)]">{{ movie.vote_average?.toFixed(1) }}</div>
                                    <div class="w-full h-full absolute bg-[rgba(0,0,0,0.8)] hover:opacity-100 opacity-0 flex flex-col items-center justify-center gap-11 font-semibold">
                                        <p class="flex gap-2.5 text-2xl"><img src="/images/star.svg" alt="Rating"
                                                class="w-[32px]">
                                            <span>{{ movie.vote_average?.toFixed(1) }}</span>
                                        </p>
                                        <p class="text-center px-3 text-lg">{{ movie?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)?.join(', ') }}</p>
                                        <button class="text-sm py-2 px-8 bg-[#FF0000] rounded-[32px]">VIEW</button>
                                    </div>
                                    <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" :alt="movie.title">
                                </div>
                                <p class="mt-3 mb-1 font-semibold">{{ movie.title }}</p>
                                <p class="text-[#929292] text-sm">{{ movie.release_date.substr(0, 4) }}</p>
                            </NuxtLink>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { categories } = useCategories()
const appConfig = useAppConfig()
const route = useRoute()

const { data: details, error } = await useAsyncData(
    'details',
    () => $fetch(`/movie/${route.params.id}`, {
        method: 'GET',
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: appConfig.apiKey.tmdb
        }
    })
)

const { data: reviews } = await useAsyncData(
    'reviews',
    () => $fetch(`/movie/${route.params.id}/reviews`, {
        method: 'GET',
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: appConfig.apiKey.tmdb
        }
    })
)

const { data: recommendations } = await useAsyncData(
    'recommendations',
    () => $fetch(`/movie/${route.params.id}/recommendations`, {
        method: 'GET',
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: appConfig.apiKey.tmdb
        }
    })
)
</script>