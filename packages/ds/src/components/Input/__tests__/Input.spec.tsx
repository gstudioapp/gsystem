import '@testing-library/jest-dom';

import { setup } from '../../../test-utils';

import { Input } from '../Input';

const initialProps = {
  placeholder: 'Example placeholder',
};

describe('Button', () => {
  it('should render the input with a placeholder', () => {
    const { getByPlaceholderText } = setup(Input)(initialProps);
    const inputEl = getByPlaceholderText(initialProps.placeholder);

    expect(inputEl).toBeInTheDocument();
  });
});
