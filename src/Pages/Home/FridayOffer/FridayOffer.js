import React from 'react';
import "./FridayOffer.css"

const FridayOffer = () => {
    return (
        <section
            class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center bgAbout"
        >
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="mx-auto max-w-xl text-center sm:text-left">
                    <h3 className='text-xl font-semibold text-[#89ba16]'>BLACK FRIDAY OFFER</h3>

                    <h1 className='text-7xl font-bold text-black mt-1'>Organic Orange <br />Juice <span className='text-[#89ba16]'>40% Flat</span></h1>
                    <p className='mt-5 text-black font-semibold'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.atmsphere</p>

                    <div class="mt-8 inline-flex items-center gap-4 md:mt-8">
                        <a
                            class="inline-flex items-center gap-2 border border-black bg-black px-8 py-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black rounded-full"
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

            <img
                alt="Violin"
                src="https://i.ibb.co/3143FYC/ghjjhjjhhmhm.png"
                class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
            />
        </section>

    );
};

export default FridayOffer;