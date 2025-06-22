
import './login.scss'
import { Link } from 'react-router-dom';

export const Login = () => {
return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Welcome Home.</h1>
                <p>Connect with your friends and the world around you on Cairo Social, The first web Application that connects all the Qahrawya</p>
                <span>Don't you have an account? </span>
                <Link to="/register">
                <button>Register</button>
                </Link>
                
            </div>
            <div className="right"> 
                <h1>Login</h1>
                <form action="/login">
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Login;
// This is a simple login component for the Cairo Social App.