import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../reducers/patientReducer';

const PatientManagement = () => {

    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ 
            type: "ADD_PATIENT", 
            name: nameRef.current.value, 
            id: state.patient.length + 1
        })
        nameRef.current.value = '';
    }

    return (
        <div>
            <h1> Patient Management: {state.patient.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patient.map(pt => <li 
                    key={pt.id}
                    onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                    >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;