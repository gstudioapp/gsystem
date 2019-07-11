import React from 'react';
import StyleResolver from '../../scripts/style-resolver'
import $Style from './Button.style'

import PropTypes from 'prop-types'

export default class Button extends React.Component {

    static propTypes = {
        // baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /** Description of prop "type". */
        type: PropTypes.string,
        modifier: PropTypes.string,
        state: PropTypes.string
    }
    
    static defaultProps = {
        type : 'containedButton'
    }

    constructor(props) {
        super();

        this.state = {
            style : {}
        }
    }
    
    render() {
        const style = StyleResolver(this.props, $Style)
        return <button style={style}>{this.props.children}</button>
    }
}