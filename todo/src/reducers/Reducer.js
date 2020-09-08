

export let initialState = {
    items : [
    {
        name: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        name: 'Take a Nap',
        completed: false,
        id: 3892987590
    }
]}

export const Reducer = function (state = initialState, action){
    switch(action.type){
        case "ADD_ITEM":
            let newItem= {
                name: action.payload,
                completed:false,
                id:new Date()
            }
            return{
                ...state,
                items: [...state.items, newItem]
            }
        case "TOGGLE_DONE":
            const newItems = state.items.map((item) =>{
                if (item.id === action.payload.id){
                    return{
                        ...item,
                        completed: !action.payload.completed
                    }
                }
                else return item
            })
            return{
                ...state,
                items: newItems
            }
        case "CLEAR_DONE":
            const doneItems = state.items.filter(item => item.completed === false)
            return{
                ...state,
                items: doneItems
            }
        default:
            return state
    }
}

