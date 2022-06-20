import React from 'react';
import {Svg, Path, Rect} from 'react-native-svg';
export const EditIcon = (props) => (
    <Svg style={!!props?.style ? props?.style : {}} width={props?.width || '36'} height={props?.height || '36'} viewBox="0 0 36 36" >
        <Path d="M28,30H6V8H19.22l2-2H6A2,2,0,0,0,4,8V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15l-2,2Z" class="clr-i-outline clr-i-outline-path-1"></Path>
        <Path d="M33.53,5.84,30.16,2.47a1.61,1.61,0,0,0-2.28,0L14.17,16.26l-1.11,4.81A1.61,1.61,0,0,0,14.63,23,1.69,1.69,0,0,0,15,23l4.85-1.07L33.53,8.12A1.61,1.61,0,0,0,33.53,5.84ZM18.81,20.08l-3.66.81L16,17.26,26.32,6.87l2.82,2.82ZM30.27,8.56,27.45,5.74,29,4.16,31.84,7Z" class="clr-i-outline clr-i-outline-path-2"></Path>
        <Rect x="0" y="0" width={props?.width || '36'} height={props?.height || '36'} fill-opacity="0"/>
    </Svg>
);