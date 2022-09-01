/*~~~~~~~~~~~View~~~~~~~~~~~*/
export const View = (() => {
  const domstr = {
    leftContainer: "available-courses",
    rightContainer: ".selected-courses",
    totalCredit: ".total-credit",
    selectButton: ".select-button",
    listItem: ".list-item",
  };
  const render = (elem, templ) => {
    elem.innerHTML = templ;
  };
  const createTempl = (arr) => {
    let templ = `<h3>Available Courses</h3>`;
    arr.forEach((course) => {
      templ += `
        <li class="list-item">
        ${course.courseName} </br>
        Course type: ${course.required === true ? "compulsory" : "Elective"} </br>
        Course credit: ${course.credit}
        </li>
        `;
    });
    return templ;
  };
  return {
    render,
    domstr,
    createTempl,
  };
})();
