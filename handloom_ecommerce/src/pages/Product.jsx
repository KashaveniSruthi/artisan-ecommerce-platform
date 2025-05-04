import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';
import { toast } from 'react-toastify';

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find(item => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image?.[0] || '');

      }
    }
  }, [products, productId]);
  const handleAddToCart = () => {
    const hasSizes = Array.isArray(productData.sizes) && productData.sizes.length > 0;
  
    if (hasSizes && !size) {
      toast.error("Please Select Size");
      return;
    }
  
    addToCart(productData._id, size);
  };
  
  


  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image && productData.image.map((item, index) => (
              <img 
                onClick={() => setImage(item)} 
                src={item} 
                key={index} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                alt="" 
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull} alt="" className="w-4" />
            <p className='pl-2'>(120)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 sm:w-4/5'>{productData.Description}</p>

          {productData.sizes && productData.sizes.length > 0 && (
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={() => setSize(item)} 
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} 
                  key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>)}

          <button onClick={(handleAddToCart)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>

          <hr className='mt-8 sm:w-4/5 border-gray-300' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on Delivery is available</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border-gray-300 px-5 text-sm'>Description</b>
          <p className='border-gray-300 px-5 text-sm'>Reviews (120)</p>
        </div>
        <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-600'>
          <p>Totally met my expectations. Would buy again without hesitation.</p>
          <p>Love it! Will definitely be ordering more from this shop.</p>
        </div>
      </div>

      {/* Display related products */}
      <RelatedProduct 
        category={productData.category} 
        subCategory={productData.subCategory} 
      />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
