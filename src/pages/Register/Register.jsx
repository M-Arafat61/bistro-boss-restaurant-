import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/others/authentication2.png";
import Container from "../../components/Shared/Container";
import { useForm } from "react-hook-form";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            console.log("profile updated");
            reset();
            navigate("/");
            toast.success("Account created successfully!");
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
    console.log(data);
  };

  return (
    <Container>
      <div className='hero min-h-screen bg-login-bg'>
        <div className='hero-content flex flex-col md:flex-row justify-between items-center'>
          <div className='flex-1'>
            <img className='w-full object-cover' src={registerImg} alt='' />
          </div>
          <div className='card flex-1'>
            <h1 className='text-5xl font-bold text-center mt-5'>Sign UP</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              {/* name field */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Full name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  {...register("name", { required: true })}
                  placeholder='your name'
                  className='input'
                />
                {errors.name?.type === "required" && (
                  <p className='text-red-500 ml-4' role='alert'>
                    Name is required
                  </p>
                )}
              </div>
              {/* photo url */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  type='text'
                  name='photo'
                  {...register("photo", { required: true })}
                  placeholder='photo url'
                  className='input'
                />
                {errors.photo?.type === "required" && (
                  <p className='text-red-500 ml-4' role='alert'>
                    Photo url is required
                  </p>
                )}
              </div>
              {/* mail field */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder='your email'
                  className='input'
                />

                {errors.email && (
                  <p className='text-red-500 ml-4' role='alert'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* password field */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder='type your password'
                  className='input'
                />
                {errors.password?.type === "required" && (
                  <p className='text-red-600 ml-4'>Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className='text-red-500 ml-4' role='alert'>
                    Password must be 6 characters or long
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className='text-red-600 ml-4'>
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className='text-red-600 ml-4'>
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              {/* submit button */}
              <div className='form-control mt-6'>
                <button
                  type='submit'
                  className='px-4 py-3 rounded-xl overflow-hidden text-white text-xl font-semibold bg-extended-gold'
                >
                  Sign Up
                </button>
              </div>

              {/* login page redirect */}
              <div className='form-control mt-6 text-center space-y-2'>
                <div className='text-extended-gold'>
                  Already registered? Please
                  <span>
                    <Link className='underline ml-1' to='/login'>
                      Sign in
                    </Link>
                  </span>
                </div>
                <p>Or sign up with</p>
              </div>
              {/* social sign up */}
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

export default Register;
