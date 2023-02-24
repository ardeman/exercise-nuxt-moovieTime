<template>
    <section class="relative">
        <div class="absolute w-full h-80 bg-[rgba(255,255,255,0.05)]"></div>
        <div class="relative w-[1200px] m-auto pt-14 pb-28 text-[#E5E5E5]">
            <CommonTitle class="mb-14">
                <span class="text-4xl">Movies</span>
            </CommonTitle>
            <div class="flex w-full gap-8 justify-between">
                <div class="bg-[linear-gradient(180deg,#0E1723_0%,rgba(30,35,42,0)_100%)] max-w-60 h-fit rounded-lg">
                    <div class="border-b border-[rgba(255,255,255,0.07)] w-60">
                        <h3 class="font-semibold p-5">Sort Result By</h3>
                        <div class="border-t border-[rgba(255,255,255,0.07)] px-5 pt-5 pb-7">
                            <div class="relative">
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                    class="w-full justify-between text-white bg-[#2F363F] rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                                    type="button">
                                    <span>Popularity</span>
                                    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <!-- Dropdown menu -->
                                <div id="dropdown" class="w-full z-10 hidden bg-[#111419] rounded-lg shadow">
                                    <ul class="py-2 text-[13px] text-white" aria-labelledby="dropdownDefaultButton">
                                        <li v-for="item in sortBy">
                                            <a href="#" class="block px-4 py-2 hover:bg-black">{{ item }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-semibold p-5">Genres</h3>
                        <div class="border-t border-[rgba(255,255,255,0.07)] px-5 pt-5 pb-7 grid gap-3">
                            <div class="flex items-center justify-between" v-for="(genre, index) in categories?.genres">
                                <label class="ml-2 text-sm text-white">{{ genre.name }}</label>
                                <img src="/images/checkbox-checked.svg" alt="checkbox checked" v-if="index === 0">
                                <img src="/images/checkbox.svg" alt="checkbox checked" v-else>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-4 gap-[25px]">
                        <div v-for="movie in popular.results">
                            <CommonPoster
                                :url="'/movies/' + movie.id"
                                :rate="movie.vote_average?.toFixed(1)"
                                :genres="movie?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)?.join(', ')"
                                :poster-url="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                                :title="movie.title"
                                :release-year="movie.release_date.substring(0, 4)"
                            />
                        </div>
                    </div>

                    <div class="text-center mt-16">
                        <button class="text-sm py-2 px-8 bg-[#FF0000] rounded-[32px]">Load More</button>
                    </div>
                </div>
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

const sortBy = [
    'Popularity Ascending',
    'Popularity Descending',
    'Release Date Ascending',
    'Release Date Descending',
    'Rating Ascending',
    'Rating Descending'
]
</script>