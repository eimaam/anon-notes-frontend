import { forwardRef } from 'react';
import * as RadixButton from '@radix-ui/themes';

type ButtonProps = RadixButton.ButtonProps & {
  variant?: string;
  size?: string;
};

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, size, ...rest } = props;

  return (
    <RadixButton.Button
      {...rest}
      ref={ref}
      variant={variant}
      size={size}
      highContrast={true}
      style={{cursor: 'pointer'}}
    >
      {props.children}
    </RadixButton.Button>
  );
});

PrimaryButton.displayName = 'Button';

export default PrimaryButton;
