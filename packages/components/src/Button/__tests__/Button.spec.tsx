import '@testing-library/jest-dom';

import { setup } from '../../test-utils';

import { Button } from '../Button';

const initialProps = {
  children: 'Click me',
  onClick: jest.fn(),
  variantColor: 'red',
};

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = setup(Button)(initialProps);
    expect(getByText('Click me')).toBeInTheDocument();
  });
});
