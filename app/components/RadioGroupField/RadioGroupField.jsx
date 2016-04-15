import React, {Component, PropTypes} from 'react';

import {RadioGroup, RadioButton} from 'react-toolbox/lib/radio';

require('./styles.css');


export default class RadioGroupField extends Component {

    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        className: PropTypes.string,
        options: PropTypes.array
    };

    render() {
        const {options, question, name, value} = this.props;
        let radioButtons = options.map((option, index) => {
            return <RadioButton label={option} value={option} key={''+Date.now()+''+index}/>;
        });

        return (
            <div className='radio-group-field'>
                <h5>{question}</h5>
                <RadioGroup ref='group' name={name} value={value} onChange={this.handleChange}>
                    {radioButtons}
                </RadioGroup>
            </div>
        )
    }

    handleChange = (value) => {
        this.props.onChange(value);
    };

}
