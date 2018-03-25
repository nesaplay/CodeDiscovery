import 'raf/polyfill'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

window.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
  return 0;
};


global.shallow = shallow
global.render = render
global.mount = mount