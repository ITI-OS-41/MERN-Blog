import React,{useState} from 'react';
import axios from 'axios'
// import './Loginstyle.css';
import {Link ,useHistory} from 'react-router-dom'
import "./Regstyle.css";

function Login() {
    const [email,setemail]=useState('')
    const [pass,setpass] = useState('')
    const [msg,setmsg]=useState('');
    const history=useHistory();
function Loginfun (e)
{
    e.preventDefault();
    
    let data={
        email:email,
        password:pass,
    }
    axios
			.post("http://localhost:5001/login", data)
			.then((resp) => {
				if (resp.data == "1") 
                    // setmsg("Successful logined")
                    history.push('/posts')
				else if (resp.data == "0") 
                setmsg("Invalid Credentials")
                else
                setmsg("No user Found, plz register♥")


			})
			.catch((err) => console.log(err));
}
    
        return (
            <div className="container">
            <section className="contact-from pt-4">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-7 mx-auto">
                            <div className="form-wrapper">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h4>Login </h4>
                                    </div>
                                </div>
                                <form _lpchecked="1" onSubmit={(e)=>Loginfun(e)}>
                                    <h2 className='p-x text-center'>{msg}</h2>
                                <div className="row align-items-center">
										<div className="col mt-4">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e)=>{setemail(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
										<div className="col mt-4">
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    vlaue={pass}
                                                    onChange={(e)=>{setpass(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <hr></hr>
                                <p className="text-center">Not a member? <Link to='/Register'>sign up.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    
}

export default Login;