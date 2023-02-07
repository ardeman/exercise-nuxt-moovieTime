const appConfig = useAppConfig()
const { data: categories } = await useAsyncData(
    'categories',
    () => $fetch(`/genre/movie/list`, {
        method: 'GET',
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: appConfig.apiKey.tmdb
        }
    })
)

export const useCategories = () => useState<any>('categories', () => categories)