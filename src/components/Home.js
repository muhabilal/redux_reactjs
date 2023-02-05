import React, { useState } from 'react'

function Home(props) {
    console.warn('props', props.data)
    return (
        <div>
            <div className='add-to-cart'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>This is home component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="logo.png" />
                </div>
                <div className='text-wrapper item'>
                    <span>I-phone</span>
                    <span>price: $1000.00</span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={() => props.addToCartHandler({ price: 10000, name: 'I-Phone' })}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
