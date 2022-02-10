import React from 'react';
import Svg, {Path} from 'react-native-svg';

function WasteIcon() {
  return (
    <Svg width="14" height="17" fill="none" viewBox="0 0 14 17">
      <Path
        fill="#fff"
        d="M13.25 5.994l-1.706 10.47a.642.642 0 01-.624.536H3.08a.642.642 0 01-.624-.537L.751 5.993a.653.653 0 01.624-.758h11.238a.645.645 0 01.636.759zM14 3.272a.646.646 0 01-.636.654H.636A.646.646 0 010 3.272c0-.362.285-.655.636-.655h3.182V.654c0-.361.285-.654.637-.654h5.09c.352 0 .637.293.637.654v1.963h3.182c.351 0 .636.293.636.655zm-5.09-.655V1.31H5.09v1.308h3.82z"
      />
    </Svg>
  );
}
export default WasteIcon;
