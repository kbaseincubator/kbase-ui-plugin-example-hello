import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store';
import './App.css';
// import { AppBase, DevWrapper } from "@kbase/ui-lib";
import AppBase from './kbaseUI/components/AppBase';
import View from './View-redux';

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
