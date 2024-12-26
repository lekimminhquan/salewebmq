import React, { memo, useState } from 'react';

const Cart = memo(() => {
    const [product,setProduct] =useState([])
    return (
        <div>
            this is the cart of user
        </div>
    );
});

export default Cart;

// import React, { useState, useEffect } from 'react';
// import './Cart.scss'
// const ImageSlider = () => {
//   const images = [
//     'https://lh3.googleusercontent.com/H_IYdCggl7PzlnWqNw2m6xlhYoN_Xps-t5UTXML5zRqaB5Z7peaAajgntlaolhNoPHhj2BBXmnFbN8ejVhfJ8ssFl2uLbvuw=w500-rw',
//     'https://storage.googleapis.com/teko-gae.appspot.com/media/image/2024/4/15/ba358f6b-a874-4909-a482-66909ae7696e/image.png',
//     'https://lh3.googleusercontent.com/By-Z-mNsxaHA-rGa1NcXUwytuUgCazocgPG0oEZytONRSmhVgC1ztz_qMWJCJrRCdVCMEcrqio1N5-JCCYQFig5jFC_7QcA=w1000-rw',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     console.log(currentIndex)
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex+1) % images.length);
      
//     }, 3000); // Chuyển ảnh mỗi 3 giây
    
//     return () => clearInterval(interval); // Dọn dẹp khi component unmount
//   }, [images.length]);

//   return (
//     <div className='minhquan'>
//         <p>đâsdsadsdsasdasdasd</p>
//       <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} style={{ width: '100%', height: 'auto' }} />
//     </div>
//   );
// };

// export default ImageSlider;