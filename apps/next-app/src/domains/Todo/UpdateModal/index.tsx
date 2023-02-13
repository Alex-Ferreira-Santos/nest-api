import * as components from 'components';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { useStore } from 'domains/Todo/store';

type FormData = {
  Title: string;
  Description: string;
};

export function UpdateModal({
  setShowUpdateModal,
}: {
  setShowUpdateModal: (val: boolean) => void;
}) {
  const selectedData = useStore((store) => store.state.selectedData);
  const { control, handleSubmit, reset, setValue } = useForm();

  async function Submit({ Title, Description }: FormData) {
    try {
      await axios.put('http://localhost:3333/api/todo', {
        title: Title,
        description: Description,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setValue('Title', selectedData.title);
    reset({
      Title: selectedData.title,
      Description: selectedData.description,
    });
  }, [selectedData]);

  return (
    <div className="bg-black bg-opacity-30 absolute inset-0 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(Submit)}
        className="flex flex-col gap-4 p-6 bg-gray-600 rounded-xl min-w-[30%]"
      >
        <Controller
          name="Title"
          defaultValue={''}
          control={control}
          render={({ field: { onChange, value } }) => (
            <components.Input
              onChange={onChange}
              value={value}
              placeholder="Title"
            />
          )}
        />

        <Controller
          name="Description"
          defaultValue={''}
          control={control}
          render={({ field: { onChange, value } }) => (
            <components.TextArea
              onChange={onChange}
              rows={5}
              value={value}
              placeholder="Description"
            />
          )}
        />

        <div className="flex items-center gap-4">
          <components.Button
            title="Back"
            type="button"
            color="secondary"
            onClick={() => setShowUpdateModal(false)}
          />
          <components.Button title="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
}
