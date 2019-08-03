import React from 'react';
import StyleResolver from '../../scripts/style-resolver'
import $Style from './Test.style'
const Tokens = require('../../temp/tokens-temp.json').tokens

export default class Test extends React.Component {

    constructor(props) {
        super();

        this.state = {
            style : {}
        }

        this.renderTokens = this.renderTokens.bind(this)
        this.objToArray = this.objToArray.bind(this)
    }

    renderTokens() {
        return Tokens.map((item, index) => {
            console.log(123, item)
            return <div>
                <h2>{item.title}</h2>
                { Array.isArray(item.values) ? item.values.map((itemValue, valueIndex) => <div>
                    <h4>{itemValue.title}</h4>
                    <select>
                        {
                            this.objToArray(itemValue.values).map((option, optionIndex) => <option key={optionIndex} value={option.value}>
                                { option.label }
                            </option>)
                        }
                    </select>
                </div>) : <div>
                    <select>
                        {
                            this.objToArray(item.values).map((option, optionIndex) => <option key={optionIndex} value={option.value}>
                                { option.label }
                            </option>)
                        }
                    </select>
                </div> }
            </div>
        })
    }

    objToArray(obj) {
        let keys = Object.keys(obj)
        ,   result = []
        
        for(let i = 0, lgt = keys.length; i < lgt; i++) {
            result.push({
                "label" : keys[i],
                "value" : obj[keys[i]]
            })
        }

        return result
    }

    render() {
        const style = StyleResolver(this.props, $Style)
        return <div style={style}>
            { this.renderTokens() }
        </div>
    }
}