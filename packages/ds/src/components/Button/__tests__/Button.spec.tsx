import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

import { setup } from '../../../test-utils';

import { Button } from '../Button';

const initialProps = {
  children: 'Click me',
  onClick: jest.fn(),
  variant: 'red',
};

describe('Button', () => {
  it('should render a label', () => {
    const { getByText } = setup(Button)(initialProps);
    const buttonEl = getByText(initialProps.children);
    expect(buttonEl).toBeInTheDocument();
  });

  it('should call onClick props', () => {
    const { getByText } = setup(Button)(initialProps);
    const buttonEl = getByText(initialProps.children);

    fireEvent.click(buttonEl);

    expect(initialProps.onClick).toHaveBeenCalled();
  });
});
