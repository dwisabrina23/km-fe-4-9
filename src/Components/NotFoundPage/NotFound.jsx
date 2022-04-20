import React from "react";
import {useHistory} from 'react-router-dom';
function NotFound() {
    const history = useHistory();
    const handleNavigate = () => {
        history("/");
    }
    return (
        <div class="container">
            <div class="row nf-wrapper">
                <div class="col-md-6 align-self-center text-center">
                    <h1 className="nf-404">404</h1>
                    <h2 className="nf-h2">UH OH! You're lost.</h2>
                    <p>
                        The page you are looking for does not exist. 
                        But you can click the button below to go back to the homepage.
                    </p>
                    <button class="btn btn-primary btn-home" onClick={handleNavigate} to="/">HOME</button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
