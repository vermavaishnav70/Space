import Image from 'next/image';
import React from 'react';

import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';


const font = Lora({
    subsets: ["latin"],
    weight: ["400"],
})

const ThirdSection = () => {
    return (
      <div className="xl:pt-32 pt-24 relative flex justify-center items-center flex-col text-6xl text-center">
        New age of collaboration
        <div className="xl:text-5xl text-3xl 2xl:w-3/5 w-3/5 font-medium xl:w-1/3 mx-auto text-center">
          Cut costs
        </div>
        <Image
          src="/assets/canva-logo.png"
          alt="Canva logo"
          width={1000}
          height={1000}
          className="pt-10 xl:pt-10 
                xl:w-1/3
                w-4/5
                scale-150
                dark:hidden
                "
        />
        <Image
          src="/assets/canva-logo-dark.png"
          alt="Canva logo"
          width={1000}
          height={1000}
          className="pt-10 xl:pt-10 
                xl:w-1/3
                w-4/5
                scale-150
                hidden
                dark:block
                "
        />
        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 pb-4  xl:py-10 px-8  text-center  w-4/5 ",
            font.className
          )}
        >
          &quot;Get rid of nearly a dozen different tools because of what Space
          will do for you.&quot;
        </div>
      </div>
    );
}

export default ThirdSection;