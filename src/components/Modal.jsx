import React,{Component,createRef} from 'react';
import {connect} from 'react-redux'



const styles = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        maxWidth: 600,
        minHeight: 200,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius:'5px'

    },
};

 class Modal extends Component {
    backDrop = createRef()
    modalDrop = createRef()

    componentDidMount() {
        window.addEventListener('click',this.handleWindowClick)
        window.addEventListener('keydown', this.handleEscCloseModalWindow)
    }
    componentWillUnmount() {
        window.removeEventListener('click',this.handleWindowClick)
        window.addEventListener('keydown', this.handleEscCloseModalWindow)

    }

    handleEscCloseModalWindow=(e)=>{
        const {onClose}= this.props
        if(e.keyCode === 27){
            onClose()
        }

    }

    handleWindowClick= e => {
        const isTargetInBackDrop = this.backDrop.current.contains(e.target)
        const isTargetInModalDrop = this.modalDrop.current.contains(e.target)
        const {onClose}=this.props

        if ( isTargetInBackDrop && !isTargetInModalDrop) {
          onClose()
        }
    }

    render() {
         const { onClose } = this.props;

        return (
            <div className='Modal' style={styles.backdrop} ref={this.backDrop}>
                <div style={styles.modal} ref={this.modalDrop}>
                    <p>
                        {JSON.stringify(this.props.order)}
                    </p>
                    <button className='center' type="button" onClick={onClose} ref={this.backDrop}>
                        Close
                    </button>
                </div>
            </div>
        );
    }
}


const mStP = state =>({
    order: state.orders.order
})

export default connect(mStP)(Modal)