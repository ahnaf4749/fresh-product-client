import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
const NewProductOffer = () => {

    const newProduct = [
        {
            id: 1,
            name: "Tomato",
            image: "https://i.ibb.co/Y2n529x/download.jpg",
            oldPrice: "20",
            curreantPrice: "17"
        },
        {
            id: 2,
            name: "Onion",
            image: "https://i.ibb.co/Jt16yvJ/onion.jpg",
            oldPrice: "15",
            curreantPrice: "10"
        },
        {
            id: 3,
            name: "Cauliflowers",
            image: "https://i.ibb.co/g9pKvJp/fullcopy.jpg",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 4,
            name: "Cauliflowers",
            image: "https://i.ibb.co/g9pKvJp/fullcopy.jpg",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 5,
            name: "Cauliflowers",
            image: "https://i.ibb.co/g9pKvJp/fullcopy.jpg",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 5,
            name: "Cauliflowers",
            image: "https://i.ibb.co/g9pKvJp/fullcopy.jpg",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 5,
            name: "Cauliflowers",
            image: "https://i.ibb.co/g9pKvJp/fullcopy.jpg",
            oldPrice: "30",
            curreantPrice: "23"
        },
        {
            id: 5,
            name: "Cauliflowers",
            image: "https://i.ibb.co/g9pKvJp/fullcopy.jpg",
            oldPrice: "30",
            curreantPrice: "23"
        },
    ]


    return (
        <div className='mx-auto max-w-screen-xl mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-ml font-semibold text-[#89ba16]'>NATURE ONLY</h3>
                    <h2 className='text-black text-5xl font-bold'>Offers New Products</h2>
                </div>
                <p className='border p-1 h-9 px-3 rounded-md bg-lime-700 text-white mt-9'>All Products</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-10 gap-y-44">
                {
                    newProduct.map(product =>
                        <div class="group relative block w-64">
                            <div className='absolute object-cover transition-opacity'>
                                <div className="h-56 border w-64 rounded-2xl ml-4 shadow group-hover:opacity-40">
                                    <div className="flex justify-between mx-7 mt-5">
                                        <p className="bg-lime-600 text-white font-bold text-sm px-1 rounded-lg">Fresh</p>
                                        <p className="bg-red-600 text-white font-bold text-sm px-1 rounded-lg">Sale 30%</p>
                                    </div>
                                    <img className="h-4/5 ml-4 w-52  " src={product.image} alt=""></img>
                                </div>
                                <div className="border h-36 rounded-xl -mt-5 w-72 ">
                                    <div className="mt-8 flex ml-5">
                                        <p className=""><AiOutlineStar /></p>
                                        <p className=""><AiOutlineStar /></p>
                                        <p className=""><AiOutlineStar /></p>
                                        <p className=""><AiOutlineStar /></p>
                                        <p className=""><AiOutlineStar /></p>
                                    </div>
                                    <div className=" font-bold ml-5 ">
                                        <h3>Tomato</h3>
                                    </div>
                                    <div className="flex mt-2 font-medium ml-5">
                                        <h3>$200.00</h3>
                                        <h3 className="text-red-600 font-bold">$150.00</h3>
                                    </div>
                                </div>
                            </div >
                            <div class="p-4 sm:p-6 lg:p-8">
                                <div class="mt-32 sm:mt-48 lg:mt-24 flex align-middle justify-center">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex gap-5"
                                    >

                                        <a href='/'>
                                            <div className='bg-white h-10 w-10 rounded-full p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                            </div>
                                        </a>
                                        <a href='/'>
                                            <div className='bg-lime-700 h-10 w-10 rounded-full p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
            <div class="mt-52 flex justify-center items-center gap-4">
                <a
                    class="inline-flex items-center gap-2 border border-[#89ba16] bg-lime-600 px-8 py-3 text-white hover:bg-transparent hover:text-[#89ba16] focus:outline-none focus:ring active:text-indigo-500 rounded-full"
                    href="/download"
                >
                    <span class="text-sm font-medium rounded-full"> View All</span>

                    <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>

        </div>
    );
};

export default NewProductOffer;