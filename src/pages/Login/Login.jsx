import Container from "../../components/Shared/Container";
import loginImg from "../../assets/others/authentication2.png";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Login = () => {
  const [captchaText, setCaptchaText] = useState("");
  const { signIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = e => {
    e.preventDefault();
    if (validateCaptcha(captchaText) == true) {
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password, captchaText);
      signIn(email, password)
        .then(res => {
          console.log(res.user);
          navigate(from, { replace: true });
        })
        .catch(error => {
          toast.error(`${error.message}`);
        });
    } else {
      toast.error("Captcha Does Not Match!");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <Container>
      <div className='hero min-h-screen bg-login-bg'>
        <div className='hero-content flex flex-col md:flex-row justify-between items-center'>
          <div className='flex-1'>
            <img className='w-full object-cover' src={loginImg} alt='' />
          </div>
          <div className='card flex-1'>
            <h1 className='text-5xl font-bold text-center mt-5'>Login</h1>
            <form onSubmit={handleFormSubmit} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='your email'
                  className='input'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='type your password'
                  className='input'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <LoadCanvasTemplate />
                </label>
                <input
                  onChange={e => setCaptchaText(e.target.value)}
                  type='text'
                  placeholder='enter captcha'
                />
              </div>
              <div className='form-control mt-6'>
                <button
                  type='submit'
                  className='px-4 py-3 rounded-xl overflow-hidden text-white text-xl font-semibold bg-extended-gold'
                >
                  Sign In
                </button>
              </div>
              <div className='form-control mt-6 text-center space-y-2'>
                <div className='text-extended-gold'>
                  New here?
                  <span>
                    <Link className='underline ml-1 mr-1' to='/register'>
                      Sign up
                    </Link>
                    a New Account
                  </span>
                </div>
                <p>Or sign in with</p>
              </div>

              <div className='form-control mt-4 flex flex-row justify-center gap-6'>
                <div className='border p-1 border-black rounded-full'>
                  <Icon className='text-2xl ' icon='ri:facebook-fill' />
                </div>

                <button className='border p-1 border-black rounded-full'>
                  <Icon className='text-2xl' icon='bi:google' />
                </button>

                <div className='border p-1 border-black rounded-full'>
                  <Icon className='text-2xl' icon='mingcute:github-fill' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
