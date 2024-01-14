import '../../css/loader.css'

const Loader = ({ loading }) => {
  return (
    <div className=' h-screen flex justify-center items-center'>
        {!loading ? (
          <div className="spinner">
            {/* <span>Loading...</span> */}
            <div className="half-spinner"></div>
          </div>
        ) : (
          <div className="completed">&#x2713;</div>
        )}
    </div>
  );
}


export default Loader;