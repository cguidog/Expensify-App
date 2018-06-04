import React from 'react';

const EditExpensePage = (props) => {

    return (
        <div>
            You can edit the expense {props.match.params.id} here.
        </div>
    );
};

export default EditExpensePage;

