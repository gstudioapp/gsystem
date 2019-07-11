import React from 'react';
import StyleResolver from '../../scripts/style-resolver'
import $Style from './Test.style'

// import PropTypes from 'prop-types'

export default class Test extends React.Component {

    constructor(props) {
        super();

        this.state = {
            style : {}
        }
    }
    
    render() {
        const style = StyleResolver(this.props, $Style)
        return <div style={style}>
            <h3>Color Tokens</h3>
            {/* <label>Color Neutral</label> */}
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    }
}