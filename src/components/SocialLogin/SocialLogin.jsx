import { Icon } from "@iconify/react";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useAuthContext();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then(result => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        createdAt: new Date(),
      };
      axiosPublic
        .post("/users", userInfo)
        .then(res => {
          console.log(res.data);
          toast.success("Sign in Successful");
          navigate("/");
        })
        .catch(error => {
          toast.error(`${error.message}`);
        });
    });
  };

  return (
    <div>
      <div className='form-control  flex flex-row justify-center gap-6'>
        <div className='border p-1 border-black rounded-full'>
          <Icon className='text-2xl ' icon='ri:facebook-fill' />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className='border p-1 border-black rounded-full'
        >
          <Icon className='text-2xl' icon='bi:google' />
        </button>

        <div className='border p-1 border-black rounded-full'>
          <Icon className='text-2xl' icon='mingcute:github-fill' />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
