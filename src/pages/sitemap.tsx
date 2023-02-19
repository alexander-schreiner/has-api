import { useEffect, useState } from 'react';
import data from '../../data/info.json';
import type { Service, Element } from '../types/service';
import Link from 'next/link';

export default function Sitemap() {

    const [services, setServices] = useState<Array<Element>>([]);

    useEffect(() => {
        const serviceElements: Array<Element> = data.map((service: Service, index: number): Element => {
            return <div key={index} className=''>
                <Link href={
                    encodeURI('/' + service.name.toLowerCase())
                }>
                    {service.name}
                </Link>
            </div>
        });

        setServices(serviceElements);
    }, []);

    return (
        <>
            <div className='text-white text-bold'>
                <Link href='/'>Home</Link>
            </div>

            <div className='flex flex-col text-white font-bold'>
                <>
                    {services}
                </>
            </div>
        </>
    )
}
