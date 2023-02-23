import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ReactNode } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
  TextProps,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '@/styles';

interface Props {
  mainLabel?: string;
  secondaryLabel?: string;
  placeholder?: string;
  errorMessage?: string;
  helper?: String;
  formWidth?: number | string;
  formWidthMedium?: string | number;

  id?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;

  register?: UseFormRegisterReturn;
  options?: {
    custom: (e: string) => void;
  };
  onClickSecondaryLabel?: () => void;
  onClickHelper?: () => void;

  formStyle?: FormControlProps;
  inputStyle?: InputProps;
  labelStyles?: FormLabelProps;
  errorStyles?: TextProps;
  rightAddon?: ReactNode;
  children?: ReactNode;
}

export const InputComp = ({
  mainLabel,
  secondaryLabel,
  placeholder,
  errorMessage,
  id,
  register,
  options,
  type,
  value,
  formWidth,
  formStyle,
  inputStyle,
  formWidthMedium,
  labelStyles,
  errorStyles,
  rightAddon,
  children,
  helper,
  onClickHelper,
  onClickSecondaryLabel,
}: Props) => {
  // Shared input props
  const inputProps = {
    placeholder: placeholder,
    id: id,
    type: type,
    width: DEFAULT_STYLES.fullWidth,
  };

  return (
    <FormControl
      w={{
        base: formWidth ?? DEFAULT_STYLES.fullWidth,
        md: formWidthMedium ?? DEFAULT_STYLES.fullWidth,
      }}
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      {...formStyle}
    >
      <Flex
        w={DEFAULT_STYLES.fullWidth}
        alignItems='center'
        justifyContent='space-between'
        position='relative'
      >
        {mainLabel && (
          <FormLabel
            width='max-content'
            htmlFor={id}
            pl={2}
            {...labelStyles}
            className='capitalize'
          >
            {mainLabel}
          </FormLabel>
        )}

        {secondaryLabel && (
          <Button
            variant='textBtn'
            width='max-content'
            size='xs'
            position='absolute'
            right='0'
            color={DEFAULT_STYLES.primaryTextColor}
            onClick={onClickSecondaryLabel}
          >
            {secondaryLabel}
          </Button>
        )}
      </Flex>

      {register && (
        <InputGroup>
          <Input
            value={value}
            {...inputProps}
            {...register}
            {...inputStyle}
            fontSize={DEFAULT_STYLES.smFontSize}
          />

          {rightAddon && (
            <InputRightElement pt={2}>{rightAddon}</InputRightElement>
          )}
        </InputGroup>
      )}

      {/* When register is nt used */}
      {options && (
        <InputGroup>
          <Input
            value={value}
            {...inputProps}
            {...inputStyle}
            fontSize={DEFAULT_STYLES.smFontSize}
            onChange={(e) => options?.custom(e.target.value)}
          />

          {rightAddon && (
            <InputRightElement pt={2}>{rightAddon}</InputRightElement>
          )}
        </InputGroup>
      )}

      {children}

      <Flex
        w={DEFAULT_STYLES.fullWidth}
        alignItems='center'
        justifyContent={!!errorMessage ? 'space-between' : 'flex-end'}
        position='relative'
      >
        {errorMessage && (
          <Text
            w={DEFAULT_STYLES.fullWidth}
            fontSize={DEFAULT_STYLES.smFontSize}
            color={DEFAULT_STYLES.errorColor}
            flex={1}
            {...errorStyles}
            pt={1}
          >
            {errorMessage}
          </Text>
        )}

        {helper && (
          <Button
            variant='textBtn'
            width='max-content'
            size='xs'
            color={DEFAULT_STYLES.primaryTextColor}
            justifySelf='flex-end'
            onClick={onClickHelper}
          >
            {helper}
          </Button>
        )}
      </Flex>
    </FormControl>
  );
};

