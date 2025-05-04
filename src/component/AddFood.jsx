import {assets} from "../assets/assets.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {addFood} from "../services/foodService.js";

const AddFood=()=>{
    const [image,setImage]=useState(false)
    const [data,setData]=useState({
        name:'',
        description:'',
        price:'',
        category:'Biryani'
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data =>({...data,[name]:value}))
    }
    useEffect(()=>{
        console.log(data)
    },[data])

    const onSubmitHandler=async (event)=>{
        event.preventDefault();
        if (!image){
            alert('Please select image');
            return;
        }

        try {
            await addFood(data,image);
            alert("Food added success");
            setData({name: '',description: '',category: 'Biryani',price: ''});
            setImage(null)
        }catch (error){
            console.log('Error',error)
            alert("error adding food",)
        }
    }


    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-4">
                    <div className="card-body">
                        <h2 className="mb-4">Add Food</h2>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image): assets.upload} width={90}/></label>
                                <input type="file" className="form-control" id="image" hidden onChange={(e)=> setImage(e.target.files[0])}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Food Name</label>
                                <input type="text" className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Desc</label>
                                <textarea className="form-control" id="description" rows="5" required name='description' onChange={onChangeHandler} value={data.description}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select name="category" id="category" className='form-control' onChange={onChangeHandler} value={data.category}>
                                    <option value="Biryani">Biryani</option>
                                    <option value="Cake">Cake</option>
                                    <option value="Buger">Buger</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Rllos">Rolls</option>
                                    <option value="Sald">Salad</option>
                                    <option value="Ice cream">Ice cream</option>

                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" name="price" id="price" className="form-control" onChange={onChangeHandler} value={data.price}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddFood;