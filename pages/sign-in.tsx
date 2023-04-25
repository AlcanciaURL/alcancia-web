import Navbarlogin from '@/components/navbarlogin/Navbarlogin'


const SignIn = () => {

    return (
        <div className="bg-[white] ">
            <Navbarlogin ></Navbarlogin>
            <div className="flex items-center justify-center h-screen ">
                <div className="bg-[#F0F7F4] rounded-xl border shadow-sm p-10 pt-20 border-8 border-[#B3BFB8] sm:w-[40%] w-[100%]">
                    <div className="border-dashed border-2 border-[#329F5B] raunded-xl p-3 ">
                        <label className="block mb-2 text-base font-medium text-[#3C493F] ">Nombre</label>
                        <input className="bg-secondary appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary focus:border-2" type="text" />
                        <label className="block mb-2 text-base font-medium text-[#3C493F] ">Email</label>
                        <input className="bg-secondary appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary focus:border-2" type="text" />
                        <label className="block mb-2 text-base font-medium text-[#3C493F] ">Contraseña</label>
                        <input className="bg-secondary appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary focus:border-2" type="text" />
                        <label className="block mb-2 text-base font-medium text-[#3C493F] ">Confirmar contraseña</label>
                        <input className="bg-secondary appearance-none rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary focus:border-2" type="text" />
                    </div>
                    <div className="flex items-center justify-center pt-5">
                        <button className="bg-[#329F5B] hover:bg-secondary text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                            Registrarme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignIn