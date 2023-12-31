import { Component } from 'react'
import css from './Modal.module.css'

export class Modal extends Component {

  
  handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  }

  handleModalOnEscClose = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.handleModalOnEscClose)
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    window.removeEventListener('keydown', this.handleModalOnEscClose)
  }
  
  render() {
  return (
    <div className={css.overlay} onClick={this.handleCloseModal}>
      <div className={css.modal}>
        <img src={this.props.modalData} alt="" />
      </div>
    </div>
  )
  }
  
}