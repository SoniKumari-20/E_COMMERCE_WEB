import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import '../AboutPage.css'
import { getAddProducts } from '../api'
import { MainContext } from '../Context/MainProvider'

export const AddProducts = () => {
    const { setAlltems } = useContext(MainContext)
const [productsData, setProductsData] = useState({
    title:"",
    brand:"",
    category: "",
    price:"",
    description:""
})

const handleAddData = (event) => {
    let { name, value } = event.target;
    // console.log(name, value)
    setProductsData((state) => ({
        ...state,
        [name] : value,
    }))
    // setProductsData(" ")
}

const getAddProductsData = async () => {
    getAddProducts(productsData).then((res) => console.log(res.data)).catch((err) => console.log(err))
}



    return (
        <div>
            <h1 style={{marginTop:"20px"}}>
                <Link to="/home"><i className='fa fa-home'></i></Link>
                !! Add Products !!</h1>
            <div class="container">
                <header>Add Products</header>
                <div className='form2'>
                    <div class="field ">
                        <div className='doubleItem'><div class="input-field">
                            <input type="text" placeholder="Title" name='title' 
                                value= {productsData.title}   onChange={handleAddData} />
                        </div>
                        <div class="input-field" style={{marginLeft:"20px"}}>
                            <input
                                type="text"
                                placeholder="Brand"
                                name='brand'
                                value={productsData.brand}
                                onChange={handleAddData}
                            />
                        </div></div>
                    </div>
                    <div class="field">
                        <div className='doubleItem'>
                        <div class="input-field">
                            <input
                                type="text"
                                placeholder="Category"
                                name='category'
                                value={productsData.category}
                                onChange={handleAddData}
                            />
                        </div>
                        <div class="input-field" style={{marginLeft:"20px"}}>
                            <input
                                type="text"
                                placeholder="Price"
                                name='price'
                                value={productsData.price}
                                onChange={handleAddData}
                            />
                        </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="input-field">
                            <input
                                type="text"
                                placeholder="Description"
                                name='description'
                                value={productsData.description}
                                onChange={handleAddData}
                            />
                        </div>
                    </div>
                    <div class="input-field button"  >
                        <button className='btn btn-outline-primary' onClick={getAddProductsData }>Add</button>
                        <button className='btn btn-outline-danger'>Cancel</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
