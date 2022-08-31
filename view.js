/*~~~~~~~~~~~View~~~~~~~~~~~*/
export const View = (() => {
  const domstr = {
    leftContainer: ".available-courses",
    rightContainer: ".selected-courses",
    totalCredit: ".total-credit",
    selectButton: ".select-button",
  };
  const render = (elem, templ) => {
    elem.innerHTML = templ;
  };
  const createTempl = (arr) => {
    let templ = "";
    arr.forEach((course) => {
      templ += `
        <p>${course.courseName}</p>
        <p>Course type:${course.required === true ? "compulsory" : "Elective"}</p>
        <p>Course credit:${course.credit}</p>
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
