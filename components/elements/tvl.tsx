import React from "react";
import { TVLProps } from '../../interfaces';


const TVLComp: React.FC<TVLProps> = ({ TVL }: TVLProps) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    return (
        <div className="text-center">
            <div className="rounded-full border-t-2 border-t-slate-100/10 bg-background text-center text-md font-semibold text-label-value flex items-center justify-around px-2 py-2">
                {formatter.format(TVL)}
            </div>
            <div className="my-3 text-xs font-semibold text-coin-sublabel/90">TVL</div>
        </div>
    )
}
export default TVLComp;