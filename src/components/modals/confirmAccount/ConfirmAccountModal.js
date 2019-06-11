// core
import React from 'react';
import { Link } from 'react-router-dom';

// css
import stylesForms from '../../../styles/global/globalForm.module.scss';
import stylesModal from '../../../styles/global/globalModal.module.scss';
import '../../../styles/keyframes/fadeIn.css';
import '../../../styles/keyframes/fadeOut.css';
import './ConfirmAccountModal.scss';

export default class ConfirmAccountModal extends React.Component {

    constructor(props) {
        console.log("ConfirmAccountModal props",props)
        super(props);
        this.state = {
            open: this.props.modalOpen || false, 
            header: this.props.modalHeader || "",
            body:  this.props.modalBody || "",
            callback: this.props.callback || null
        }
    }

    closeModal = (e) => {
        this.setState({
            open: false       
        }, () => {
            if (this.state.callback !== null) {
                this.state.callback(false); //close
            }
        })
    }

    render() {    
        return (
            <div className={((this.state.open === true) ? stylesModal["open"] : "") + " " + stylesModal["default-modal"]}>
                <div className={stylesModal["wrapper-modal"]}>
                    <button type="button" className={stylesModal["button"] + " " + stylesModal["button-close-modal"]} onClick={(e) => this.closeModal(e)}>X</button>
                    <div className={stylesModal["header-modal"]}>
                        <h3>{this.state.header}</h3>                        
                    </div>
                    <div className={stylesModal["body-modal"]}>
                        {this.state.body}
                    </div>
                </div>         
            </div>
        );
    }
}