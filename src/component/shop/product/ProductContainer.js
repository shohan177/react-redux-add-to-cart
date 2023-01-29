import React from 'react'

function ProductContainer() {

    let Products = [
        {
            name: "Asus Vivobook X515MA",
            price: 35500,
            stock: 20
        },
        {
            name: "Dell E1916HV 18.5 Inch",
            price: 9300,
            stock: 35
        },
        {
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
                        <div
                            class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4" key={index}
                        >
                            <div class="flex justify-between px-4 items-center">
                                <div class="text-lg font-semibold">
                                    <p>{item?.name + " (" + item?.stock + ")"} </p>
                                    <p class="text-gray-400 text-base">Tk {item?.price}</p>
                                </div>
                                <div class="text-lg font-semibold">
                                    <button
                                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
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