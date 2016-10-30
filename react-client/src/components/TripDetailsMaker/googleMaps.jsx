import React from 'react';

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyDlb4l9uPVp_QyEgxGhVAjDktvUdBkBKS8'
})(Container)