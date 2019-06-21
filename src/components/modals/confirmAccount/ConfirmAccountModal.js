// core
import React from 'react';
import { Link } from 'react-router-dom';

// utils
import { validate, checkError } from '../../../utils/FormValidations';

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
            callback: this.props.callback || null,
            submitProgress: false,
            submitButton: false,
            confirmation: "",
            error: {
                confirmation: {
                    valid : null,
                    msg: ""  
                }                
            }
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

    onSubmitHandler = (e) => {
        let that = this;
        that.setState({ 
            submitButton : false,
            submitProgress : true
        });
        checkError(that.state.error).then((data) => {
            if (data.length === 0) {
                //proceed post
                console.log("Posting...");                  
                that.closeModal(e);
            } else {
                that.setState({ 
                    submitButton : true,
                    submitProgress : false
                });
                
            }
        }); 
        e.preventDefault();
    }

    onChangeHandler = (e) => {   
        //console.log("onChangeHandler",e);
        let that = this;    
        let element = e.target || e || null;
        let matchObj = null;

        that.setState({ 
            [element["name"]] : element.value
        }, () => {
            
            if (element) {
                validate(element,matchObj).then((arrObj) => {
                arrObj.map((obj) => {
                    if (obj != null) {
                        that.setState({ 
                        error: Object.assign(
                            {}, 
                            that.state.error, 
                            { [obj.name] : { valid : obj.bool, msg : obj.msg }}
                        )                        
                        })
                    }
                    return true;              
                });
            }).then(() => {            
                checkError(that.state.error).then((data) => {
                    if (data.length === 0) {
                        that.setState({ 
                        submitButton : true,
                        submitProgress : false
                        });
                    } else {
                        that.setState({ 
                        submitButton : false,
                        submitProgress : false
                        });
                    }
                    });    
                });
            }                
        });
    }

    render() {    
        return (
            <div className={((this.state.open === true) ? stylesModal["open"] : "") + " " + stylesModal["default-modal"]}>
                <div className={stylesModal["wrapper-modal"]}>
                    <button type="button" className={stylesModal["button"] + " " + stylesModal["button-close-modal"] + " icon-cross-mark"} onClick={(e) => this.closeModal(e)}></button>
                    <div className={stylesModal["header-modal"]}>
                        <h3>{this.state.header}</h3>                        
                    </div>
                    <div className={stylesModal["body-modal"]}>
                        {this.state.body}
                        <form noValidate onSubmit={(e) => this.onSubmitHandler(e)}>
                            <input 
                                type="text" 
                                id="confirmation"
                                name="confirmation" 
                                placeholder="confirmation number"            
                                onChange = {(e) => this.onChangeHandler(e)}
                                className={(this.state.error.confirmation.valid === false) ? stylesForms["error"]  : ""}
                                required
                            />
                            <label htmlFor="confirmation" className={((this.state.error.confirmation.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.confirmation.msg}</label> 
                            <input 
                                type="submit" 
                                value="Confirm"
                                className = {(this.state.submitProgress) ? stylesForms["progress"]  : ""}
                                disabled = {!this.state.submitButton}
                            />
                        </form>
                    </div>
                </div>         
            </div>
        );
    }
}