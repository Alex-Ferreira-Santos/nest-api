import { create } from 'zustand';
import produce from 'immer';
import axios from 'axios';

type Data = {
  title: string;
  description: string;
};

const stateFunction = (set: any, get: any) => {
  const setState = (fn: any) => set(produce(fn));

  const initialState = {
    selectedData: undefined as Data,
    data: [] as Data[],
  };

  return {
    state: {
      ...initialState,
    },
    actions: {
      setSelectedData: (newValue: Data) =>
        setState(({ state }: ReturnType<typeof stateFunction>) => {
          state.selectedData = newValue;
        }),
      setData: (data: Data[]) =>
        setState(({ state }: ReturnType<typeof stateFunction>) => {
          state.data = data;
        }),

      fetchData: async () => {
        try {
          const { data } = await axios.get('http://localhost:3333/api/todo');
          get().actions.setData(data);
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
};

export const useStore = create<ReturnType<typeof stateFunction>>((set, get) =>
  stateFunction(set, get)
);
