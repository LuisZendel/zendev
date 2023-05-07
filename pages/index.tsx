import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black top-0 realtive z-0 ">
      <Navbar />
      <div className="py-16 dark:text-white flex">
        <div className="md:w-3/4 mx-auto">
          <div className=" rounded-md bg-zinc-200 dark:bg-zinc-700 w-fit mt-20 items-center justify-center p-3 mx-auto">
            <p className="">Hola ! Soy un desarrollador web y movil</p>
          </div>
          <div className="mt-5">
            <p className="text-2xl my-2">Luis Zendel</p>
            <div className="flex my-2 ">
              <p className="flex">Desarrollar de software &nbsp;</p>
              <p className="sm:flex hidden">(/Web/IA/Diseño)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
