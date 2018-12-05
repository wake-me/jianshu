import React, {Component} from 'react';
import {GlobalStyle} from './style';
import Header from './common/header';
import {IconFontGlobalStyle} from './statics/iconfont/iconfont'

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <IconFontGlobalStyle/>
                <Header/>
            </div>
        );
    }
}

export default App;
