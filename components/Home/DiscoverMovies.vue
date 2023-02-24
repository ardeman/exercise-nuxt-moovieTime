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
                    <CommonPoster
                        v-if="index < 10"
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