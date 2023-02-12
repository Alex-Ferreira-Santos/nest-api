import * as components from 'components';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

type FormData = {
  Title: string;
  Description: string;
};

export function UpdateModal() {
  const { register, handleSubmit, reset } = useForm();

  async function Submit({ Title, Description }: FormData) {
    await axios.put('http://localhost:3333/api/todo', {
      title: Title,
      description: Description,
    });
  }

  useEffect(() => {
    reset({
      Title: '',
      Description: '',
    });
  }, []);

  return (
    <div className="bg-black bg-opacity-30 absolute inset-0 flex justify-center items-center">
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
    </div>
  );
}
