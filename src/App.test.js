import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { shallow } from "enzyme";
import "./setupTests";

describe("Header component", () => {
  it("opens and closes SideBar correctly", () => {
    const wrapper = shallow(<Header />);
    const sideBar = wrapper.find("SideBar");

    // Проверяем, что изначально боковая панель не активна
    expect(sideBar.prop("className")).toBe("");

    // Симулируем клик на бургер-меню
    wrapper.find("#bur").simulate("click");
    expect(sideBar.prop("className")).toBe("active");

    // Симулируем клик на крестик
    sideBar.prop("onClickClose")();
    expect(sideBar.prop("className")).toBe("");
  });
});
