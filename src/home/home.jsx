import './home.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import data from './data'
import Menu from '../menu/menu.jsx'


const Home = () => {
    const [valuesearch, setValueSearch] = useState('')
    const [user,setUser] = useState({
        username:'',
        id:'',
        cartID:'',
    })
    const { state } = useLocation()

    useEffect(() => {
        if(state!=null){
            setUser({
                username:state.username,
                id:state.id
                // cartID:state.cartid
            })
        }
        else{
        }
    },[])
    return (
        <> 
        <div className="header">
            <div className='Logominhquanhome'>MQLK</div>
            <div className='headerbutton'>
                <ul>
                    <li className='combobox'><p className='searchBackground'><input type="search" placeholder='MQLK...' onChange={(e) => { setValueSearch(e.target.value) }} className='searchBox'></input> <img width="30" height="30" src="https://img.icons8.com/stickers/100/search-more.png" alt="search-more" /></p></li>
                    <li><p><a href='/'>Tư Vấn Mua Hàng</a></p></li>
                    <li><p className='hotLine'>Hotline<br></br></p><p className='hotlineitem'>0926229359</p></li>
                    <li><p><a href='/'>Cấu Hình Có Sẵn</a></p></li>
                </ul>
            </div>
            <div className='User'>
                <img width="35" height="35" src="https://img.icons8.com/pulsar-gradient/48/user.png" alt="user" />
                <a href='/'>{user.username =='' || user.username  == null? 'Đăng Nhập/Đăng Kí':user.username }</a>
            </div>
            <div className='Cart'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIklEQVR4nO3XCYhVZRQH8DFNI7BFSlrM0TKzkgQzUicoKsNK2hcLI1tV1BJSyjbKYFpss0VbILfALHJN2xcnbKNot2iBoiIMisqMFuoXZ+ZM3C5vXvMKJ4Q+uLz73W/7f+f8z/+cV1f3f9tcG7phAI7CJNyMWejcEYcPw1ysyOch3IAJOBGjsQwjOgLMlXgbI3EhZmNVPgGsET/h9o4A0wPf4H4cgT7YojRnOT5Fp44AtABLq4yfrqUN7ggwx+MHbNXGeHf8iDuw2yYlM7bGRhxZ+LZHWuRWrE5yf4A56bZV+X0+rsF4jMIg7PBvAS3BC3nI67gNY3ABJuacx8q8wZMJYFQCWoSXE2g8j+MB3IKLcEYGS6zZBV0qgRmTRJ6MO7EyDw+LvIuzEuiw0roVRYA4FueW5pyfQA7GKXnROOvXGKsEZjv8gn6Fb/smsEGpORfjUbyJR/AwPsRUHI19UpfKYEI0T8bVeBafYGzqW31brgqTTi70u5ajDMe0HpZqvRfOwRrMxIO5T1h2cXJqbV4i1Lxzvsfeq9tgTfPm4fNAXt8aMeGa0pzw94TStwZMr7DfjcGXwvt+2DOtfTimVQPTO/VkbkZM3O7LUF9MabVKKHVpXbhwbIX93sKZ+f5E/k7HvHR13zbB5OR34tBCvzFJGTcZh4VYl0BXZqgvxaWhQYV1vfAbdsLwjNCIrvXpgTVVgeQmM3FXoR+hOLrQHxoH53untGYAvB53F/TnGXyX/Pkq897+sXdWBFPbA+ZQfIbdI0dhSERBYXwwrqqQTnqUvkW03Ydtw0W512W5f8zfuT1guuL7ghtC1N4PABm28TSWDy71t0yrNCRhoxLYFe/hxfL8vwO0DJcX+k+nhcZkfvo43bEotScO6FmYf0iKWoC6LjkWc+7JADipFjDj8FJJZZtlO903K9/DBYelQs9LrkRaaUpXxyU+x45ZsA1Ja3erBUzvjISGFKnIK/1zLLL27MLcfpFMC/0Qwo9Sbfuk6AVfnkri1l6kaQnxtUnEdak1wxLovSURnNRGSEcNfUJG5BeZ3bf/J2CuDZMXSoyJ2ICf0y2zkkPBiZGFdefhtQyEpnRV5K7uNYNobWmFDXlg5J1vM9sOyPG+eesZWSIsSYK+mm5a31o7ZwT+mYBrblp4EuSTNz2oYu3x1zVB1BE4ANtkyTAjq0gJcu9agfRPNQ3yPp9W+To3fS4jI/JRryp7HJiitzGlIHgzrVqtXe2Gy/N9Skp6p6xvxqf8R00iiRm56ZJU1/i/9QZ+T8E8O8I+9+qJV2oCEw03pauihDy1rkLLyDktBTCqwiuS4EHagYV589MqC4r1Uk1Ni+/r2zEvyoLhhSy/uDTeJSVgaN2mbloOak6mOC6stMkPbaslnxZmWdlU1J3/rGFguZTYLNsfC3HMkQVTqG8AAAAASUVORK5CYII="></img>
                <div className='itemCart'></div>
                <a href=''>Giỏ Hàng</a>
            </div>
        </div>
        <Menu></Menu>
        </>
    )
}

export default Home