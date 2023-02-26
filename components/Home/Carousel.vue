<template>
    <section class="pt-14 pb-12">
        <Carousel :items-to-show="2.5" :wrap-around="true">
            <Slide v-for="(item, index) in nowPlaying.results.filter((item, index) => index < maxShows)" :key="index">
                <div class="carousel__item">
                    <CommonCarouselCard
                        :url="'/movies/' + item.id"
                        :rate="item.vote_average?.toFixed(1)"
                        :genres="item?.genre_ids?.map(genre => categories?.genres?.find(category => genre === category.id)?.name)?.join(', ')"
                        :poster-url="'https://image.tmdb.org/t/p/original' + item.poster_path"
                        :title="item.title"
                        :release-year="item.release_date.substring(0, 4)"
                        :overview="item.overview"
                    />
                </div>
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'

const maxShows = 5

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

<style scoped>
.carousel__slide {
  padding: 20px;
  opacity: 0.5;
}

.carousel__slide--active {
    opacity: 1;
}

.carousel__pagination {
    margin-top: 52px;
    gap: 1rem;
}

.carousel__pagination :deep(.carousel__pagination-button) {
    padding: 0;
}

.carousel__pagination :deep(.carousel__pagination-button::after) {
    background-color: rgba(255,255,255,0.5);
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.carousel__pagination :deep(.carousel__pagination-button--active::after) {
    background-color: #E74C3C;
    width: 60px;
}
</style>