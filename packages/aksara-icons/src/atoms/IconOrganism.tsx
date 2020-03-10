import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconOrganism: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.444 2C4 2 2 4 2 6.444 2 8.89 4 10.89 6.444 10.89c2.445 0 4.445-2 4.445-4.445C10.889 4 8.889 2 6.444 2zm0 6.667c-1.222 0-2.222-1-2.222-2.223 0-1.222 1-2.222 2.222-2.222 1.223 0 2.223 1 2.223 2.222 0 1.223-1 2.223-2.223 2.223zM2 17.556c0-2.445 2-4.445 4.444-4.445 2.445 0 4.445 2 4.445 4.445 0 2.444-2 4.444-4.445 4.444C4 22 2 20 2 17.556zm2.222 0c0 1.222 1 2.222 2.222 2.222 1.223 0 2.223-1 2.223-2.222 0-1.223-1-2.223-2.223-2.223-1.222 0-2.222 1-2.222 2.223zm8.89 0c0-2.445 2-4.445 4.444-4.445s4.444 2 4.444 4.445C22 20 20 22 17.556 22c-2.445 0-4.445-2-4.445-4.444zm2.221 0c0 1.222 1 2.222 2.223 2.222 1.222 0 2.222-1 2.222-2.222 0-1.223-1-2.223-2.222-2.223-1.223 0-2.223 1-2.223 2.223zM22 6.444c0 2.445-2 4.445-4.444 4.445-2.445 0-4.445-2-4.445-4.445C13.111 4 15.111 2 17.556 2 20 2 22 4 22 6.444zm-2.222 0c0-1.222-1-2.222-2.222-2.222-1.223 0-2.223 1-2.223 2.222 0 1.223 1 2.223 2.223 2.223 1.222 0 2.222-1 2.222-2.223z"
      fill={fill}
    />
  </svg>
);

IconOrganism.defaultProps = {
  ...iconDefaultProps,
};

export default IconOrganism;