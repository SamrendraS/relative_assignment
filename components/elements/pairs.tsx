import React from "react";
import { PairProps } from '../../interfaces';

const PairComp: React.FC<PairProps> = ({ pairs }: PairProps) => {
    const pairsListToRender = pairs.map((displayImage) => {
        return (
            <img src={displayImage} className="max-h-[55px] w-[20px]" />
        )
    });

    return (
        <div className="my-1 text-center">
            <div className="ml-16 rounded-full border-t-2 border-t-slate-100/10 bg-background flex items-center justify-around py-2 px-0 gap-0 w-32">
                {pairsListToRender}
            </div>
            <div className="my-3 text-xs font-semibold text-coin-sublabel/90">Popular pairs</div>
        </div>
    )
}
export default PairComp;
