import reducer from "../todos.js"

describe("todos reducers", () => {

    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    it("should handle ADD_TODO", () => {
        expect(
            reducer([], {
                type: "ADD_TODO",
                text: "Run the tests",
                id: 0
            })
        ).toEqual([
            {
                text: "Run the tests",
                completed: false,
                id: 0
            }
        ])


        expect(
            reducer(
                [
                    {
                        text: "Use Redux",
                        completed: true,
                        id: 0
                    }
                ],
                {
                    type: "ADD_TODO",
                    text: "Eat something",
                    id: 1
                }
            )
        ).toEqual(
            [
                {
                    text: "Use Redux",
                    completed: true,
                    id: 0
                },
                {
                    text: "Eat something",
                    completed: false,
                    id: 1
                }
            ]
        )
    })

    it("should handle TOGGLE_TODO", () => {
        expect(
            reducer(
                [
                    {
                        text: "Eat tomatoes",
                        completed: true,
                        id: 123
                    }
                ],
                {
                    type: "TOGGLE_TODO",
                    id: 123
                }
            )
        ).toEqual(
            [
                {
                    text: "Eat tomatoes",
                    completed: false,
                    id: 123
                }
            ]
        )
        

        expect(
            reducer(
                [
                    {
                        text: "Eat tomatoes",
                        completed: false,
                        id: 123
                    }
                ],
                {
                    type: "TOGGLE_TODO",
                    id: 123
                }
            )
        ).toEqual(
            [
                {
                    text: "Eat tomatoes",
                    completed: true,
                    id: 123
                }
            ]
        )
        
    })
    
})

