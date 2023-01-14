import React from "react";
import SvgComponent from "./cardSvg";
import Title from "./title"
import TVLComp from "./tvl"
import PairComp from "./pairs"
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ displayName, price, returnPerc, TVL, displayImage, pairs, gradientStop }: CardProps) => {
    const getClassName = () => {
        switch (displayName) {
            case "Bitcoin (BTC)":
                return "rounded-full bg-gradient-to-b from-transparent via-transparent to-orange-400";
            case "Solana (SOL)":
                return "rounded-full bg-gradient-to-b from-transparent via-transparent to-indigo-500";
            case "Ethereum (ETH)":
                return "rounded-full bg-gradient-to-b from-transparent via-transparent to-indigo-200"
            case "Binance USD (BUSD)":
                return "rounded-full bg-gradient-to-b from-transparent via-transparent to-yellow-300";
            case "Shiba Inu (SHIB)":
                return "rounded-full bg-gradient-to-b from-transparent via-transparent to-red-400"
            default:
                return `rounded-full bg-gradient-to-b from-transparent ${gradientStop}`;
        }
    }
    return (
        <div className="cursor-pointer w-full rounded-2xl mx-8">
            <div className="flex flex-wrap justify-center">
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="rounded-full absolute -m-16 -mt-[58px] max-w-[105px]  align-middle border-solid border-2 border-gray-100/[0.15] lg:-ml-[52px]">
                            <div className={getClassName()}>
                                <img src={displayImage} className="p-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SvgComponent />
            </div>
            <div className="relative">
                <div className="absolute left-[20px] -top-[290px] right-[20px]">
                    <Title displayName={displayName} price={price} returnPerc={returnPerc} />
                    <TVLComp TVL={TVL} />
                    <PairComp pairs={pairs} />
                </div>
            </div>

        </div>
    )
}
export default Card;