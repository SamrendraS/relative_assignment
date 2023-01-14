import * as React from "react"

const SvgComponent = () => (
    <svg
        width={291}
        height={351}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#a)">
            <path
                d="M273.74.92h-39a36.714 36.714 0 0 0-33.87 22.84 59.997 59.997 0 0 1-88.907 27.041A59.995 59.995 0 0 1 89.87 23.76 36.71 36.71 0 0 0 56 .92H17a17 17 0 0 0-17 17V334a17 17 0 0 0 17 17h256.74a17 17 0 0 0 17-17V17.92a17 17 0 0 0-17-17Z"
                fill="url(#b)"
                fillOpacity={0.1}
            />
            <path
                d="M201.333 23.95v-.001A36.213 36.213 0 0 1 234.741 1.42h38.999a16.499 16.499 0 0 1 16.5 16.5V334c0 4.376-1.738 8.573-4.833 11.667a16.496 16.496 0 0 1-11.667 4.833H17A16.497 16.497 0 0 1 .5 334V17.92A16.5 16.5 0 0 1 17 1.42h39a36.21 36.21 0 0 1 33.407 22.529v.001a60.503 60.503 0 0 0 55.963 37.512 60.502 60.502 0 0 0 55.963-37.512Z"
                stroke="url(#c)"
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={145.37}
                y1={0.92}
                x2={145.37}
                y2={377}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#626A88" />
                <stop offset={1} stopColor="#2E3149" />
            </linearGradient>
            <linearGradient
                id="c"
                x1={145.37}
                y1={0.92}
                x2={145.37}
                y2={377}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#ECF0FF" stopOpacity={0.1} />
                <stop offset={1} stopColor="#2E3149" stopOpacity={0} />
            </linearGradient>
            <filter
                id="a"
                x={-100}
                y={-99.08}
                width={490.74}
                height={550.08}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={50} />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1_1504"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1_1504"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)

export default SvgComponent
