import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fill?: string;
};

const HomeIcon = ({fill}: Props) => (
  <Svg width="24" height="24" fill={fill}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </Svg>
);

export default HomeIcon;
