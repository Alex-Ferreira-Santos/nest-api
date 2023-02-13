import { useEffect, useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import * as todo from 'domains/Todo';
import { useStore } from 'domains/Todo/store';


export function List() {
  const data = useStore((store) => store.state.data);
  const { fetchData, setSelectedData } = useStore((store) => store.actions);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          <div className="flex gap-2 items-center">
            <PencilIcon
              className="w-6 h-6 text-green-700 cursor-pointer"
              onClick={() => {
                setSelectedData(val);
                setShowUpdateModal(true);
              }}
            />
            <TrashIcon
              className="w-6 h-6 text-red-700 cursor-pointer"
              onClick={() => {
                setSelectedData(val);
                setShowDeleteModal(true);
              }}
            />
          </div>
        </div>
      ))}

      {showUpdateModal && (
        <todo.UpdateModal setShowUpdateModal={setShowUpdateModal} />
      )}
      {showDeleteModal && (
        <todo.DeleteModal setShowDeleteModal={setShowDeleteModal} />
      )}
    </div>
  );
}
