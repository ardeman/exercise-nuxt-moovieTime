<template>
    <section class="pt-14 pb-12">
        <div class="gap-8 flex justify-center relative w-[1200px] mx-auto">
            <template v-for="(item, index) in nowPlaying.results">
                <template v-if="index === active">
                    <CommonCarouselCard
                        :url="'/movies/' + nowPlaying.results[(index || nowPlaying.results.length)-1].id"
                        :rate="nowPlaying.results[(index || nowPlaying.results.length)-1].vote_average?.toFixed(1)"
                        :genres="nowPlaying.results[(index || nowPlaying.results.length)-1]?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)[0]"
                        :poster-url="'https://image.tmdb.org/t/p/original' + nowPlaying.results[(index || nowPlaying.results.length)-1].poster_path"
                        :title="nowPlaying.results[(index || nowPlaying.results.length)-1].title"
                        :release-year="nowPlaying.results[(index || nowPlaying.results.length)-1].release_date.substring(0, 4)"
                        :overview="nowPlaying.results[(index || nowPlaying.results.length)-1].overview"
                        :class-status="'opacity-50 absolute -left-60'"
                    />
                    <CommonCarouselCard
                        :url="'/movies/' + item.id"
                        :rate="item.vote_average?.toFixed(1)"
                        :genres="item?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)[0]"
                        :poster-url="'https://image.tmdb.org/t/p/original' + item.poster_path"
                        :title="item.title"
                        :release-year="item.release_date.substring(0, 4)"
                        :overview="item.overview"
                        :class-status="'opacity-100'"
                    />
                    <CommonCarouselCard
                        :url="'/movies/' + nowPlaying.results[index + 1 === nowPlaying.results.length ? 0 : index + 1].id"
                        :rate="nowPlaying.results[index + 1 === nowPlaying.results.length ? 0 : index + 1].vote_average?.toFixed(1)"
                        :genres="nowPlaying.results[index + 1 === nowPlaying.results.length ? 0 : index + 1]?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)[0]"
                        :poster-url="'https://image.tmdb.org/t/p/original' + nowPlaying.results[index + 1 === nowPlaying.results.length ? 0 : index + 1].poster_path"
                        :title="nowPlaying.results[index + 1 === nowPlaying.results.length ? 0 : index + 1].title"
                        :release-year="nowPlaying.results[index + 1 === nowPlaying.results.length ? 0 : index + 1].release_date.substring(0, 4)"
                        :overview="nowPlaying.results[index + 1 === nowPlaying.results.length ? 0 : index + 1].overview"
                        :class-status="'opacity-50 absolute -right-60'"
                    />
                </template>
            </template>
        </div>
        <div class="flex gap-4 mt-12 justify-center">
            <template v-for="(item, index) in nowPlaying.results">
                <div
                    class="h-[12px] rounded-[6px] cursor-pointer transition-all duration-300"
                    :style="index === active ? { 
                        backgroundColor: '#E74C3C', 
                        width: '60px' 
                    } : { 
                        backgroundColor: 'rgba(255,255,255,0.5)', 
                        width: '12px' 
                    }"
                    @click="() => setActive(index)"
                ></div>
            </template>
        </div>
    </section>
</template>

<script setup>
const active = useState('active', () => 0)
const setActive = (index) => {
    active.value = index
}

const { categories } = useCategories()
const appConfig = useAppConfig()

const { data: nowPlaying, error } = await useAsyncData(
    'nowPlaying',
    () => $fetch(`/movie/now_playing`, {
        method: 'GET',
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: appConfig.apiKey.tmdb,
            page: 1
        }
    })
)
</script>