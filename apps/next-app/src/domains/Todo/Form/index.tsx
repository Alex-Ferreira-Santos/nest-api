import * as components from 'components';
import axios from 'axios';
import { useForm } from 'react-hook-form';

type FormData = {
  Title: string;
  Description: string;
};

export function Form() {
  const { register, handleSubmit } = useForm();

  async function Submit({ Title, Description }: FormData) {
    await axios.post('http://localhost:3333/api/todo', {
      title: Title,
      description: Description,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(Submit)}
      className="flex flex-col gap-4 p-6 bg-gray-600 rounded-xl"
    >
      <components.Input placeholder="Title" {...register('Title')} />
      <components.TextArea
        placeholder="Description"
        {...register('Description')}
      />

      <components.Button title="Submit" type="submit" />
    </form>
  );
}
