import * as components from 'components';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useStore } from 'domains/Todo/store';

type FormData = {
  Title: string;
  Description: string;
};

export function Form() {
  const { fetchData } = useStore((store) => store.actions);
  const { handleSubmit, control } = useForm();

  async function Submit({Description, Title}: FormData) {
    try {
      await axios.post(
        'http://localhost:3333/api/todo',
        {
          title: Title,
          description: Description,
        },
      );

      fetchData()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(Submit)}
      className="flex flex-col gap-4 p-6 bg-gray-600 rounded-xl"
    >
      <Controller
        name="Title"
        defaultValue={''}
        control={control}
        render={({ field: { onChange, value } }) => (
          <components.Input
            placeholder="Title"
            onChange={onChange}
            value={value}
          />
        )}
      />

      <Controller
        name="Description"
        control={control}
        defaultValue={''}
        render={({ field: { onChange, value } }) => (
          <components.TextArea
            placeholder="Description"
            rows={5}
            onChange={onChange}
            value={value}
          />
        )}
      />

      <components.Button title="Submit" type="submit" />
    </form>
  );
}
