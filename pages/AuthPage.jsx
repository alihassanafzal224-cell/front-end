

export default function HomePage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-3xl text-white">
            <h1 className="mb-2">Welcome to the To-Do List App!</h1>
            <p className="w-[50%] text-center text-[12px]">
                This application helps you manage your tasks efficiently. You can add new tasks, view your current tasks, and delete tasks that you have completed. Stay organized and boost your productivity with this simple yet effective To-Do List App!
            </p>
            <div className=" w-full flex flex-col justify-center items-center  text-white">
                <div className="m-8 mb-2 p-8 w-[500px] h-[200px] flex flex-col gap-4 justify-start items-center text-lg text-white">
                    <input className="w-92 h-12 rounded-lg border-2 border-white" type="text" placeholder="Enter your Email or UserName"></input> 
                    <input className="w-92 h-12 rounded-lg border-2 border-white" type="text" placeholder="Enter your Password"></input>
                  
                </div>
                  <button className="w-[300px] bg-white text-2xl font-bold text-black p-2 rounded-xl  "  type="submit" >Login</button>
                   <button className="w-[300px] mt-3 bg-white text-2xl font-bold text-black p-2 rounded-xl "type="submit">SignUp</button>
            </div>
        </div>
    );
}