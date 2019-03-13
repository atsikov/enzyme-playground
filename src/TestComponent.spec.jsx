import * as React from "react";
import { mount } from "enzyme";

import { TestComponent } from "./TestComponent";

window.requestAnimationFrame = (cb) => {
    cb();
    return 1;
}

it("should render", () => {
    const wrapper = mount(<TestComponent imagePath="cached.jpg" />);
    console.log(wrapper.html());
    expect(wrapper.html()).not.toBe("");
});
