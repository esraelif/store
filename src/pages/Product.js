import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal'
import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input'
import { createDataFunc, updateDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import { useLocation, useNavigate } from 'react-router-dom';


const Product = () => {
    const dispatch = useDispatch();
    const { modal } = useSelector(state => state.modal);
    const { data, keyword } = useSelector(state => state.data);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(modal, "modal")
    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })
    const onchangeFunc = (e, type) => {
        if (type == "url") {
            setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }
    let loc = location?.search.split('=')[1]
    useEffect(() => {
        if (loc) {
            setProductInfo(data.find(dt => dt.id == loc))
        }

    }, [loc])
    console.log(location?.search.split('=')[1], "data")

    const buttonFunc = () => {
        dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }))
        dispatch(modalFunc())
        navigate('/')
    }
    const buttonUpdateFunc = () => {
        dispatch(updateDataFunc({ ...productInfo, id: loc }))
        dispatch(modalFunc())
    }
    const contentModal = (
        <>
            <Input value={productInfo.name} type={"text"} placeholder={"ürün ekle"} name={"name"} onChange={(e) => onchangeFunc(e, "name")} />

            <Input value={productInfo.price} type={"text"} placeholder={"fiyat ekle"} name={"price"} id={"price"} onChange={e => onchangeFunc(e, "price")} />
            <Input type={"file"} placeholder={"resim ekle"} name={"url"} id={"url"} onChange={e => onchangeFunc(e, "url")} />
            <Button btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc} />
        </>



    )

    const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword))
    return (
        <div>
            <div className='flex items-center flex-wrap'>
                {data?.map((dt, i) => (
                    <ProductCard key={i} dt={dt} />
                ))

                }
            </div>

            {modal && <Modal content={contentModal} btnText={"Oluştur"} title={loc ? "Ürün Güncelle" : "Ürün Oluştur"} />}

        </div>
    );
}

export default Product;
