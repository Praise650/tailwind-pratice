import  '../../css/loader.css'

const Loader = ({ loading }) => {
  return (
    <>
      {!loading ? (
        <div className="spinner">
          {/* <span>Loading...</span> */}
          <div className="half-spinner"></div>
        </div>
      ) : (
        <div className="completed">&#x2713;</div>
      )}
    </>
  );
}


export default Loader;