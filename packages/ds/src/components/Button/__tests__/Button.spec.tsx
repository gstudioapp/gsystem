import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

import { setup } from '../../../test-utils';

import { Button } from '../Button';

const initialProps = {
  children: 'Click me',
  onClick: jest.fn(),
};

describe('Button', () => {
  it('should render a label', () => {
    const { getByTestId } = setup(Button)(initialProps);
    const buttonEl = getByTestId('button');

    expect(buttonEl).toBeInTheDocument();
  });

  it('should call onClick props', () => {
    const { getByTestId } = setup(Button)(initialProps);
    const buttonEl = getByTestId('button');

    fireEvent.click(buttonEl);

    expect(initialProps.onClick).toHaveBeenCalled();
  });
});
