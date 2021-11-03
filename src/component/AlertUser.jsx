import React from 'react';

function AlertUser(props){
    return (
        <div>
            <button onClick={()=> alert("Alert")}>Select</button>
        </div>
    )
}
export default AlertUser;