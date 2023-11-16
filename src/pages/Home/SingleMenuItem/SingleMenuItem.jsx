import sMItemImg from "../../../assets/home/featured.jpg";
import Container from "../../../components/Shared/Container";
import SectionTitle from "../../../components/Shared/SectionTitle";

const SingleMenuItem = () => {
  return (
    <Container>
      <div className='bg-featured-item  bg-fixed my-20 flex flex-col text-white'>
        <SectionTitle subHeading='Check it out' heading='From Our Menu' />

        <div className='md:flex py-16 px-24 gap-10 justify-center items-center'>
          <div className='flex-1 '>
            <img src={sMItemImg} alt='' />
          </div>
          <div className='flex flex-col items-start  space-y-2 flex-1'>
            <p>May 11, 2029</p>
            <h3 className='text-2xl font-semibold '>Where Can I get Some</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium fugit vel reiciendis aut doloremque ab quidem dolore
              quaerat sed natus, voluptas tempore? Quaerat dignissimos totam a.
            </p>
            <button className=' border-b-white border-b-2 rounded-2xl uppercase px-4 py-2 btn btn-outline border-0 text-white'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleMenuItem;
