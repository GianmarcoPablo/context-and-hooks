const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return console.log("add task")
        case "DELETE_TASK":
            return console.log("delete task")
        case "EDIT_TASK":
            return console.log("edit task")
        default:
        return state
    }
}