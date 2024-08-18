const TopMenu = () => {
    const topMenu = [
        "Tongseng Sapi Gurih",
        "Nasi Gudeg Telur Ceker",
        "Nasi Ayam Serundeng",
        "Nasi Goreng Seafood",
    ]
  return (
    <div className="bg-gray-100 rounded-lg mt-4 p-2 md:h-[520px] md:w-[227px]">
      <div className="flex md:flex-col md:items-start gap-x-2 mb-4 items-center justify-between md:p-2">
        <p className=" text-xl font-semibold">Top Menu</p>
        <p className="text-xl text-orange-500 font-semibold md:mb-4">This Week</p>
        <p className="text-xs text-gray-400 grow text-end">
          10 - 12 Agustus 2023
        </p>
      </div>
      <div className="bg-white p-2 rounded-lg relative md:mb-6">
        <p className="text-sm font-semibold text-center md:text-start md:font-bold">
          Nasi Goreng Jamur Special Resto Pak Min
        </p>
        <img src="/src/assets/Frame2964.png" className="absolute right-0 -top-3 md:-top-5" />
      </div>
      <div className="max-md:hidden p-2">
      {topMenu.map((menu, index)=> (
        <div key={index} className="mb-9">
            <p className="text-gray-400 font-semibold">{index + 2}. {menu}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TopMenu;
