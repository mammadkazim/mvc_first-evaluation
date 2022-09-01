/*~~~~~~~~~~~Api~~~~~~~~~~~~*/
export const Api = (() => {
    const baseUrl = "http://localhost:4232";
    const coursesPath = "courseList";
  
    const getCourses = () => {
      return fetch([baseUrl, coursesPath].join("/")).then((response) =>
        response.json()
      )
    };
  
    // const deleteCourses = (id) => {
    //   return fetch([baseUrl, todosPath, id].join("/"), { method: "DELETE" }).then(
    //     (response) => response.json()
    //   );
    // };
  
    // const addCourse = (newTodo) => {
    //   return fetch([baseUrl, todosPath].join("/"), {
    //     method: "POST",
    //     body: JSON.stringify(newTodo),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   }).then((response) => response.json());
    // };
    return {
      getCourses
    };
  })();