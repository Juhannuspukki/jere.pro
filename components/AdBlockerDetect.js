import React from 'react'

class AdBlockerDetect extends React.Component {
  state = {
    usingAdblock: true,
  };

  componentDidMount() {
    this.setState({ usingAdblock: this.fakeAdBanner.offsetHeight === 0 });
  }

  render() {
    if (this.state.usingAdblock === false) {
      return this.props.children;
    }

    return (
      <div
        ref={r => (this.fakeAdBanner = r)}
        style={{ height: '1px', width: '1px', visiblity: 'none', pointerEvents: 'none' }}
        className="adBanner"
      />
    );
  }
}

export default AdBlockerDetect
