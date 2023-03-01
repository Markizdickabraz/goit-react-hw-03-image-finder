import React, { Component } from "react";
import { Overlay, ModalStyled } from "./modalStyled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.clickToEsc)
    }

    componentWillUnmount(){
        window.removeEventListener ('keydown', this.clickToEsc)
    }

    clickToEsc = (e) =>{
        if (e.code === 'Escape') {
                console.dir(this.props.onClick);    
                this.props.onClick()
            }
    }
    

    render() {
        return createPortal(
            <Overlay onClick={this.props.onClick}>
                <ModalStyled>{this.props.children}</ModalStyled>
            </Overlay>, modalRoot
        )
    }
}