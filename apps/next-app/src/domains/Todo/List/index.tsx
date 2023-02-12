import axios from 'axios';
import { useEffect, useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

type Data = {
  title: string;
  description: string;
};

export function List() {
  const [data, setData] = useState<Data[]>([]);

  async function getData() {
    try {
      const { data } = await axios.get('http://localhost:3333/api/todo');
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-4 col-span-2">
      {data.map((val) => (
        <div
          key={val?.title}
          className="bg-blue-200 rounded-lg px-2 py-2 flex justify-between"
        >
          <div>
            <p className="text-lg">{val.title}</p>
            <p className="text-gray-700">{val.description}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <PencilIcon className="w-6 h-6 text-green-700 cursor-pointer" />
            <TrashIcon className="w-6 h-6 text-red-700 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
