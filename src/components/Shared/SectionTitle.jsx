const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='mt-16 text-center space-y-2 w-4/12 mx-auto'>
      <p className='text-extended-yellow italic text-lg'>---{subHeading}---</p>
      <h3 className='text-2xl font-bold uppercase border-t border-b py-3'>
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
