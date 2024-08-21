import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    // eslint-disable-next-line react/jsx-no-undef
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    // eslint-disable-next-line react/jsx-no-undef
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               { dialogsElements }
           </div>
           <div className={s.messages}>
               { messagesElements }
           </div>
        </div>
    )
}
export default Dialogs;