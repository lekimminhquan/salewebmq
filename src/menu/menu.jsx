import { useEffect, useState } from 'react'
import './menu.scss'
import axios from 'axios'
import { productStore } from '../redux/store.jsx'
import Product from '../home/producShow/product.jsx'
import icon1 from '../icon/1.png'
import icon2 from '../icon/2.png'
import icon3 from '../icon/3.png'
import icon4 from '../icon/4.png'
import icon5 from '../icon/5.png'
import icon6 from '../icon/6.png'

const Category = () => {
    const [category, setCategory] = useState([])
    const [showCate, setShowcate] = useState(0)
    const getAPIcategory = async () => {
        await axios.get('http://localhost:8000/category')
            .then((res) => {
                setCategory(res.data)
            })
    }
    const handleCatbutton = (cateId) => {
        setShowcate(cateId)
    }
    const checkicon = (cateId) => {
        switch (cateId) {
            case 1: {
                return icon1
                break
            }
            case 2: {
                return icon2
                break
            }
            case 3: {
                return icon3
                break
            }
            case 4: {
                return icon4
                break
            }
            case 5: {
                return icon5
                break
            }
            case 6: {
                return icon6
                break
            }
        }
    }
    useEffect(() => {
        getAPIcategory()
    }, [])
    return (
        <div className='mainPage'>
            <div className="Menu">
                <div className='Category' key={1} >
                    <ul>
                        {category.map((cate, i) => {
                            return (
                                <li key={i}>
                                    <span><img className='iconCate' src={checkicon(cate.categoryid)} alt='icon'></img></span>
                                    <button onClick={() => { handleCatbutton(cate.categoryid) }}>{cate.categoryName}</button>
                                </li>

                            )
                        })}

                    </ul>
                </div>

            </div>
            <Product category={showCate}></Product>
        </div>
    )
}

export default Category