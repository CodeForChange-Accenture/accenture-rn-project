/*import React from 'react';
import Home from '../../src/screens/LoginHome';
import * as redux from "react-redux";
import { render } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: jest.fn(),
        navigate: ({ children }: { children: React.ReactNode }) => children
    }
})

const mockUseState = jest.fn();
jest.mock("react", () => {
  return {
    React: jest.fn(),
    useState: () => mockUseState
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

const mockDispatch = jest.fn();
jest.mock("react-redux", () => {
  return {
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
  };
});

const mockNative = jest.fn();
jest.mock("styled-components/native", () => {
  return {
    Styled: jest.fn(),
    View: () =>mockNative,
    Image: () =>mockNative,
    Text: ()=>mockNative,
    TextInput: ()=>mockNative,
    TouchableOpacity: ()=>mockNative,
  };
});

describe('Home app', () => {
    it('Find components', () => {
        const { debug } = render(<Home />)
        debug();
    })
})*/