import react, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote = (props) => {



    const [expand, setExpand] = useState(false);



    const [note, setNote] = useState({

        title: "",
        content: "",

    })


    const InputEvent = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setNote((prevData) => {
            return ({ ...prevData, [name]: value })
        })
    }

    const addEvent = (event) => {
        props.passNote(note);

        setNote({

            title: "",
            content: "",

        })
    }




    const expandit = () => {
        setExpand(true);
    }
    return (<>

        <div className="main_note">

            <form>

                {expand ? <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"  ></input> : null}

                <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="write a note" onClick={expandit} ></textarea>


                <Button onClick={addEvent}>
                    <AddIcon className='plus_sign' />
                </Button>

            </form>



        </div>




    </>)
}


export default CreateNote;