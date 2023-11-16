import { Link } from "react-router-dom";
import Container from "./Container";

const MenuCard = ({ item, buttonText, title }) => {
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {item?.map(item => (
          <div key={item._id} className='flex items-center gap-2'>
            <img
              style={{
                borderRadius: "0 200px 200px 200px",
              }}
              className='w-[118px] h-[104px]'
              src={item.image}
              alt=''
            />
            <div>
              <h3 className='uppercase text-xl tracking-wide'>
                {item.name}-----
              </h3>
              <p> {item.recipe} </p>
            </div>
            <p className='text-extended-yellow'>${item.price}</p>
          </div>
        ))}
        <div className='mt-10 flex justify-center col-span-2'>
          <Link to={`/shop/${title}`}>
            <button className='border-b-4 rounded-2xl uppercase px-4 py-2 btn btn-outline btn-lg border-0 '>
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MenuCard;
