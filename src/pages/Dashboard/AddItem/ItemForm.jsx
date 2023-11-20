import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ItemForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosInstance = useAxiosInstance();

  const onSubmit = async data => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const imageData = res?.data.data.url;
      const formData = {
        name: data.name,
        recipe: data.recipe,
        image: imageData,
        category: data.category,
        price: parseFloat(data.price),
      };
      const response = await axiosInstance.post("/menu", formData);
      console.log(response.data);
      if (response.data.insertedId) {
        reset();
        toast.success("Item added successfully");
      }
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='hero-content bg-gray-200'>
        <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
          {/* name field */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Recipe name*</span>
            </label>
            <input
              type='text'
              name='name'
              {...register("name", { required: true })}
              placeholder='your name'
              className='input'
            />
          </div>
          <div className='flex justify-between gap-5'>
            {/* category field */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Category*</span>
              </label>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className='py-3'
              >
                <option disabled value='default'>
                  Select a category
                </option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soup'>Soup</option>
                <option value='dessert'>Dessert</option>
                <option value='drinks'>Drinks</option>
              </select>
            </div>
            {/* price field */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Price*</span>
              </label>
              <input
                type='number'
                name='price'
                {...register("price", {
                  required: true,
                })}
                placeholder='price'
                className='input'
              />
            </div>
          </div>

          {/* recipe details */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Recipe Details*</span>
            </label>
            <textarea
              name='recipe'
              {...register("recipe", { required: true })}
              placeholder='Recipe Details'
              className='textarea h-32'
            />
          </div>

          {/* photo upload */}
          <div className='form-control w-full my-6'>
            <input
              {...register("image", { required: true })}
              type='file'
              className='file-input w-full max-w-xs'
            />
          </div>

          {/* submit button */}
          <div className='form-control mt-6'>
            <div>
              <button
                type='submit'
                className='px-4 py-3 text-white text-xl font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center'
              >
                Add Item
                <Icon
                  className='text-2xl ml-2'
                  icon='medical-icon:i-restaurant'
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
