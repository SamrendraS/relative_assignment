import React from "react";
import { TitleProps } from '../../interfaces';

const Title: React.FC<TitleProps> = ({ displayName, price, returnPerc }: TitleProps) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 12
    });

    const getClassName = () => {
        const className = "text-[11px] ";
        return className + (returnPerc > 0 ? "text-green-500" : "text-rose-500")
    }

    return (
        <div className="my-1 text-center">
            <div className="my-3 text-xs font-semibold text-coin-label">{displayName}</div>
            <div className="rounded-full border-t-2 border-t-slate-100/10 bg-background text-center text-md font-semibold text-label-value flex items-center justify-around px-2 py-2">
                <h1 className="text-transparent">{returnPerc}</h1>
                {formatter.format(price)}
                <h1 className={getClassName()}>
                    {`${returnPerc > 0 ? ("+" + returnPerc.toString()) : returnPerc}%`}
                </h1>
            </div>
            <div className="my-3 text-xs font-semibold text-coin-sublabel/90">Price</div>
        </div>
    )
}
export default Title;