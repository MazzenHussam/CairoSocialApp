import './register.scss';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Cairo Social</h1>
                <p>Connect with your friends and the world around you on Cairo Social, The first web Application that connects all the Qahrawya</p>
                <span>Do you have an account? </span>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="right"> 
                <h1>Register </h1>
                <form action="/register" > 
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password' />
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;