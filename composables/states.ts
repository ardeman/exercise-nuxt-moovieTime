export const useCategories = () => {
    const categories = useState<any>('categories', () => {})
    const setCategories = (newCategories: any) => {
        categories.value = newCategories
    }

    return {
        categories,
        setCategories
    }
}