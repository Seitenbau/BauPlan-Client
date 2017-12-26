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
          align: 'top',
          duration: this.duration,
        });
      }
    }

    render() {
      return (
        // extra div to be safe as ref doesn't work properly with styled components :(
        <div ref={(ref) => { this.wrapper = ref; }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };

}



