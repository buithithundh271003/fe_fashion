import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import HomeSectionCarosel from '../../components/HomSectionCarosel/HomeSectionCarosel'
import { findProducts } from '../../../State/Product/Action'
import HomeProduct from '../../components/ProductDetails/HomProduct'
import BannerSection from '../../components/banner/index'
import CategorySection from '../../components/category/index'

const HomePage = () => {
  const {product} = useSelector(store=>store);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(findProducts());
  },[])
  // console.log(product?.products)
   const truyen = product.products;
  const truyendai = [];
  const truyenngan = [];
  const truyenthieunhi = [];
  console.log( truyen[0])
  for(let i = 0; i <truyen.length; i++){
    if(truyen[i].danhmuc ==="truyendai") truyendai.push(truyen[i]);
    if(truyen[i].danhmuc ==="truyenngan") truyenngan.push(truyen[i]);
    if(truyen[i].danhmuc ==="truyenthieunhi") truyenthieunhi.push(truyen[i]);
  }
  return (
    <div>
       {/* <Slider/> */}
       <BannerSection></BannerSection>
       <HomeProduct data={truyen}/>
       <CategorySection></CategorySection>

       <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={truyendai} sectionName={'Top sản phẩm bán chạy'} danhmuc={"truyendai"}/>
        <HomeSectionCarosel data={truyenngan}  sectionName={'Bộ sưu tập mới'} danhmuc={"truyenngan"}/>
        <HomeSectionCarosel data={truyenthieunhi}  sectionName={'Hàng mới về'} danhmuc={"truyenthieunhi"}/>
       </div>
    </div>

  )
}

export default HomePage
