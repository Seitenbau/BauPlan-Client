/**
 * ScrollTarget Higher Order Component
 * Scroll functionality in one place for use on any component
 */
import React from 'react';
import scrollToComponent from 'react-scroll-to-component';


// This function takes a component...
export default function withScrollTarget(WrappedComponent) {

  // ...and returns another component...
  return class extends React.Component {

    duration = 1000;

    componentDidUpdate(prevProps, prevState) {
      if (prevProps !== this.props && this.props.active) {
        scrollToComponent(this.wrapper, {
          offset: this.props.scrollOffset || 0,
          align: 'top',
          duration: this.duration,
        });
      }
    }

    render() {
      return (
        <WrappedComponent ref={(ref) => { this.wrapper = ref; }} {...this.props} />
      );
    }
  };

}



