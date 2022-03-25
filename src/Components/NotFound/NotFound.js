import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../images/404.png"
const NotFound = () => {
    return (
        <div>
            <h1>notfound</h1>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;