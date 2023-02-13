import * as components from 'components';
import axios from 'axios';
import { useStore } from 'domains/Todo/store';

export function DeleteModal({
  setShowDeleteModal,
}: {
  setShowDeleteModal: (boolean) => void;
}) {
  const selectedData = useStore((store) => store.state.selectedData);
  async function Submit() {
    try {
      await axios.delete('http://localhost:3333/api/todo', {
        data: {
          Id: 1,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-black bg-opacity-30 absolute inset-0 flex justify-center items-center w-[100vw] h-[100vh] z-50">
      <form
        onSubmit={Submit}
        className="flex flex-col gap-4 p-6 bg-gray-600 rounded-xl"
      >
        <div className="flex flex-col items-center text-white">
          <p>Are you sure you want to delete the task</p>
          <p className="font-bold text-lg">{selectedData.title}?</p>
        </div>

        <div className="flex items-center gap-4">
          <components.Button
            title="Back"
            type="button"
            color="secondary"
            onClick={() => setShowDeleteModal(false)}
          />
          <components.Button title="Delete" type="submit" color="danger" />
        </div>
      </form>
    </div>
  );
}
