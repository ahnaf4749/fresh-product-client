import React from 'react';
import womnen from '../../../image/women.jpg'
import dragoon from '../../../image/dragon froot.jpg'
import face from '../../../image/fech pack.jpg'
import tree from '../../../image/tree.jpg'
import orange from '../../../image/kata orange.jpg'
import fresh from '../../../image/fresh organic.jpg'
import "./WhyChoose.css"

const WhyChoose = () => {
    return (
        <div className='benu mt-20'>
            <div className='p-16 text-center '>
                <p className='text-[#89ba16] font-semibold'>ORGANIC FRESH VEGETABLES</p>
                <h2 className='text-5xl font-bold text-black'>Why People Choose Organic</h2>
            </div>
            <div className='mx-auto max-w-screen-xl mt-8 grid lg:grid-cols-3 '>
                <div>
                    <div className='flex gap-4 ml-16'>
                        <div className='align-top text-right'>
                            <h4 className='font-bold text-xl'>100% Payment Secure</h4>
                            <p className='text-base'>Appently we had reached a great <br /> in the atmospharre</p>
                        </div>
                        <div className=''>
                            <img className='rounded-full' src={womnen} alt='' />
                        </div>
                    </div>
                    <div className='flex gap-4 ml-8 mt-5'>
                        <div className='align-top text-right'>
                            <h4 className='font-bold text-xl'>100% Payment Secure</h4>
                            <p className='text-base'>Appently we had reached a great <br /> in the atmospharre</p>
                        </div>
                        <div className=''>
                            <img className='rounded-full' src={dragoon} alt='' />
                        </div>
                    </div>
                    <div className='flex gap-4 ml-16 mt-5'>
                        <div className='align-top text-right'>
                            <h4 className='font-bold text-xl'>100% Payment Secure</h4>
                            <p className='text-base'>Appently we had reached a great <br /> in the atmospharre</p>
                        </div>
                        <div className=''>
                            <img className='rounded-full' src={face} alt='' />
                        </div>
                    </div>
                </div>
                <div className='h-96 w-full'>
                    <img src='https://i.ibb.co/93p1Xz9/mango-Jam-image-2.png' alt='' />
                </div>
                <div>
                    <div className='flex gap-4'>
                        <div className=''>
                            <img className='rounded-full' src={fresh} alt='' />
                        </div>
                        <div className='align-top'>
                            <h4 className='font-bold text-xl'>100% Payment Secure</h4>
                            <p className='text-base'>Appently we had reached a great <br /> in the atmospharre</p>
                        </div>

                    </div>
                    <div className='flex gap-4 ml-8 mt-5'>
                        <div className=''>
                            <img className='rounded-full' src={orange} alt='' />
                        </div>
                        <div className='align-top'>
                            <h4 className='font-bold text-xl'>100% Payment Secure</h4>
                            <p className='text-base'>Appently we had reached a great <br /> in the atmospharre</p>
                        </div>

                    </div>
                    <div className='flex gap-4 mt-5'>
                        <div className=''>
                            <img className='rounded-full' src={tree} alt='' />
                        </div>
                        <div className='align-top'>
                            <h4 className='font-bold text-xl'>100% Payment Secure</h4>
                            <p className='text-base'>Appently we had reached a great <br /> in the atmospharre</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;