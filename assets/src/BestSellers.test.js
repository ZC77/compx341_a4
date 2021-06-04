import React from 'react';
import ReactDOM from 'react-dom';
import BestSellers from "../src/modules/bestSellers/BestSellers";
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("Has correct header", () => {
    const bs = shallow(<BestSellers />)
    expect(bs.find('#Header').text()).toEqual('Top 20 best sellers');
})
