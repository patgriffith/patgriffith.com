import { shallowMount } from '@vue/test-utils';
import jestConfig from '../jest.config';
import Footer from './Footer';

jest.mock('~/components/TitleTwister.vue', () => {})
jest.mock('~/components/ChatWidget.vue', () => {})

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Footer);
  })

  it('should render <Footer/> without crashing', () => {
    expect(wrapper.element).toMatchSnapshot();
  })
})
