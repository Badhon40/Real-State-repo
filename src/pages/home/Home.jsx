import { useLoaderData } from "react-router-dom";
import Hero from "../../conponents/hero/Hero";
import SingleCard from "../../singleCard/SingleCard";
import { useState } from "react";
import Footer from "../../conponents/footer/Footer";



const Home = () => {
    const data=useLoaderData()
    const [seeMore,setSeeMore]=useState(3)
    // console.log(data)
    return (
        <div>
           <Hero></Hero>

           <div className="text-center py-10">
            <h1 className="text-4xl font-bold mb-4">The States</h1>
            <p>Your Choices Our Priority .. Our best Services......</p>
           </div>

           <div className="grid md:grid-cols-3 gap-4 justify-center px-4">
            {
               data.slice(0,seeMore).map(details=><SingleCard key={details.id} data={details}></SingleCard>)
            }

            
           </div>
           <div className="text-center mt-10">
           <button onClick={()=>setSeeMore(data.length)} className="btn btn-success text-white {} ">See more</button>
           </div>

           <Footer></Footer>
            
        </div>
    );
};

export default Home;