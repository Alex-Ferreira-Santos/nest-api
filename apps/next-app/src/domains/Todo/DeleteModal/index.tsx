import * as components from 'components';
import axios from 'axios';

export function UpdateModal() {
  async function Submit() {
    await axios.delete('http://localhost:3333/api/todo', {
      data: {
        Id: 1,
      },
    });
  }

  return (
    <div className="bg-black bg-opacity-30 absolute inset-0 flex justify-center items-center">
      <div
        onSubmit={Submit}
        className="flex flex-col gap-4 p-6 bg-gray-600 rounded-xl"
      >
        <components.Button
          title="Cancelar"
          type="button"
          onClick={() => {
            return;
          }}
        />
        <components.Button title="Deletar" type="submit" />
      </div>
    </div>
  );
}
