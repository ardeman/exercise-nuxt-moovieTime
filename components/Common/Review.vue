<template>
    <div class="bg-[#F9F9F9] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] p-6 rounded-[14px]">
        <div class="mb-6 flex justify-between">
            <div class="flex gap-4 items-center">
                <img 
                    v-if="review.author_details.avatar_path"
                    :src="review.author_details.avatar_path?.substring(0,4) === '/htt' ? review.author_details.avatar_path.substring(1) : 'https://image.tmdb.org/t/p/original' + review.author_details.avatar_path" 
                    alt="Avatar" 
                    class="h-12 w-12 rounded-full bg-[rgba(30,35,43,0.21)]"
                >
                <span v-else class="h-12 w-12 rounded-full bg-[rgba(30,35,43,0.21)]"></span>
                <div>
                    <p class="font-bold text-sm">{{ review.author }}</p>
                    <p class="text-xs">{{ new Date(review.updated_at).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' }) }}</p>
                </div>
            </div>
            <div class="bg-[rgba(196,196,196,0.28)] px-4 py-1 rounded-md flex justify-start gap-1">
                <img src="/images/star.svg" alt="Rating" class="w-[17px] h-[17px] mt-1">
                <p class="font-semibold text-4xl">{{ review?.author_details?.rating ? review.author_details.rating.toFixed(1) : 'N/A' }}</p>
            </div>
        </div>
        <div class="h-[160px] line-clamp-[8]">
            <p class="whitespace-pre-line" v-text="review.content"></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    review: Object
})
</script>