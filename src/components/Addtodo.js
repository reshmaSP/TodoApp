
// in form value is the initial value of textfiel
// for button value attribute is the text on button
import React, { useState } from 'react'

export const Addtodo = (props) => {
    const[title,settitle] = useState("");
    const[desc,setdesc]=useState("");
    
    const submit=(e)=>{
        // to stop page from reloading
        e.preventDefault();

        if(!title && !desc){alert("submitted field cannote be empty");}
        else{
            props.addtodo(title,desc);
        }
    }
    
    return (
        <>
        <form onSubmit={submit} >
            <div className='container'>
                <h4 className='mt-3 mb-3'>Add a Todo</h4>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Name</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>{settitle(e.target.value)}} id="title" placeholder="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Details</label>
                    <input type="text" value={desc} className="form-control"onChange={(e)=>{setdesc(e.target.value)}} id="desc" placeholder="desc" />
                </div>
                <button type="submit" className='btn btn-success'>Add Task</button>
            </div>
            </form>
        </>
    );
}
