import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store';
import './App.css';
import { AppBase } from '@kbase/ui-lib';
import View from './components/views/first';

const store = createReduxStore();

interface AppProps {}

interface AppState {}

export default class App<AppProps, AppState> extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppBase>
                    <View />
                </AppBase>
            </Provider>
        );
    }
}
