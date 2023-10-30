import React from 'react'
import icon_ui2 from '../../public/images/icon-ui.png'
import Image from 'next/image'
import Icon_down from '../../public/images/icon-down.png'

const Hero = () => {
  return (
    <div>
      {/* Market pain */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center space-y-2 px-8 py-4 mb-6 relative">
          <h2 className="text-3xl font-black text-center">Market Pain Points and Solutions</h2>
          <Image src={icon_ui2} alt="" width={149} height={14} />
        </div>
        <div className="w-full lg:w-[80%] mx-auto flex md:flex-col items-stretch justify-center md:items-center">
          <dl className="w-full flex flex-col md:flex-row justify-evenly items-center border-dashed border-2 border-[#ccc] px-4 lg:px-8 py-4 relative">
            <dt className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[whitesmoke] p-2">
              Problems
            </dt>
            <dd className="w-full md:w-[15%] text-sm bg-[#3273dc] text-white rounded-sm m-1 p-4 text-center">
              没有专业的交易策略
              <br />
              资产风险极高
            </dd>
            <dd className="w-full md:w-[15%] text-sm bg-[#3273dc] text-white rounded-sm m-1 p-4 text-center">
              手工交易效率低
              <br />
              容易出错
            </dd>
            <dd className="w-full md:w-[15%] text-sm bg-[#3273dc] text-white rounded-sm m-1 p-4 text-center">
              做不同币种的资产配置与
              <br />
              调仓手续费高
            </dd>
            <dd className="w-full md:w-[15%] text-sm bg-[#3273dc] text-white rounded-sm m-1 p-4 text-center">
              无法长时间持续盯盘
              <br />
              错过机会
            </dd>
          </dl>
          <div className="hidden md:block">
            <Image src={Icon_down} alt="" width={31} height={44} className="mb-10" />
          </div>
          <div className="block md:hidden my-auto">
            <Image src={Icon_down} alt="" width={31} height={44} className="mr-2 -rotate-90" />
          </div>
          <dl className="w-full flex flex-col md:flex-row justify-evenly items-center border-dashed border-2 border-[#ccc] px-4 lg:px-8 py-4 relative">
            <dt className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[whitesmoke] p-2">
              Solutions
            </dt>
            <dd className="w-full md:w-[15%] text-sm text-black border-r-2 border-[#eee] rounded-sm m-1 p-4 text-center">
              均摊成本，分散风险
            </dd>
            <dd className="w-full md:w-[15%] text-sm text-black border-r-2 border-[#eee] rounded-sm m-1 p-4 text-center">
              不需要看盘，不需要看 k 线，不要打听种种内幕
            </dd>
            <dd className="w-full md:w-[15%] text-sm text-black border-r-2 border-[#eee] rounded-sm m-1 p-4 text-center">
              自动化定投，省心还省力，克服人性弱点，拒绝追涨杀跌
            </dd>
            <dd className="w-full md:w-[15%] text-sm text-black rounded-sm m-1 p-4 text-center">
              定投指数，AI优选指数推荐
            </dd>
          </dl>
        </div>
      </div>
      {/* Why us */}
      <div></div>
    </div>
  )
}

export default Hero
