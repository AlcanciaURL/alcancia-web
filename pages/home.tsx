import Navbar from '@/components/navbar/Navbar'


const Home = () => {

    return (
        <div className="bg-[white] ">
            <Navbar></Navbar>
            <div className="flex items-center justify-center h-screen ">
                <div className="bg-[#F0F7F4] rounded-lg border shadow-sm p-10 pt-20 border-8 border-[#B3BFB8] sm:w-[65%] w-[100%]">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[white] rounded-lg border-dashed shadow-xl border-2 border-[#329F5B] shadow-[6px_9px_5px_0px_#a0aec0]">
                            <div className="grid grid-cols-1 p-2 gap-3 place-items-center">
                                <div className="bg-[#D9D9D9] rounded-lg flex justify-between pl-4 pr-4 w-[100%]">
                                    <span >ICONO</span>
                                    <span>Nombre de usuario</span></div>
                                <div className="">
                                    <button className="bg-[#D9D9D9] w-12 h-12 rounded-full hover:bg-[#329F5B] hover:text-white align-middle font-bold text-lg">+</button>
                                </div>

                            </div>

                        </div>
                        <div className="bg-[white] rounded-lg border-dashed shadow-xl border-2 border-[#329F5B] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">2</div>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default Home