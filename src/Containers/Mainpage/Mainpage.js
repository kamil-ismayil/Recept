import React, {useContext, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../../Hoc/Layout/Layout';

const startpage = React.memo( (props) => {

    return (
        <div>
            <p>Här ska vara recepter, login, favoritter</p>
        </div>
    )
})

export default startpage; 