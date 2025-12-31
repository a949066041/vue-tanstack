export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function fetchTodo(id: string): Promise<Todo> {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json());
}
