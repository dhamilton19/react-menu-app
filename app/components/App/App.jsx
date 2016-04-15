import React, {Component} from 'react';

import ToolboxApp from 'react-toolbox/lib/app'
import Alert from '../Alert';
import OrderPage from '../OrderPage';

require('./styles.css');


export default class App extends Component {

    render() {
        return (
            <ToolboxApp>
                <Alert />
                <OrderPage />
            </ToolboxApp>
        )
    }
}
