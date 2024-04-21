import React from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='flex items-center justify-between bg-indigo-400 text-white px-4 py-3' >
            <div className='text-3xl'>Store</div>
            <div className='flex items-center gap-5'>
                <div className='text-black'>
                    <select className='h-10 rounded-lg' name="" id="">
                        <option value="asc">ARTAN</option>
                        <option value="desc">AZALAN</option>
                    </select>
                </div>

                <input className='h-10 rounded-lg px-4' type="text" placeholder='Arama yapınız...' />

                <div onClick={() => dispatch(modalFunc())} className='bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <MdAddCircleOutline size={24} />
                </div>
            </div>
        </div>
    );
}

export default Header;
