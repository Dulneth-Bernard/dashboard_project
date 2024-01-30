import {Inter,Lusitana} from 'next/font/google';


// specify what subset you'd like to load. In this case, 'latin'
export const inter = Inter({ subsets: ['latin'] });


//Export lucitina

export const lusitana = Lusitana({
    weight:['400','700'],
    subsets: ['latin']
})