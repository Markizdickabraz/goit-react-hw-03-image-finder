import React, { Component } from "react";
import { Overlay, ModalStyled } from "./modalStyled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', e => {
            if (e.code === 'Escape') {
                console.log(e.code);
                console.log(this.props.onClick);    
                // this.props.onClick()
            }
        })
    }

    componentDidUpdate(){
        
    }

    

    render() {
        return createPortal(
            <Overlay onClick={this.props.onClick}>
                <ModalStyled>{this.props.children}</ModalStyled>
            </Overlay>, modalRoot
        )
    }
}