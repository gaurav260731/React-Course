import { useEffect, useReducer, useState } from "react";
import './App.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const initialState = {
        price: '',
        capacity: '',
        color: ''
    }

    const productReducer = (state, action) => {
        switch(action.type) {
            case "PRICE" :
                return {
                    ...state,
                    price: action.payload
                };
            case "COLOR":
                return {
                    ...state,
                    color: action.payload
                }
            case "CAPACITY":
                return {
                    ...state,
                    capacity: action.payload
                }
            default: return state;
        }
    }

    const [{price, capacity, color}, dispatchProductFilter] = useReducer(productReducer, initialState);

    useEffect(()=> {
        fetch("https://api.restful-api.dev/objects")
        .then(res => res.json())
        .then((result)=> {
            console.log(result);
            setProducts(result);
        })
    }, [])

    const handlePriceSearch = (event) => {
        dispatchProductFilter({
            type: "PRICE",
            payload: event.target.value
        })
    }

    const handleProductColor = (event) => {
        dispatchProductFilter({
            type: "COLOR",
            payload: event.target.value
        })
    }

    const handleProductCapacity = (event) => {
        dispatchProductFilter({
            type: "CAPACITY",
            payload: event.target.value
        })
    }

    const productFilterVal = price > 0 ? products.filter((val)=> {
            return (val?.data?.price <= price || val?.data?.Price <= price);
        }): products;
   
    const productColorVal = (color !== "")? products.filter((val)=> {
        return val?.data?.color?.includes(color); 
    }) : productFilterVal;

    const productCapacity = (capacity !== "") ? products.filter((val)=> {
        return val?.data?.Capacity?.includes(capacity);
    }): productColorVal;

    return (
        <>
        <h1>Products</h1>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <input type="text" placeholder="Search by Price" onChange={handlePriceSearch}/>
            <input type="text" placeholder="Search by Color" onChange={handleProductColor}/>
            <input type="text" placeholder="Search by Capacity" onChange={handleProductCapacity}/>
        </div>
        
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
           
           
            {
                productCapacity?.length > 0 ? productCapacity.map((val, index) => {
                    return(
                        <>
                         <div className="product-container" style={{ borderRadius: "4px" }} key={index}>
                            <h3>{val.name}</h3>
                            <p>Product Color: <b>{val?.data?.color}</b></p>
                            <p>Product Capacity: <b>{val?.data?.capacity || val?.data?.Capacity}</b></p>
                            <p>Product Price: <b>{val?.data?.price || val?.data?.Price}</b></p>
                        </div>
                        </>
                    )
                   
                }) : <p>No Product Found...</p>
            }
        </div>
        </>
    )
}

export default Products;