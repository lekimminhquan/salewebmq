import axios  from "axios"
    let initState =  await axios.get('http://localhost:8000/product/laptop')
    .then(res=>{return res.data})
    
    

export const PReducer = (state=initState ,action)=>{
    switch(action.type){
        case 'LAPTOP':{
            return "LAPTOP"
     
        }
        case 'PC':{
            return "PC"
            break

        }
        case 'Màn Hình':{
            return "Màn Hình"
            break

        }
        case 'RAM':{
            return "RAM"
            break

        }
        case 'Bàn Phim':{
            return "Bàn Phím"
            break

        }
        case 'Chuột':{
            return "Chuột"
            break
        }
        case 'Tai Nghe':{
            return "Tai Nghe"
            break

        }
        default:
           return {
                category: state
           }
            
    }
}