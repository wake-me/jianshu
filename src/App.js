import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {GlobalStyle} from './style';
import Header from './common/header';
import {IconFontGlobalStyle} from './statics/iconfont/iconfont'
import store from './store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <IconFontGlobalStyle/>
                <Header/>
            </Provider>
        );
    }
}

export default App;
