import Image from 'next/image'
import slider from '../../public/images/banner_bp1.jpg'
const Banner = () => {
  return (
    <div className="mt-[60px]">
      <Image
        src={slider}
        alt="Banner"
        width={1920}
        height={750}
        className="w-screen max-h-[30vh] object-cover"
      />
    </div>
  )
}

export default Banner
