import React, { Component } from 'react'
import Menu from './Menu'

class Home extends Component {
    render() {
        // this.props.match.path 这个值就是 location.pathname
        let path = this.props.match.path
        console.log('path in home', this.props)
        return (
            <div>
                {/*Home 组件中渲染 Menu 组件*/}
                <Menu path={path}/>
            </div>
        )
    }
}

export default Home
