/**
 * ScrollTarget Higher Order Component
 * Scroll functionality in one place for use on any component
 */
import React from 'react';
import scroll from 'scroll-to';


// This function takes a component...
export default function withScrollTarget(WrappedComponent) {

  // ...and returns another component...
  return class extends React.Component {

    componentDidUpdate(prevProps, prevState) {
      if (prevProps !== this.props && this.props.active) {
        const offset = this.calculateScrollOffset(this.wrapper);
        scroll(0, offset);
      }
    }

    calculateScrollOffset(element, offset) {
      offset = offset || 0; // additional offset to top

      const body = document.body,
          html = document.documentElement;
      const elementRect = element.getBoundingClientRect();
      const clientHeight = html.clientHeight;

      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const scrollPosition = elementRect.top;
      const maxScrollPosition = documentHeight - clientHeight;

      return Math.min(scrollPosition + offset + window.pageYOffset, maxScrollPosition);
    }

    render() {
      return (
        // extra div to be safe as ref doesn't work properly with styled components :(
        <div ref={(ref) => { this.wrapper = ref; }}>
          <WrappedComponent  {...this.props} />
        </div>
      );
    }
  };

}



