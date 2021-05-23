import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Loader
      classname="spinner"
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};

export default Spinner;
