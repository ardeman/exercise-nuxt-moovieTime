<template>
    <section class="z-0 mt-[-74px]">
        <div 
            class="relative h-[468px] flex flex-col bg-cover bg-center bg-opacity-20" 
            :style="{ 
                backgroundImage: 'linear-gradient(rgba(30, 35, 43, 0.8), rgba(30, 35, 43, 0.8)), url(https://image.tmdb.org/t/p/original' + details.backdrop_path + ')' 
            }"
        >
            <div class="w-screen h-full flex">
                <div class="flex items-end w-[1200px] mx-auto">
                    <div class="pl-[253px] pb-8 w-full">
                        <p class="text-lg">{{ details?.release_date?.substring(0, 4) }}</p>
                        <p class="text-4xl font-semibold">{{ details?.title }}</p>
                        <p class="text-sm mt-1">{{ details?.genres?.map(genres => genres?.name)?.join(', ') }}</p>
                    </div>
                </div>
            </div>
            <div class="w-screen h-fit bg-[rgba(0,0,0,0.5)] flex-shrink-0">
                <div class="w-[1200px] m-auto relative">
                    <img :src="'https://image.tmdb.org/t/p/original' + details.poster_path" alt="Poster"
                        class="w-[220px] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.25)] absolute top-7 translate-y-[-50%] z-20">
                    <div class="flex gap-3 pl-[253px] py-[20px]">
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
        </div>
        <div class="relative bg-white text-black pt-8 pb-14">
            <div class="w-screen">
                <div class="grid w-[1200px] mx-auto pl-[253px] text-sm gap-2">
                    <p class="text-[#FF0000] font-semibold">OVERVIEW</p>
                    <p>{{ details.overview }}</p>
                </div>
                <div class="grid w-[1200px] mx-auto mt-11 text-sm gap-6" v-if="reviews.results.length > 0">
                    <p class="text-[#FF0000] font-semibold">REVIEWS</p>
                    <div class="grid grid-cols-2 grid-rows-1 gap-8">
                        <template v-for="(review, index) in reviews.results">
                            <CommonReview
                                v-if="index < 2"
                                :review="review"
                            />
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
                            <CommonPoster
                                v-if="index < 5"
                                :url="'/movies/' + movie.id"
                                :rate="movie.vote_average?.toFixed(1)"
                                :genres="movie?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)?.join(', ')"
                                :poster-url="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                                :title="movie.title"
                                :release-year="movie.release_date.substring(0, 4)"
                            />
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