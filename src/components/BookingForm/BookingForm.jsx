import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.scss';
import svg from '../../assets/sprite.svg';
import { forwardRef } from 'react';
import { Button } from '../Buttons/MainBtn/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../schemas/bookingSchema';
import './DatePickerStyles.css';

export const BookingForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const CustomInput = forwardRef((props, ref) => (
    <InputGroup>
      <Input
        placeholder="Booking date"
        ref={ref}
        {...props}
        h="56px"
        bg="#F2F4F7"
      />
      <InputRightElement>
        <svg className={css.icon} width="20px" height="20px">
          <use xlinkHref={`${svg}#calendar`} />
        </svg>
      </InputRightElement>
    </InputGroup>
  ));

  CustomInput.displayName = 'CustomInput';

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formSubTitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <VStack spacing={5} align="stretch">
          <FormControl id="name">
            <FormLabel className={css.formLabel_hidden}>Name</FormLabel>
            <Input
              bg="#F2F4F7"
              h="56px"
              placeholder="Name"
              {...register('name', { required: true })}
            />
            {errors.name && <Text color="red.500">{errors.name.message}</Text>}
          </FormControl>
          <FormControl id="email">
            <FormLabel className={css.formLabel_hidden}>Email</FormLabel>
            <Input
              bg="#F2F4F7"
              h="56px"
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <Text color="red.500">{errors.email.message}</Text>
            )}
          </FormControl>
          <FormControl id="bookingDate">
            <FormLabel className={css.formLabel_hidden}>Booking date</FormLabel>
            <Controller
              name="bookingDate"
              control={control}
              defaultValue={new Date()}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  dateFormat="dd MMMM yyyy"
                  onChange={(date) => field.onChange(date)}
                  minDate={new Date()}
                  customInput={<CustomInput />}
                />
              )}
            />
            {errors.bookingDate && (
              <Text color="red.500">This field is required</Text>
            )}
          </FormControl>
          <FormControl id="comment">
            <FormLabel className={css.formLabel_hidden}>Comment</FormLabel>
            <Textarea
              bg="#F2F4F7"
              h="114px"
              resize="none"
              placeholder="Comment"
              {...register('comment')}
            />
          </FormControl>
          <Button>Send</Button>
        </VStack>
      </form>
    </Box>
  );
};
