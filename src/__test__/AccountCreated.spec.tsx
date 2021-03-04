/*import React from 'react';
import AccountCreated from '../../src/screens/AccountCreated';
import { render } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: jest.fn(),
        navigate: ({ children }: { children: React.ReactNode }) => children
    }
})

const mockUseEffect = jest.fn();
jest.mock("react", () => {
  return {
    React: jest.fn(),
    useEffect: () => mockUseEffect
  };
});

const mockComponent = jest.fn();
jest.mock("react-native", () => {
  return {
    ReactNative: jest.fn(),
    View: () =>mockComponent,
    Text: () => mockComponent,
    Alert: () => mockComponent,
    ScrollView: () => mockComponent

  };
});

const mockNative = jest.fn();
jest.mock("styled-components/native", () => {
  return {
    Styled: jest.fn(),
    styled: () =>mockNative,
    Image: () =>mockNative,
    Text: ()=>mockNative,
    TextInput: ()=>mockNative,
    TouchableOpacity: ()=>mockNative,
    View: () =>mockNative,

  };
});

describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<AccountCreated />)
        debug();
    })
})*/