import { Model } from "./model.js";
import { View } from "./view.js";
export const Controller = ((model, view) => {
  const state = new model.State();

  const selectCourse = () => {
    const leftContainer = document.getElementById(view.domstr.leftContainer);
    console.log(leftContainer)
    leftContainer.addEventListener("click", (e) => {
      e.target.classList.toggle("clicked");
      
        // elem.selected = elem.selected === false ? true : false;
        // let selectedCourses = availableCourses.filter(
        //   (item) => item.selected === true
        // );
        // console.log(selectedCourses);
        // totalCreditValue = selectedCourses.reduce(
        //   (acc, cur) => acc + cur.credit,
        //   0
        // );
        // totalCredit.innerHTML = totalCreditValue;
        // if (totalCreditValue > 18)
        //   alert("You can not choose more than 18 credits in one semester");
    })
  }
  // const deleteTodo = () => {
  //   const ulContainer = document.getElementById(view.domstr.todoList);
  //   ulContainer.addEventListener("click", (e) => {
  //     if (e.target.className === "delete-btn") {
  //       state.todoList = state.todoList.filter(
  //         (item) => +item.id !== +e.target.id
  //       );
  //       model.deleteTodo(e.target.id);
  //     }
  //   });
  // };
  // const addTodo = () => {
  //   const inputBox = document.querySelector(view.domstr.inputBox);
  //   inputBox.addEventListener("keyup",(e)=>{
  //     if(e.code === "Enter" && e.target.value.trim()) {
  //       const newTodo = new model.Todo(e.target.value)
  //       model.addTodo(newTodo).then(item=>{
  //         console.log(item)
  //         state.todoList = [item,...state.todoList]
  //       })
  //       e.target.value = ''
  //     }
  //   })
  // };

  const init = () => {
    model.getCourses().then((courses) => {
      state.courseList = courses;
    });
  };

  const bootstrap = () => {
    init();
    selectCourse();
  };
  return {
    bootstrap
  };
})(Model, View);
