import Container from "./Container";

const TitleCover = ({ bgImg, heading }) => {
  return (
    <Container>
      <div
        className='hero h-[700px] flex justify-center items-center'
        style={{
          backgroundImage: `url(${bgImg})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='hero-content bg-opacity-70 bg-zinc-900 text-center w-3/4'>
          <div className='text-white'>
            <div className='px-20 py-16'>
              <h1 className='mb-5 text-3xl font-bold uppercase'>{heading}</h1>
              <p className='mb-5 uppercase'>
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TitleCover;
