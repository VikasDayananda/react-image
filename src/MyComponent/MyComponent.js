// Demo component
// this is only example component

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './MyComponent.style.scss'

const customStyles = (props) => {
  return {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: props.width ? props.width : "80%",
      height: props.height ? props.height : "80%",
    }
  }

};

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    }
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({showImage: false})
  }

  componentDidMount() {
  }

  render() {
    const {src} = this.props;
    return (
      <div>
        <Modal
          closeTimeoutMS={10}
          isOpen={this.state.showImage}
          onRequestClose={this.closeModal}
          style={customStyles(this.props)}
        >
          <div>
            <img src={src} alt={"image"} height="100%" width="100%" style={{cursor: 'pointer'}}
            />
          </div>
        </Modal>
        <img src={src} alt={"image"} height="200" width="200" style={{cursor: 'pointer'}}
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
