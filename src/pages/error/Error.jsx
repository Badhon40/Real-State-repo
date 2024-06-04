import { Helmet } from "react-helmet-async";


const Error = () => {
    return (<>
        <Helmet><title>SALORD | Error</title></Helmet>
        <div className="text-center mt-64 ">
           <h1 className="text-5xl font-bold "> <span className='text-8xl text-red-600  '>O</span>pps!!</h1>
           <p className="text-2xl py-5"> Wrong Path</p>
        </div>
        </>
    );
};

export default Error;