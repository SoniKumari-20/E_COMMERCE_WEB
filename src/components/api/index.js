import { HttpClient } from "./HttpClient"

const getAllProductsData = ({ skip = 0 } = {}) => {
    const apiData = {
        url: `/products?limit=20&skip=${skip}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getSingleProduct = (productId) => {
    const apiData = {
        url: `/products/${productId}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getFilterProducts = (productCategory) => {

    const apiData = {
        url: `/products/search?q=${productCategory}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getProductCategories = () => {
    const apiData = {
        url: `/products/categories`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getCategoryProducts = (category) => {
    // products/category/smartphones
    const apiData = {
        url: `/products/category/${category}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}



export {
    getAllProductsData,
    getSingleProduct,
    getFilterProducts,
    getProductCategories,
    getCategoryProducts
}