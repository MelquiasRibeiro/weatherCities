import React from 'react';
import Svg, {Path} from 'react-native-svg';

function CloseIcon() {
  return (
    <Svg width="15" height="14" fill="none" viewBox="0 0 15 14">
      <Path
        fill="#ED0952"
        d="M15 4.932c0 .503-.073 1-.216 1.479-.745 3.33-6.163 7.024-6.78 7.436a.9.9 0 01-1.003 0C6.383 13.435.96 9.739.217 6.41A5.149 5.149 0 010 4.932C0 3.138.92 1.483 2.402.614A4.458 4.458 0 014.646 0 4.47 4.47 0 017.5 1.038 4.462 4.462 0 0110.353 0c.784 0 1.56.212 2.244.613C14.08 1.483 15 3.138 15 4.933z"
      />
    </Svg>
  );
}
export default CloseIcon;
