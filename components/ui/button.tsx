import { forwardRef } from 'react';
import * as RadixButton from '@radix-ui/themes';

type ButtonProps = RadixButton.ButtonProps 

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { ...rest } = props;

  return (
    <RadixButton.Button
      {...rest}
      ref={ref}
      highContrast={true}
      style={{cursor: 'pointer'}}
    >
      {props.children}
    </RadixButton.Button>
  );
});

PrimaryButton.displayName = 'Button';

export default PrimaryButton;
