import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const EditIcon = ({ color = '#303336' }: { color?: string }) => (
    <Svg width={12} height={12} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.6.523H3.417C1.625.523.5 1.793.5 3.59v4.85c0 1.798 1.12 3.068 2.918 3.068h5.148c1.8 0 2.919-1.27 2.919-3.068V6.09"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.045 5.266 4.36-4.36a1.391 1.391 0 0 1 1.966 0l.71.71a1.39 1.39 0 0 1 0 1.967L6.7 7.963c-.238.238-.56.371-.896.371H3.62l.055-2.205c.008-.324.14-.633.37-.863Z"
            clipRule="evenodd"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m7.742 1.58 2.663 2.664"
        />
    </Svg>
)
export default EditIcon
