import React, { memo, useEffect, useState } from 'react';
import './product.scss'
import axios from 'axios';


const Product = memo((props) => {
    const [producShow, setProductshow] = useState([])
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    const getProduct = async () => {
        await axios.get("http://localhost:8000/product/" + props.category)
            .then((res) => {
                setProductshow(res.data)
            })
    }
    useEffect(() => {
        if (!producShow) {
            getProduct()
        }
        else {
            setProductshow([])
            getProduct()
        }
    }, [props])
    return (
        <div className='productShow'>
            {producShow.map((item,index) => {
                return (
                    <div className="product-card" key={index}>
                        <img
                            className="product-image"
                            src={item.image}
                        />
                        <div className="product-info">
                            <div className="product-brand">{item.brand}</div>
                            <div className="product-productname">
                                {item.productname}
                            </div>
                            <div className="price-section">
                                <span className="current-price">{VND.format(item.price)}</span>
                            </div>
                        </div>
                        <button className="add-to-cart-btn">Thêm vào giỏ</button>
                    </div>
                ) 
            })}
        </div>
    );
});

export default Product;