import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../AboutPage.css'
import { getUpdateProducts } from '../api'

export const UpdateProducts = () => {

    const [proCategoryUpdate, setCategoryUpdate] = useState({
        title: null,
        description: null
    })
 const { id } = useParams()
 

const updateProducts = (event) => {
    let { name, value } = event.target;
    // console.log(name, value)
    setCategoryUpdate((state) => ({
        ...state,
        [name] : value
    }))
}


 const handleUpdate = async () => {
    getUpdateProducts(id, {proCategoryUpdate}).then((res) => setCategoryUpdate(res.data)).catch((err) => console.log(err))
 }

 useEffect(() => {
     handleUpdate()
 },[])

//  console.log(proCategoryUpdate)

  return (
    <div>
        <h1>
            Update Products
        </h1>

        <div class="container">
                <header>Update Products</header>
                <div className='form2'>
                <div class="field">
                        <div class="input-field">
                            <input
                                type="text"
                                placeholder="title"
                                name='title'
                                // defaultValue={proCategoryUpdate?.title}
                                value = {proCategoryUpdate.title}
                                onChange = {updateProducts}
                                // onChange = {(e) => setCategoryUpdate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="input-field">
                            <input
                                type="text"
                                placeholder="Description"
                                name='description'
                            //    defaultValue={proCategoryUpdate?.description}
                               value = {proCategoryUpdate.description}
                                onChange = {updateProducts}
                            />
                        </div>
                    </div>
                    
                    <div class="input-field button"  >
                        <button className='btn btn-outline-primary'  onClick={() => handleUpdate()} >Add</button>
                        <button className='btn btn-outline-danger'>Cancel</button>
                    </div>
                </div>
        </div>


    </div>
  )
}
