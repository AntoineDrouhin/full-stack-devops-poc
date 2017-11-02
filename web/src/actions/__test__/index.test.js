import * as action from "../"

describe("actions", () => {
    it("should create an action to add a todo", () => {
        const text = "Go eat something"
        const expectedAction = {
            type: "ADD_TODO",
            text
        }
        expect(action.addTodo(text).text).toEqual(expectedAction.text)
        expect(action.addTodo(text).type).toEqual(expectedAction.type)
        expect(typeof action.addTodo(text).id).toEqual("number")
    })
    it("should create an action to set the visibility filter", () => {
        const filter = "SeeNada"
        const expectedAction = {
            type: "SET_VISIBILITY_FILTER",
            filter
        }
        expect(action.setVisibilityFilter(filter)).toEqual(expectedAction)
    })
    it("should create an action to toggle a todo", () => {
        const id = 123
        const expectedAction = {
            type: "TOGGLE_TODO",
            id
        }
        expect(action.toggleTodo(id)).toEqual(expectedAction)
    })
})

