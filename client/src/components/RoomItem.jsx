import React from 'react';

const RoomItem = ({ name, description }) => {
    return (
        <>

            <div>
                <span>{name}</span>
                <p>{description}</p>
            </div>
        </>
    );
};

export default RoomItem;
