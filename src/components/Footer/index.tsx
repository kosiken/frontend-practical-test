import * as React from 'react';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/icons';


const IconLink: React.FC<{icon: IconNames; link: string;}> = ({icon, link}) => {
    return (
        <div className="mr-[25px] last:mr-0 p-[6px] rounded-full inline-block bg-iconColor">
            <a href={link}>
                <Icon size={{width: 20, height: 20}} name={icon} />
            </a>
        </div>
    )
}


const Footer: React.FC = () => {
    const iconsToRender = [{
        icon: IconNames.FACEBOOK,
        link: '#'
    },
    {
        icon: IconNames.INSTAGRAM,
        link: '#'
    },

    {
        icon: IconNames.TIKTOK,
        link: '#'
    },
    {
        icon: IconNames.YOUTUBE,
        link: '#'
    }
];
    return (
        <footer className="mt-[80px]">
            <div className="max-w-[1200px] mx-auto my-0">
                <div className="block lg:flex">
                    <div className="flex-1 mb-8 lg:mb-0 px-4 lg:px-2">
                        <Icon viewBox="0 0 126 54" name={IconNames.LOGO} size={{
                            width: 126,
                            height: 54
                        }} />

                        <p className='max-w-[481px] font-semibold text-[36px] leading-[61px]'>
                            One of the best furniture agency.              </p>
                    </div>
                    <div className="lg:min-w-[400px] px-4 lg:px-2">
                        <p className='flex items-center mb-4'>
                            <Icon className="inline-block" name={IconNames.ELLIPSE} />
                            <span className='ml-2'>
                            Enter  your email to get the laterst news
                            </span>
                        </p>
                        <div className="flex input-conainer border-b-[1px] border-solid border-black">
                            <input className="flex-1 py-2 bg-none outline-none" placeholder="Email Address" />
                            <span className="inline-block cursor-pointer"><Icon name={IconNames.HALF_ARROW} viewBox="0 0 26 12" /></span>
                        </div>

                        <div className="mt-[40px] flex flex-col items-end">
                         <div className="w-[203px]">
                         <p className="mb-4">
                            Follow us On
                            </p>
                            <div>
                            {
                                iconsToRender.map((icon, index) => (
                                  <IconLink {...icon} key={`icon-link-${index}`}  />
                                ))
                            }
                            </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
