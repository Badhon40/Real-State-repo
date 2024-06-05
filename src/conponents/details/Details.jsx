import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet-async";


const Details = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const card = cards.find(card => card.id === intId);

    return (
        <div>
            <Helmet><title>SALORD | Detail</title></Helmet>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={card.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2">
                            <p>{card.description}</p>
                            <p className="text-xs dark:text-gray-600">
                                {card.segment_name}
                            </p>
                            <p className="text-xs dark:text-gray-600">
                               Price: {card.price}
                            </p>
                            <p className="text-xs dark:text-gray-600">
                               Area : {card.area}
                            </p>
                            <p className="text-xs dark:text-gray-600">
                              Location : {card.location}
                            </p>
                            <div>
                                Facilities: 
                                {
                                    card.facilities.map((tag) => <a key={tag} className="mr-4 text-xs  text-error bg-gray-200 font-bold px-2 rounded-lg ">{tag}</a>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;
