// Demo component
// this is only example component

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import './rbm-complete.scss'
class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showImage: true
    }
    this.closeModal=this.closeModal.bind(this);
  }
  closeModal(){
    this.setState({showImage: false})
  }
  componentDidMount() {
  }

  render() {
    const {image} = this.props;
    return (
      <div>
        <Modal
          show={this.state.showImage}
          onHide={this.closeModal}
          aria-labelledby="ModalHeader"
          dialogClassName="custom-modal"        >
          <Modal.Body>
            <img src={image} alt={"image"} height="100%" width="100%" style={{cursor: 'pointer'}}
            />
          </Modal.Body>
        </Modal>
        <img src={image} alt={"image"} height="200" width="200" style={{cursor: 'pointer'}}
          onClick={() => this.setState({showImage: true})}
        />
      </div>
    )
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default MyComponent;
