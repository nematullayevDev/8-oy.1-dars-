export function Hero() {
  return (
    <div className="Hero_wrap">
      <div className="mt-[24px] w-[1080px]  fex ml-[24px]">
        <ul className="flex gap-[16px]">
          <li className="bg-white w-[350px] h-[105px] flex items-center gap-[24px] rounded-lg p-[16px]">
            <img src="tracking.svg" alt="" />
            <div className="">
              <p className="font-medium text-[12px] text-[#92929D]">
                Tracking loyihalari
              </p>
              <span className="text-[#0062FF] font-bold text-[24px]">5 ta</span>
              <p className="">(7 ta subloyiha)</p>
            </div>
          </li>
          <li className="bg-white w-[350px] h-[105px] flex items-center gap-[24px] rounded-lg p-[16px]">
            <img src="Icon.png" alt="" />
            <div className="">
              <p className="font-medium text-[12px] text-[#92929D]">
                Tracking loyihalari
              </p>
              <span className="text-[#0062FF] font-bold text-[24px]">
                15 ta
              </span>
              <p className="">(7 ta subloyiha)</p>
            </div>
          </li>
          <li className="bg-white w-[350px] h-[105px] flex items-center gap-[24px] rounded-lg p-[16px]">
            <img src="Icon (1).png" alt="" />
            <div className="">
              <p className="font-medium text-[12px] text-[#92929D]">
                Tracking loyihalari
              </p>
              <span className="text-[#0062FF] font-bold text-[24px]">
                12,345 ta
              </span>
              <p className="">(563 ta saralanmagan)</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="chat ml-[24px] mt-[16px] mb-[16px]">
        <img src="Chart.svg" alt="" width={1080} height={524} />
      </div>
    </div>
  );
}
