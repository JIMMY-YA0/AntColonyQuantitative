import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import mail from '../../public/images/icon-mail.png'
import telegram from '../../public/images/telegram.png'
import wechat from '../../public/images/wechat.png'
const Footer = () => {
  return (
    <div className="flex flex-col justify-centern bg-[#1b1e2e] text-[#b5b5b5] bottom-0 py-8 px-6 gap-8 text-sm md:text-base">
      <div className="flex flex-col md:flex-row justify-between items-center mx-20 gap-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 whitespace-nowrap">
          <Link href="/">About us</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">Use Tutorial</Link>
          <Link href="/">Business Partner</Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href="/">
            <Image src={mail} alt="mail" width={30} />
          </Link>
          <Link href="/">
            <Image src={telegram} alt="mail" width={30} />
          </Link>
          <Link href="/">
            <Image src={wechat} alt="mail" width={30} />
          </Link>
        </div>
      </div>

      <div className="border-b test-white mx-10"></div>

      <div className="text-center mx-10 ">
        <p>©2023 AntClonyQuantitative.io All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
