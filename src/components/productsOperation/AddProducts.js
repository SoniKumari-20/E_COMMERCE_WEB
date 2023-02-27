import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import{ v1}  from 'uuid'
import '../AboutPage.css'
import { MainContext } from '../Context/MainProvider'



export const AddProducts = () => {
    const { setAlltems, allItems} = useContext(MainContext)
    const [localData, setLocalData] = useState([JSON.parse(localStorage.getItem("Products"))])
    const id = v1()
    // console.log(id)
const [products, setProductsData] = useState({
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

}



const getAddProductsData = () => {
    // console.log(products)
   localStorage.setItem("Products", JSON.stringify(products, id))
   let AddingData = [...localData]
    let arr = allItems.products
    let newArray = arr.concat(AddingData)
   setAlltems(newArray)
}


// console.log(localData)


// const getAddProductsData = async () => {
//   getAddProducts(products).then((res) => {
//     setProductsData(res.products.title)
//     setProductsData(res.products.brand)
//     setProductsData(res.products.category)
//     setProductsData(res.products.description)

//   }).catch((err) => console.log(err))
// }


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
                                value= {products.title}   onChange={handleAddData} />
                        </div>
                        <div class="input-field" style={{marginLeft:"20px"}}>
                            <input
                                type="text"
                                placeholder="Brand"
                                name='brand'
                                value={products.brand}
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
                                value={products.category}
                                onChange={handleAddData}
                            />
                        </div>
                        <div class="input-field" style={{marginLeft:"20px"}}>
                            <input
                                type="text"
                                placeholder="Price"
                                name='price'
                                value={products.price}
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
                                value={products.description}
                                onChange={handleAddData}
                            />
                        </div>
                    </div>
                    <div class="input-field button"  >
                        <button className='btn btn-outline-primary' onClick={ getAddProductsData }>Add</button>
                        <Link to={"/home"}><button className='btn btn-outline-danger' >Cancel</button></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}
