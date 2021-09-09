import React from 'react';
import { Link } from 'react-router-dom';

function Landingpage() {
    return (
        <div>
            <Link to='/home'>
                <button>
                    Welcome
                </button>
            </Link>
        </div>
    )
}

export default Landingpage;
