import React from 'react';
import Svg, {Path} from 'react-native-svg';

function CloseIcon() {
  return (
    <Svg width="14" height="14" fill="none" viewBox="0 0 14 14">
      <Path
        fill="#fff"
        d="M14 .8l-.8-.8L7 6.2.8 0 0 .8 6.2 7 0 13.2l.8.8L7 7.8l6.2 6.2.8-.8L7.8 7 14 .8z"
      />
    </Svg>
  );
}
export default CloseIcon;
