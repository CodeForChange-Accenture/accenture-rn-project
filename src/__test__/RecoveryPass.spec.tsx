/*import React from 'react';
import RecoveryPass from '../../src/screens/NewPassword';
import { render } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: jest.fn(),
        navigate: ({ children }: { children: React.ReactNode }) => children
    }
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


const mockUseState = jest.fn();
jest.mock("react", () => {
  return {
    React: jest.fn(),
    useState: () => mockUseState
  };
});

describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<RecoveryPass />)
        debug();
    })
})*/