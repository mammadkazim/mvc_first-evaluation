import { Api } from "./api.js";
import { View } from "./view.js";
export const Model = ((api, view) => {
  const { getCourses } = api;
  class State {
    #courseList = [];

    get courseList() {
      return this.#courseList;
    }

    set courseList(newlist) {
      this.#courseList = [...newlist];
      const leftContainer = document.getElementById(view.domstr.leftContainer);
      const templ = view.createTempl(this.#courseList);
      view.render(leftContainer, templ);
    }
  }

  return {
    getCourses,
    State,
  };
})(Api, View);
