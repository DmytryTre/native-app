import * as React from 'react'
import Svg, { Rect, G, Circle, Path, Defs, ClipPath } from 'react-native-svg'
const CompassIcon = () => (
    <Svg width={34} height={34} fill="none">
        <Rect width={34} height={34} fill="#C67C4E" rx={10} />
        <G stroke="#fff" strokeWidth={1.5} clipPath="url(#a)">
            <Circle cx={17} cy={17} r={7.5} />
            <Path d="M17.768 18.92c-1.732.693-2.599 1.04-3.093.703a1.126 1.126 0 0 1-.299-.298c-.336-.495.01-1.36.704-3.093.148-.37.222-.554.349-.7a1.11 1.11 0 0 1 .104-.103c.145-.127.33-.201.699-.35 1.732-.692 2.598-1.039 3.093-.703.117.08.219.181.298.299.336.494-.01 1.36-.703 3.093-.148.37-.222.554-.349.7a1.136 1.136 0 0 1-.104.103c-.145.127-.33.201-.699.35Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M8 8h18v18H8z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default CompassIcon
