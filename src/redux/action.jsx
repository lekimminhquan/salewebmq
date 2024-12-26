export const Categoryshow= (cateType)=>{
    switch(cateType){
        case 'LAPTOP':{
            return {
              type:"LAPTOP"
            }
        }
        case 'PC':{
            return {
                type:  "PC"
              }

        }
        case 'Màn Hình':{
            return {
                type:  "Màn Hình"
              }

        }
        case 'RAM':{
            return {
                type:  "RAM"
              }
      

        }
        case 'Bàn Phim':{
            return {
                type:  "Bàn Phim"
              }
    

        }
        case 'Chuột':{
            return {
                type:  "Chuột"
              }
   
        }
        case 'Tai Nghe':{
            return {
                type:  "Tai Nghe"
              }
     

        }
        case 'New':{
            return {
                type:"New"
              }
        }
    }
}