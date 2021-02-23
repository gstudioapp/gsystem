import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

import { setup } from '../../../test-utils';
import { Input, InputProps } from '../Input';

const initialProps: InputProps = {
  placeholder: 'Example placeholder',
};

describe('Input', () => {
  it('should render the element in the document', () => {
    const { getByTestId } = setup(Input)(initialProps);
    const inputEl = getByTestId('input');

    expect(inputEl).toBeInTheDocument();
  });

  it('should have the correct value', () => {
    const { getByTestId } = setup(Input)(initialProps);
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
      target: {
        value: 'Foo bar',
      },
    });

    expect(inputEl).toHaveValue('Foo bar');
  });

  it('should render a disabled input', () => {
    const { getByTestId } = setup(Input)({
      ...initialProps,
      isDisabled: true,
    });

    const inputEl = getByTestId('input');

    expect(inputEl).toBeDisabled();
  });
});
