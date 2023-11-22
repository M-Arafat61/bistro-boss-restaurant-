import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/Shared/SectionTitle";

import { imageUpload } from "../../../hooks/imageUpload";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import toast from "react-hot-toast";

const UpdateMenuItem = () => {
  const itemData = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosInstance = useAxiosInstance();
  const { name, recipe, category, price, _id } = itemData.data;

  const onSubmit = async data => {
    const image = data.image[0];
    const res = await imageUpload(image);
    if (res.data.success) {
      const imageData = res?.data.data.url;
      const updatedMenu = {
        name: data.name,
        recipe: data.recipe,
        image: imageData,
        category: data.category,
        price: parseFloat(data.price),
      };

      const response = await axiosInstance.patch(`/menu/${_id}`, updatedMenu);

      if (response.data.modifiedCount > 0) {
        reset();
        toast.success("Menu item updates successful");
      }
    }
  };
  return (
    <div className='space-y-10'>
      <SectionTitle heading='Update Item' sub></SectionTitle>
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
                defaultValue={name}
                {...register("name", { required: true })}
                placeholder='Recipe Name'
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
                  defaultValue={category}
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
                  defaultValue={price}
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
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                placeholder='Recipe Details'
                className='textarea h-32'
              />
            </div>

            {/* photo upload */}
            <div className='form-control w-full my-6 '>
              <input
                {...register("image", { required: true })}
                type='file'
                className='file-input w-full max-w-xs'
              />
            </div>

            {/* submit button */}
            <div className='form-control mt-6'>
              <div className='flex justify-center items-center'>
                <button
                  type='submit'
                  className='px-4 py-3 text-white text-xl font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] '
                >
                  Update Recipe Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenuItem;
