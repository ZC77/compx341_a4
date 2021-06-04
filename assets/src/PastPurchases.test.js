import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from '../src/modules/pastPurchases/PastPurchases'
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { userInfo } from 'os';

configure({ adapter: new Adapter() });
const pp = shallow(<PastPurchases />)
const testEmail = "test@amazon.com"


/*test("Has correct header (Past purchases)", () => {
    expect(pp.find('#Header').text()).toEqual('Past purchases');
})*/

test("Email correctly displayed", () => {
    pp.setState({userInfo: {attributes: {email: testEmail}}})
    expect(pp.find('#Email').text()).toEqual(`Hello ${testEmail}!`);
})
