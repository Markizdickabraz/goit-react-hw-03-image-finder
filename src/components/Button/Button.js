import { BtnLoadMore } from 'components/Button/buttonStyled'
import React, {Component} from 'react'

class LoadMore extends Component {
    
    state = {
    perPage:12
}

    onClick = () => {
        this.props.click(this.state)
    }
    
    render() {
        return (
            <BtnLoadMore type='button' onClick={this.onClick}>Load more</BtnLoadMore>
        )
    }
}

export default LoadMore;