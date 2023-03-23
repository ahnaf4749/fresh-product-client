import React from 'react';
import "./Bennar.css"

const Bennar = () => {
    return (
        <div className=''>
            {/* <div>
                <h3 className='text-3xl text-[#49a942]'>100% Orginal food</h3>
                <h2 className='text-5xl text-white font-bold'>Organic <span className='font-bold'>Veggies</span></h2>
                <h2 className='text-5xl text-white font-bold mt-2'>Cook<span className='text-[#7ac143] font-bold'> Healthy</span></h2>
                <p className='text-white mt-3'>Apparently we had reached a great height in the atmosphere, <br />was dead black, and the stars had ceaseed to twinkle.</p>
                <button className="btn gap-2 mt-5 bg-[#7ac143] overflow-hidden">
                    Button
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </button>
            </div> */}
            <section class="bennar text-white">
                <div
                    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div class="mx-auto max-w-3xl ">
                        <h3 className='text-3xl text-[#49a942]'>100% Orginal food</h3>
                        <h1
                            class=" text-white text-3xl font-extrabold sm:text-5xl"
                        >
                            Organic Veggies

                            <span class="sm:block">Cook <span className='text-[#7ac143] font-bold'> Healthy</span></span>
                        </h1>

                        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                            Apparently we had reached a great height in the atmosphere, <br />was dead black, and the stars had ceaseed to twinkle.
                        </p>

                        <div class="mt-8 inline-flex items-center gap-4">
                            <a
                                class="inline-flex items-center gap-2 border border-[#49a942] bg-[#49a942] px-8 py-3 text-white hover:bg-transparent hover:text-[#49a942] focus:outline-none focus:ring active:text-indigo-500 rounded-full"
                                href="/download"
                            >
                                <span class="text-sm font-medium rounded-full"> Download </span>

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
                </div>
            </section>


        </div>
    );
};

export default Bennar;