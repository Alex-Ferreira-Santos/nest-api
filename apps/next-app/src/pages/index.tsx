import * as todo from 'domains/Todo';

export function Index() {
  return (
    <div className="grid grid-cols-3 gap-8 w-full bg-gray-800 min-h-[100vh] p-6">
      <todo.Form />
      <todo.List />
    </div>
  );
}

export default Index;
