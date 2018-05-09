// Higher Order Component (HOC) - A component (HOC) that reders another component 
// Reuse code
// Render hijacking
// Props manipulate
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You must be Authenticated to view this information</p>}
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='here are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='here are the details' />, document.getElementById('app'));