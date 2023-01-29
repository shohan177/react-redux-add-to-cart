import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

function Cart() {

    const cartData = useSelector((state) => state)

    const renderCartItem = () => {
        return (
            <>
                {cartData?.cart && cartData?.cart.map((item, index) =>
                    <Item item={item} key={index} />
                )}
            </>
        )
    }

    return (
        <div
            class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >

                {renderCartItem()}

                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total Item</p>
                        <p class="text-2xl">{cartData?.cartTotal?.TotalItem}</p>
                    </div>
                </div>
            </div>
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total price</p>
                        <p class="text-2xl">{cartData?.cartTotal?.TotalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart