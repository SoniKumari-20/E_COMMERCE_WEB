import { HttpClient } from "./HttpClient"

const getAllProductsData = ({ skip = 0} = {}) => {
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
const getLoginUser = (userData) => {
    const apiData = {
        url: `/auth/login`,
        method: "POST",
        data: userData
    }
    return HttpClient.custom(apiData)
}


const getAllUsers = ({ skip = 0} = {}) => {
    const apiData = {
        url: `/users?limit=20&skip=${skip}`,
        method : 'GET',
    }
    return HttpClient.custom(apiData)
}

const getSingleUser = (Id) => {
    const apiData ={
        url: `/users/${Id}`,
        method: 'GET',
    }
    return HttpClient.custom(apiData)
}

const getAllposts = ({skip = 0} = {}) => {
    const apiData = {
        url: `/posts?limit=20&skip=${skip}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getAllComments = ({skip = 0} = {}) => {
    const apiData = {
        url: `/comments?limit=20&skip=${skip}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getAllTodos = ({skip = 0} = {}) => {
    const apiData = {
        url: `/todos?limit=20&skip=${skip}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getAllQuotes = ({skip = 0} = {}) => {
    const apiData = {
        url: `/quotes?limit=20&skip=${skip}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}






export {
    getAllProductsData,
    getSingleProduct,
    getFilterProducts,
    getProductCategories,
    getCategoryProducts,
    getLoginUser,
    getAllUsers,
    getSingleUser,
    getAllposts,
    getAllComments,
    getAllQuotes,
    getAllTodos
}