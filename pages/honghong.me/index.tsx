const HongHongMe = () => {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center p-16 text-gray-100 bg-gray-900 shadow-md gap-14"
        style={{ width: 1200, height: 630 }}
      >
        <div className="max-w-screen-lg space-y-6 text-center">
          <h1 className={`text-8xl font-medium text-[#ffffff] `}>
            honghong.me
          </h1>
          <p className="max-w-screen-md text-4xl font-medium leading-12">
            Frontend Developer
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-6">
            <img
              src="https://honghong.me/static/images/logo/logo-black.png"
              alt="小康"
              className="flex-none w-32 h-32 border-4 border-gray-200 rounded-full handsome"
            />
            <div className="flex flex-col gap">
              <p className="mb-1 text-3xl font-medium text-gray-200 ">小康</p>
              <p
                className="text-2xl font-medium tracking-wide "
                style={{ color: "#1D9BF0" }}
              >
                instagram.com/tszhong0411
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HongHongMe;
