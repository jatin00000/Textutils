import React from 'react'

function Alert(props) {
    function capitalize(word) {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        //function to capitalize success

        // It is a type of syntax 
        // if props.alert is true then only part after && is executed otherwise if it becomes false
        // as in starting, remaining part is not executed
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {capitalize(props.alert.type)}: {props.alert.message}
        </div>
    )
}

export default Alert