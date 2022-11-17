const LoggedIn = ({ setIsLoggedIn }) => {
    return (
        <>
            <button onClick={() => {
                setIsLoggedIn(false);
                window.localStorage.clear();
            }}>Logout</button>
        </>
    );
}

export default LoggedIn;
