import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LayoutProps } from '@/models';
import { Flex, Spinner } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '@/styles';
import { useSpinnerContext } from '@/context';

export const SharedPortal = ({ children }: LayoutProps) => {
  const ref = useRef<Element | null>(null);
  const { showSpinner } = useSpinnerContext();

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
  }, []);

  return showSpinner && ref.current
    ? createPortal(
        <Flex
          width={DEFAULT_STYLES.fullWidth}
          height={DEFAULT_STYLES.fullWidth}
          position='fixed'
          left={0}
          top={0}
          overflow='auto'
          bgColor='rgba(245, 245, 245, 0.4)'
          zIndex={2}
          align='center'
          justify='center'
        >
          {children}
        </Flex>,
        ref.current
      )
    : null;
};

export const TandaSpinnerModal = () => {
  return (
    <SharedPortal>
      <Spinner
        thickness='6px'
        speed='0.75s'
        emptyColor={DEFAULT_STYLES.lightPrimaryColor}
        color={DEFAULT_STYLES.primaryColor}
        label='Loading'
      />
    </SharedPortal>
  );
};
