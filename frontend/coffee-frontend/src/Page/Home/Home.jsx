import { useLoaderData } from "react-router-dom";
import Datacard from "../../Components/Datacard/Datacard";
import { useState } from "react";


const Home = () => {
    const allData = useLoaderData();
    const [datas, setDatas] = useState(allData)
    return (
        <div className="grid grid-cols-2">
            {
                datas.map(oneData => {
                    return (
                        <Datacard key={oneData._id}
                            oneData={oneData}
                            datas={datas}
                            setDatas={setDatas} />
                    )
                })
            }
        </div>
    );
};

export default Home;