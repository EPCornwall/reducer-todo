import React, {useState, useReducer} from 'react';
import {Reducer, initialState } from './reducers/Reducer'


export default function Form (){
    let[newItemText, setNewItemText] = useState("")
    let [state, dispatch] = useReducer(Reducer, initialState)

    const handleChange = (e) =>{
        setNewItemText(e.target.value)
    }
    // console.log(state)
    return(
        <div>
            <div>
                {state.items.map ((item) =>(
                    <p key={item.id}
                    className = {`item ${item.completed ? 'done': ''}`}
                    onClick={() =>{
                        dispatch({ type: "TOGGLE_DONE", payload: item})
                    }}>
                        {item.name}</p> 
                ))}
            </div>
            <form>
                <label>
                    Add New Item: 
                    <input
                    name="newItemText"
                    value={newItemText}
                    onChange={handleChange}>
                    </input>
                </label>
                <button type="button"
                onClick={() =>{
                    dispatch({ type: "ADD_ITEM", payload: newItemText})
                }}>Add</button> 
            </form>
            <button
            onClick={() =>{
                dispatch({ type: "CLEAR_DONE"})
            }}>Clear Done</button>
        </div>
    )
}