import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineStar } from 'react-icons/ai';
import './NewProductSlider.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", }}
            onClick={onClick}
        />
    );
}

export default function NewProductSlider() {
    var settings = {

        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
    ]



    return (
        <div className="caurosle relative">
            <Slider {...settings}>
                {
                    newProduct.map(product =>
                        <div>
                            <div className="h-56 border w-64 rounded-2xl ml-4 shadow ">
                                <div className="flex justify-between mx-7 mt-5">
                                    <p className="bg-lime-600 text-white font-bold text-sm px-1 rounded-lg">Fresh</p>
                                    <p className="bg-red-600 text-white font-bold text-sm px-1 rounded-lg">Sale 30%</p>
                                </div>
                                <img className="h-4/5 ml-4 w-52" src={product.image} alt=""></img>
                            </div>
                            <div className="border h-36 rounded-xl -mt-5 w-72">
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
                    )
                }
            </Slider>
            <div className="">
                <img className="w-72 hidden lg:block mr-96" src="https://i.ibb.co/vPsk2mm/RIGHT-SIDE-1.jpg" alt="" />
            </div>
        </div>
    );
}
