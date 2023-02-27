import React from 'react';
import { GrUserManager } from "react-icons/gr";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';



const Header = () => {
    return (
        <div>
            <header aria-label="Page Header">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between gap-4">
                        <p>fresher Products</p>
                        <div class="flex items-center gap-4">
                            <div class="relative">
                                <label class="sr-only" for="search"> Search </label>
                                <input
                                    class="h-10 w-full rounded-full border border-black bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56 italic"
                                    id="search"
                                    type="search"
                                    placeholder="Search product..."
                                />
                                <button
                                    type="button"
                                    class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                                >
                                    <span class="sr-only">Search</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <Link >
                                <button><GrUserManager></GrUserManager></button>
                            </Link>
                            <button><GiSelfLove /></button>
                            <button><HiOutlineShoppingBag /></button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="navbar -mt-8 mx-auto max-w-screen-xl px-2 py-1 sm:px-6 lg:px-3 bg-gray-50">
                <MainHeader></MainHeader>
            </div>
        </div>
    );
};

export default Header;