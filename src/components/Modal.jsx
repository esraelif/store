import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import Input from './Input';
const Modal = ({ title, content, btnText, btnFun }) => {
    const onchangeFunc = (e, type) => {
        const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })
        if (type == "url") {

        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))

        }
    }
    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
            <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
                <div className='border-b py-3 flex items-center justify-between'>
                    <div className='text-2xl'>{title}</div>
                    <IoCloseCircleSharp size={24} />
                </div>
                <Input type={"text"} placeholder={"ürün ekle"} name={"name"} id={"name"} onChange={e => onchangeFunc(e, "name")} />
                <Input type={"text"} placeholder={"fiyat ekle"} name={"price"} id={"price"} onChange={e => onchangeFunc(e, "price")} />
                <Input type={"file"} placeholder={"resim ekle"} name={"url"} id={"url"} onChange={e => onchangeFunc(e, "url")} />
            </div>

        </div>
    );
}

export default Modal;
