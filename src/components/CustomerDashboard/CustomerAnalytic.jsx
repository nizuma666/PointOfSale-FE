const CustomerAnalytic = () => {
  return (
    <div className="bg-brand relative h-[159px] mt-4 md:mt-2 md:rounded-lg md:h-[265px] md:w-[227px]">
      <img src="/src/assets/Vector.png" className="absolute" />
      <img src="/src/assets/Vector2.png" />
      <img src="/src/assets/Ellipse13.png" className="absolute right-0 bottom-0" />
      <img src="/src/assets/Ellipse14.png" className="absolute right-0 bottom-0"/>
      <img src="/src/assets/Ellipse15.png"  className="absolute right-0 bottom-0"/>
      <p className="text-base text-white font-semibold absolute top-10 left-4 md:text-xl md:w-4/5">
        See analytics of the Customer Clearly
      </p>
      <button className="bg-[#A5A6F6] bg-opacity-60 p-2 rounded-md text-white font-semibold text-base absolute bottom-5 left-4">See Analytic</button>
    </div>
  );
};
export default CustomerAnalytic;
