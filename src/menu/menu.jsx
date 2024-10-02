import { useState } from 'react'
import './menu.css'

const Menu = () => {
    const [category, setCategory] = useState(['hehe', 'hihi'])
    return (
        <div className="Menu">
            <div className='Category'>
                <ul>
                    {category.map((cate) => {
                        return(
                            <li>{cate}
                            <p className='line'></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Menu