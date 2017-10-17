/**
 * https://codepen.io/brian-baum/pen/mJZxJX
 * @type {Object}
 */

const smoothScroll = {
  timer: null,

  stop() {
    clearTimeout(this.timer);
  },
  scrollTo(node, callback) {
    const settings = {
      duration: 1000,
      easing: {
        outQuint(x, t, b, c, d) {
          /* eslint-disable */
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          /* eslint-enable */
        },
      },
    };

    const nodeTop = node.offsetTop;
    const nodeHeight = node.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowHeight = window.innerHeight;
    const offset = window.pageYOffset;
    const delta = nodeTop - offset;
    const bottomScrollableY = height - windowHeight;
    /* eslint-disable */
    const targetY = (bottomScrollableY < delta) ?
      bottomScrollableY - (height - nodeTop - nodeHeight + offset):
      delta;
    /* eslint-enable */
    const startTime = Date.now();
    let percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }
    function step() {
      const elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        const yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  },
};

export default smoothScroll;
