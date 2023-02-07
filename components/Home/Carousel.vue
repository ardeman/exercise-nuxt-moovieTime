<template>
    <section class="pt-14 pb-12">
        <div class="flex justify-between gap-8 mx-[-145px]">
            <div :class="'bg-black w-[520px] h-[328px] flex gap-6 ' + (item.active ? 'opacity-100' : 'opacity-50')" v-for="item in data">
                <img :src="item.img" alt="News World" class="my-[-20px] ml-[-20px]">
                <div class="pt-6 pr-9">
                    <p class="flex gap-1.5 text-lg font-bold"><img src="/images/star.svg" alt="Rating" class="w-[16px]">
                        <span>{{ item.rating }}</span>
                    </p>
                    <h3 class="text-3xl font-semibold">{{ item.title }}</h3>
                    <div class="flex gap-1.5 items-center py-3">
                        <span>{{ item.year }}</span>
                        <div class="w-[7px] h-[7px] rounded-full bg-[rgba(255,255,255,0.5)]"></div>
                        <span>{{ item.genre }}</span>
                    </div>
                    <p class="w-[240px] h-[107px] text-[12px]">{{ item.description }}</p>
                </div>
            </div>
        </div>
        <div class="flex gap-4 mt-12 justify-center">
            <div class="w-[60px] h-[12px] rounded-[6px] bg-[#E74C3C]"></div>
            <div class="w-[12px] h-[12px] rounded-[6px] bg-[rgba(255,255,255,0.5)]"></div>
            <div class="w-[12px] h-[12px] rounded-[6px] bg-[rgba(255,255,255,0.5)]"></div>
            <div class="w-[12px] h-[12px] rounded-[6px] bg-[rgba(255,255,255,0.5)]"></div>
        </div>
    </section>
</template>

<script setup>
const data = [
    {
        active: false,
        img: '/images/dummy/news-of-the-world.jpg',
        rating: '7.2',
        title: 'News of the World',
        year: '2021',
        genre: 'Drama',
        description: "A Texan traveling across the wild West bringing the news of the world to local townspeople, agrees to help rescue a young girl who was kidnapped."
    },
    {
        active: true,
        img: '/images/dummy/space-sweepers.jpg',
        rating: '7.3',
        title: 'Space Sweepers',
        year: '2021',
        genre: 'Sci-Fi',
        description: "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake."
    },
    {
        active: false,
        img: '/images/dummy/to-all-the-boys.jpg',
        rating: '8.1',
        title: 'To All the Boys: Always and Forever',
        year: '2021',
        genre: 'Drama',
        description: "Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter."
    },
]
</script>