import React, { useState } from 'react'
import AddIcon from "@material-ui/icons/AddBox";
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import ToggleOffOutlined from '@material-ui/icons/ToggleOffOutlined';
import NavigationIcon from '@material-ui/icons/Navigation';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Chart from "react-apexcharts";
import skyImage from "../assets/sky2.png";



const Home = () => {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["23%", "30%", "54%", "26%", "50%", "40%", "40%", "60%", "83%", "90%", "10%"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 90, 50, 40, 35, 30, 60, 86, 56]
            }
        ]
    });
    return (
        <div className="flex font-signature">
            <div className="w-1/4 bg-cyan-400 h-auto ml-2 rounded-lg">
                <div className="flex flex-row text-white">
                    <AddIcon className=""></AddIcon>
                    <LinearScaleIcon className=" ml-40 mr-36"></LinearScaleIcon>
                    <ToggleOffOutlined className=""></ToggleOffOutlined>
                </div>
                <div className="flex  text-white">
                    <div className="w-3/4 text-lg">
                        <div className='justify-center mx-12 mt-5'><NavigationIcon /> NewYork, USA</div>
                    </div>
                    <div className="w-1/4 mt-5 text-lg "> <WbSunnyIcon /> 07:19</div>
                </div>
                <div className="flex mb-4 text-white">
                    <div className="w-3/4 text-sm">
                        <div className='justify-center mx-12 mt-5'>Today 28 sept</div>
                    </div>
                    <div className="w-1/4 mt-5 text-lg "> <WbSunnyIcon /> 07:19</div>
                </div>

                <div className='flex items-center justify-between text-white text-9xl mx-8'>
                    <KeyboardArrowLeftIcon />
                    27
                    <KeyboardArrowRightIcon />
                </div>

                <div className='flex justify-center text-white text-5xl my-8 items-center'><WbSunnyIcon className='mx-5' />Sunny</div>

                <div className=''>
                    <img
                        src={skyImage}
                        className="absolute bottom-0 left-0 w-56 ml-2 h-auto rounded-bl-xl"
                    />
                </div>

            </div>
            <div className="w-3/4 bg-cyan-100 h-auto mr-2 rounded-lg">
                <div className='flex text-3xl ml-10 font-bold mt-4'>
                    Welcome back Issabella!
                    <div className='ml-auto '>
                        <MoreHorizIcon className='' />
                        <AccountBoxIcon className='mx-5 ' />
                    </div>
                </div>
                <div className='ml-10 mt-4 text-2xl'>
                    check out today's whether information
                </div>
                <div className='flex justify-center min-w-fit ml-4 mr-14 mt-8 bg-white rounded-2xl'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="area"
                        width="1000"
                        height="300"
                    />
                </div>



                <div className="grid grid-cols-3 gap-4  mx-4 my-4 overflow-hidden h-32">
                    <div className="p-4 rounded-3xl bg-white max-w-xs ">
                        <h2 className="text-lg font-semibold flex justify-center">HUMIDITY</h2>
                        <p className="text-gray-600 mt-2 flex justify-center">SOME CONTENT</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white max-w-xs ">
                        <h2 className="text-lg font-semibold flex justify-center">WIND</h2>
                        <p className="text-gray-600 mt-2 flex justify-center">SOME CONTENT</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white max-w-xs ">
                        <h2 className="text-lg font-semibold flex justify-center">PRECIPITATION</h2>
                        <p className="text-gray-600 mt-2 flex justify-center">SOME CONTENT</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4  mx-4 my-4 overflow-hidden h-32">
                    <div className="p-4 rounded-3xl bg-white max-w-xs ">
                        <h2 className="text-lg font-semibold flex justify-center">UV INDEX</h2>
                        <p className="text-gray-600 mt-2 flex justify-center">SOME CONTENT</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white max-w-xs ">
                        <h2 className="text-lg font-semibold flex justify-center">FEELS LIKE</h2>
                        <p className="text-gray-600 mt-2 flex justify-center">SOME CONTENT</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white max-w-xs ">
                        <h2 className="text-lg font-semibold flex justify-center">CHANCE OF RAIN</h2>
                        <p className="text-gray-600 mt-2 flex justify-center">SOME CONTENT</p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Home