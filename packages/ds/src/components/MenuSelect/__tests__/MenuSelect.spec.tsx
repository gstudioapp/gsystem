import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/react';

import { setup } from '../../../test-utils';
import { MenuSelectProps, MenuSelect } from '../MenuSelect';

const initialProps: MenuSelectProps = {
  children: null,
  placeholder: 'Choose an option',
  options: [
    {
      label: 'Option 1',
      value: 'foo',
    },
    {
      label: 'Option 2',
      value: 'foo',
    },
    {
      label: 'Option 3',
      value: 'foo',
    },
  ],
};

describe('MenuSelect', () => {
  it('should render the select with options and a placeholder', () => {
    const { getByTestId, getAllByTestId } = setup(MenuSelect)(initialProps);
    const menuSelectButtonEl = getByTestId('menu-select-button');
    const menuSelectItemEl = getAllByTestId('menu-select-item');

    expect(menuSelectButtonEl).toHaveTextContent(initialProps.placeholder);
    expect(menuSelectItemEl).toHaveLength(initialProps.options.length);
  });

  it('should set a selected value', () => {
    const { getByTestId, getAllByTestId } = setup(MenuSelect)({
      ...initialProps,
      onChange: () => null,
    });

    const menuSelectButtonEl = getByTestId('menu-select-button');
    const menuSelectItemEl = getAllByTestId('menu-select-item');

    fireEvent.click(menuSelectButtonEl);
    fireEvent.click(menuSelectItemEl[2]);

    expect(menuSelectButtonEl).toHaveTextContent(initialProps.options[2].label);
  });

  it('should return a empty state message', () => {
    const { getAllByTestId } = setup(MenuSelect)({
      ...initialProps,
      options: [],
    });

    const menuSelectItemEl = getAllByTestId('menu-select-item');

    expect(menuSelectItemEl[0]).toHaveTextContent('No options.');
  });
});
