// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom has no IntersectionObserver, which framer-motion's whileInView needs.
// This stub never reports an intersection, so in-view animations stay in their initial state.
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
