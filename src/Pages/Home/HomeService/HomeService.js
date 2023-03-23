import React from 'react';
import './HomeService.css'
import bottle from '../../../image/Bottle.jpg'
import bage from '../../../image/Bage.jpg'
import batch from '../../../image/House.jpg'
import seedBag from '../../../image/SeedBag.jpg'

const HomeService = () => {
    return (
        <div className='bgBennar flex justify-center align-middle'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  mx-auto max-w-screen-xl'>
                <div>
                    <div className="avatar p-3 border rounded-full">
                        <div className="p-4 border rounded-full">
                            <img className='w-14 h-14' src={bottle} alt='' />
                        </div>
                    </div>
                    <h3 className='font-bold text-lg'>Pick a Starter Option</h3>
                    <p className='text-base'>Nam commodo suscipit quam.Nunc nulla <br />Aenean ut eros et nisl sagittis</p>
                </div>
                <div>
                    <div className="avatar p-3 border rounded-full">
                        <div className="p-4 border rounded-full">
                            <img className='w-14 h-14' src={batch} alt='' />
                        </div>
                    </div>
                    <h3 className='font-bold text-lg'>Pick a Starter Option</h3>
                    <p className='text-base'>Nam commodo suscipit quam.Nunc nulla <br />Aenean ut eros et nisl sagittis</p>
                </div>
                <div>
                    <div className="avatar p-3 border rounded-full">
                        <div className="p-4 border rounded-full">
                            <img className='w-14 h-14' src={bage} alt='' />
                        </div>
                    </div>
                    <h3 className='font-bold text-lg'>Pick a Starter Option</h3>
                    <p className='text-base'>Nam commodo suscipit quam.Nunc nulla <br />Aenean ut eros et nisl sagittis</p>
                </div>
                <div>
                    <div className="avatar p-3 border rounded-full">
                        <div className="p-4 border rounded-full">
                            <img className='w-14 h-14' src={seedBag} alt='' />
                        </div>
                    </div>
                    <h3 className='font-bold text-lg'>Pick a Starter Option</h3>
                    <p className='text-base'>Nam commodo suscipit quam.Nunc nulla <br />Aenean ut eros et nisl sagittis</p>
                </div>
            </div>
        </div>
    );
};

export default HomeService;