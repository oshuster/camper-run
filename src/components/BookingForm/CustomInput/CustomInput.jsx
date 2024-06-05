import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { forwardRef } from 'react';
import svg from '../../../assets/sprite.svg';
import css from '../BookingForm.module.scss';

export const CustomInput = forwardRef((props, ref) => (
  <InputGroup>
    <Input
      placeholder="Booking date"
      ref={ref}
      {...props}
      h="56px"
      bg="#F2F4F7"
    />
    <InputRightElement height="100%">
      <svg className={css.icon} width="20px" height="20px">
        <use xlinkHref={`${svg}#calendar`} />
      </svg>
    </InputRightElement>
  </InputGroup>
));

CustomInput.displayName = 'CustomInput';
