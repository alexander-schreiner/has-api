'use client';

import { type NextPage } from "next";
import { useState } from "react";
import data from '../../data/info.json';

const Home: NextPage = () => {

  const [input, setInput] = useState('');
  let roundedClass = 'rounded-lg';
  const [result, setResult] = useState([]);

  let inputHandler = (e) => {
    const searchValue = String(e.target.value);
    setInput(searchValue);
    const lowerCaseSearchValue = searchValue.toLowerCase();

    roundedClass = 'rounded-t-lg';

    const matchingEntries = data.filter((service: { name: string }) => {
      return service.name.toLowerCase().includes(lowerCaseSearchValue);
    });

    const results = [];
    matchingEntries.forEach((service, index) => {
      results.push(<div key={index}>
        {(service.has_api ? '✅' : '❌') + ' ' + service.name}
      </div>
      );
    });

    setResult(results);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12 pt-16 pb-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Search if it has an <span className="text-[hsl(215,64%,55%)]">API</span>
        </h1>
      </div>

      <div>
        <form>
          <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="search"
              className={roundedClass + "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300bg-gray-50 focus:ring-blue-500 focus:border-blue-500"}
              placeholder="Search" value={input} onChange={inputHandler} required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-t-lg 
            text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>

          {
            result.length == 0 ? '' :
              <div className="bg-white rounded-b-lg px-12 py-6 tex-bold flex flex-col divide-y text-xl">
                {result}
              </div>
          }

        </form>
      </div>
    </>
  )
};

export default Home;
