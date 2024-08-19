import { Component } from "react";

class ImageComponent extends Component {
    render () {
        return(
            <>
            <h4>Class Component</h4>
            <img src= {this.props.src} alt= {this.props.alt} />
            </>
        )
    }
}

export default ImageComponent