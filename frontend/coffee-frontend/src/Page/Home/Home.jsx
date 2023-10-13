import { useLoaderData } from "react-router-dom";
import Datacard from "../../Components/Datacard/Datacard";


const Home = () => {
    const allData=useLoaderData();
    return (
        <div className="grid grid-cols-2">
               {
                allData.map(oneData=>{
                    return(
                        <Datacard key={oneData._id} oneData={oneData}/>
                    )
                })
               }
        </div>
    );
};

export default Home;