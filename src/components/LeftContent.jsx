export function LeftContent() {
  return (
    <div className="mt-[24px] ml-[16px] w-[375px]">
      <ul className="">
        <li className="bg-white rounded-lg">
          <div className="px-[25px] py-[19px]">
            <p className="font-normal text-[#696974] mb-[16px] ">
              1 oylik SMS lar
            </p>
            <hr className="mx-auto w-[320px]" />
            <div className="mt-[16px] mb-[16px]">
              <p className="font-normal text-[#696974]">Umumiy</p>
              <span className="font-bold text-2xl">1000 ta</span>
            </div>
            <hr className="mx-auto w-[320px]" />
            <div className="mt-[25px] w-[300px] flex items-center gap-6">
              <img src="Chart (1).svg" alt="" width={80} height={80} />
              <div className="">
                <span className="font-bold text-xl">740 ta</span>
                <p className="font-normal text-[#696974]">Yetib borgan</p>
              </div>
            </div>
            <div className="mt-[25px] w-[300px] flex items-center gap-6">
              <img src="Chart (4).svg" alt="" width={80} height={80} />
              <div className="">
                <span className="font-bold text-xl">260 ta</span>
                <p className="font-normal text-[#696974]">Hatolik bo’lgan</p>
              </div>
            </div>
          </div>
        </li>
        <li className=" bg-white mt-[25px] rounded-lg">
          <div className="pt-[40px]">
            <img src="Path 2.svg" alt="" className="w-[253px] mx-auto " />
            <div className="mt-[10px] px-[23px] pb-[23px]">
              <p className="font-normal text-[#696974]">Umumiy</p>
              <span className="font-bold text-2xl">1000 ta</span>
            </div>
          </div>
        </li>
        <li className="bg-white mt-[39px] rounded-lg mb-[37px]">
          <div className="p-[20px]">
            <h1 className="">Integratsiyalar</h1>
            <div className="mt-[40px]">
              <div className="flex gap-6">
                <img src="PP.svg" alt="" width={42} height={42} />
                <div className="">
                  <span className="font-bold text-2xl">AmoCrm</span>
                  <p className="font-normal text-[#696974]">CRM</p>
                </div>
                <img className="ml-[120px]" src="Block.svg" alt="" />
              </div>
            </div>
            <div className="mt-[34px]">
              <div className="flex gap-6">
                <img src="PP (1).svg" alt="" width={42} height={42} />
                <div className="">
                  <span className="font-bold text-2xl">TelegramBot</span>
                  <p className="font-normal text-[#696974]">Habar yuboruvchi</p>
                </div>
                <img className="ml-[78px]" src="Block.svg" alt="" />
              </div>
            </div>
            <div className="mt-[34px]">
              <div className="flex gap-6">
                <img src="PP (2).svg" alt="" width={42} height={42} />
                <div className="">
                  <span className="font-bold text-2xl">Trello</span>
                  <p className="font-normal text-[#696974]">TaskManagement</p>
                </div>
                <img className="ml-[120px]" src="Block.svg" alt="" />
              </div>
            </div>
            <div className="mt-[34px]">
              <div className="flex gap-6">
                <img src="PP (3).svg" alt="" width={42} height={42} />
                <div className="">
                  <span className="font-bold text-2xl">Bitrix</span>
                  <p className="font-normal text-[#696974]">CRM</p>
                </div>
                <img className="ml-[120px]" src="Block.svg" alt="" />
              </div>
            </div>
            <div className="mt-[34px]">
              <div className="flex gap-6">
                <img src="PP (4).svg" alt="" width={42} height={42} />
                <div className="">
                  <span className="font-bold text-2xl">IP Phone</span>
                  <p className="font-normal text-[#696974]">Phone</p>
                </div>
                <img className="ml-[120px]" src="Block.svg" alt="" />
              </div>
            </div>
          </div>
          <hr className="mx-auto mt-[30px] w-[320px]" />
          <li className="pt-[37px] w-[320px] flex mx-auto pb-[35px]">
            <button className="text-[#0062FF] ml-[60px] font-semibold">
              BARCHA INTEGRATSIYALAR
            </button>
          </li>
        </li>
      </ul>
    </div>
  );
}
