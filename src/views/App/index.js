import React from "react"
import styled from "styled-components"

// Styles
import $ from './styles'

console.info(123, $())

const GSDiv = styled.div`
    ${$()}
`

export default class App extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return <GSDiv>
            <h1>GSystem initial structure.</h1>
        </GSDiv>
    }
}