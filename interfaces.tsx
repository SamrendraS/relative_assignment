export interface CardProps {
    displayName: string;
    price: number;
    returnPerc: number;
    TVL: number;
    displayImage: string,
    pairs: string[],
    gradientStop: string
};

export interface PairProps {
    pairs: string[],
};

export interface TitleProps {
    displayName: string;
    price: number;
    returnPerc: number;
};

export interface TVLProps {
    TVL: number;
};
