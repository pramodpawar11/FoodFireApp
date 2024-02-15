import Button from "../utils/Button"
import { footerLinks, socialMedia } from "../utils/Constants"
import copyrightSign from "../assests/icons/copyright-sign.svg"

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start space-y-5'>

          <h2 className="text-white-400 leading-7 font-montserrat sm:max-w-sm text-xl sm:text-2xl font-bold">Sign up for special offer</h2>
          <div>
            <h2 className="text-white-400 leading-7 font-montserrat">Email address</h2>
            <input type="email" placeholder="your@email.com" className="bg-transparent border-gray-200 border-2 px-3 py-2 outline-none rounded-xl text-white" />
          </div>
          <div>
            <h2 className="text-white-400 leading-7 font-montserrat">Zip Code</h2>
            <input type="text" placeholder="1111" className="bg-transparent border-gray-200 border-2 px-3 py-2 rounded-xl outline-none text-white" />
          </div>
          <Button lable={"Count me in!"} />
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>

  )
}

export default Footer