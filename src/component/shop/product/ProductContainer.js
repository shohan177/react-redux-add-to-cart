import React from 'react'
import Product from './Product'

function ProductContainer() {

    let Products = [
        {
            productId: 1,
            name: "Asus Vivobook X515MA",
            price: 35500,
            stock: 20
        },
        {
            productId: 2,
            name: "Dell E1916HV 18.5 Inch",
            price: 9300,
            stock: 35
        },
        {
            productId: 3,
            name: "Canon Eos 4000D 18MP",
            price: 36500,
            stock: 72
        }
    ]


    const renderProduct = () => {

        return (
            <>
                {
                    Products?.map((item, index) =>
                        <Product item={item} key={index} />
                    )}
            </>
        )

    }

    return (
        <div
            class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
        >
            {renderProduct()}
        </div>
    )
}

export default ProductContainer