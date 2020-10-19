import React, { useEffect, useState } from 'react';
import ImageItem from '../../components/ImageItem';
import maisQue10 from '../../services/maisQue10';
import menosQue10 from '../../services/menosQue10';
import moneyMask from '../../utils/moneyMask';

import './styles.css';

interface Total {
    id: string;
    name: string;
    value: number;
}

interface Items {
    uniqueId: string;
    id: string;
    name: string;
    skuName: string;
    price: number;
    sellingPrice: number;
    imageUrl: string;
}

export default function Dashboard() {
    const [items, setItems] = useState<Items[]>([]);
    const [totals, setTotals] = useState<Total[]>([]);
    useEffect(() => {
        const currentApi = menosQue10;
        setItems(currentApi.items);
        setTotals(currentApi.totalizers);
    }, []);


    return (
        <div className="container">
            <div className="shop-list">
                <header className="list-title">
                    <h1>Meu carrinho</h1>
                </header>
                <hr></hr>
                <main className="itens-list">
                    { items.map(item => {
                        return (
                            <ImageItem
                                key={item.uniqueId}
                                name={item.name}
                                price={moneyMask(item.price)}
                                sellingPrice={moneyMask(item.sellingPrice)}
                                url={item.imageUrl}
                            />
                        )
                    }) }
                </main>
                <hr></hr>
                <footer className="list-footer">
                    <div className="total">
                        <p>Total</p>
                        { totals.map(total => {
                            if (total.id === "Items") {
                                return ( <span>R$ {moneyMask(total.value)}</span> )
                            };
                        }) }
                    </div>
                    {
                        totals.map((total, index) => {
                            if (index === 0 && total.value >= 1000) {
                                return (
                                    <div className="frete-block">
                                        <span>Parabéns, sua compra tem frete grátis !</span>
                                    </div>
                                )
                            };
                        })
                    }
                    <hr></hr>
                    <div className="button-block">
                        <button type="submit">Finalizar compra</button>
                    </div>
                </footer>
            </div>
        </div>
    );
}