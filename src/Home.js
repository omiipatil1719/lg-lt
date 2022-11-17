import { useState } from "react";

const Home = ({ setIsLoggedIn }) => {

    const [email, setEmail] = useState('');
    const[password,setpassword]=useState('')

    const submitForm = e => {
        window.localStorage.setItem('token', 'abcd');
        setIsLoggedIn(true);
    }

    return (
        <>
            <h1>Home Page</h1>
            <form onSubmit={submitForm}>
                <label>Email</label>
                <input
                    type='email'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value.trim())}
                />
                <br />
<label htmlFor="password">Password</label>
<input
  type="password"
  required
  value={password}
  onChange={e=>setpassword(e.target.value.trim())}
  
   />
<br/>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default  Home;
