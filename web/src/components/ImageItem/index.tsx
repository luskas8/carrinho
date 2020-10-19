import React from 'react';

import './styles.css';

interface ItemProps {
    url: string;
    name: string;
    price: string;
    sellingPrice: string;
}

export default function ImageItem({ url, name, price, sellingPrice }: ItemProps) {
    return (
        <div className="item">
            <div className="image-box">
                <img src={url} alt={name}/>
            </div>
            <div className="item-content">
               <h2>{name}</h2>
                <div className="prices">
                    <span>R$ {price}</span>
                    <p>R$ {sellingPrice}</p>
                </div>
            </div>
        </div>
    );
}