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
        <div>
            <div className="flex items-center justify-start mb-32 ml-12">
                <TrendingIcon />
                <div className="m-2"></div>
                <div className="font-semibold text-white">Trending Assets</div>
            </div>
            <div className="flex w-full flex-1 flex-col items-center justify-center">
                <div className="flex items-center justify-center w-full h-full">
                    <div className="w-full relative flex items-center justify-center">
                        <div id="slider" className="flex items-center justify-start">
                            {cardListToRender}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardList;