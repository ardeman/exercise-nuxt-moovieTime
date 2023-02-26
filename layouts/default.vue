<template>
    <div class="bg-[#1E232B] text-white min-h-screen flex flex-col justify-between relative">
        <div class="relative">
            <Navbar />
            <div class="pt-[74px]">
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { 
    // initAccordions, 
    // initCollapses, 
    // initDials, 
    // initDismisses, 
    // initDrawers, 
    initDropdowns, 
    // initModals, 
    // initPopovers, 
    // initTabs, 
    // initTooltips
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    // initAccordions();
    // initCollapses();
    // initDials();
    // initDismisses();
    // initDrawers();
    initDropdowns();
    // initModals();
    // initPopovers();
    // initTabs();
    // initTooltips();
})

const appConfig = useAppConfig()
const { setCategories } = useCategories()

const { data: genres } = useAsyncData(
    'genres',
    async () => {
        const response = (await $fetch(`/genre/movie/list`, {
            method: 'GET',
            baseURL: 'https://api.themoviedb.org/3',
            params: {
                api_key: appConfig.apiKey.tmdb
            }
        }))
        setCategories(response)
    }
)
</script>