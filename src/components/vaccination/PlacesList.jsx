import React from 'react';

export const vaccinationsPlacesList = ({places}) => (
    <ul>
        { places.map(user => <li key={user.id}>{user.first_name + " " + user.last_name}</li>) }
    </ul>
)