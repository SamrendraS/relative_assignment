import React from "react";
import Card from "./elements/card"
import { cards } from "../constants"
import TrendingIcon from "./elements/trendingIcon"
import { CardProps } from '../interfaces';


const CardList = () => {
    const cardList: CardProps[] = cards;
    const cardListToRender = cardList.map(({ displayName, price, returnPerc, TVL, displayImage, pairs, gradientStop }) => {
        return (
            <Card
                key={displayName}
                displayName={displayName}
                price={price}
                returnPerc={returnPerc}
                TVL={TVL}
                displayImage={displayImage}
                pairs={pairs}
                gradientStop={gradientStop}
            />
        )
    });

    return (
        <div className="scale-[0.8] ">
            <div className="flex items-center justify-start mb-32 ml-12">
                <TrendingIcon />
                <div className="m-2"></div>
                <div className="font-semibold text-white">Trending Assets</div>
            </div>
            <div className="mx-12">
                <div className="flex items-center justify-center">
                    {cardListToRender}
                </div>
            </div>
        </div>
    )
}
export default CardList;