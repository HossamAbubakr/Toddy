let todos = {
  h2vkmxd6nmp5on6aja5g: {
    id: "h2vkmxd6nmp5on6aja5g",
    timestamp: "Mon Apr 05 2021",
    title: "Clean",
    content: "Clean the house",
    activity: "Plan your budget",
  },
  cg7rgoea4f2fgpjzw4v2: {
    id: "cg7rgoea4f2fgpjzw4v2",
    timestamp: "Fri Apr 16 2021",
    title: "Homework",
    content: "Finish the math homework",
    activity: "Go to the gym",
  },
  crx7ih1crfrlq45mdj4b: {
    id: "crx7ih1crfrlq45mdj4b",
    timestamp: "Sun Apr 25 2021",
    title: "Go Out",
    content: "Go out with my friends",
    activity: "Learn how to make a website",
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const getActivity = () =>
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((randomActivity) => randomActivity.activity);

function formatTodo(title, content, activity) {
  const id = generateID();
  return {
    id,
    timestamp: new Date(Date.now()).toDateString(),
    title,
    content,
    activity,
  };
}

export function getTodos() {
  return new Promise((res, rej) => {
    setTimeout(() => res(todos), 1000);
  });
}

export async function saveTodo(title, content) {
  const activity = await getActivity();
  const formattedTodo = formatTodo(title, content, activity);
  return new Promise((res, rej) => {
    setTimeout(() => {
      todos = { ...todos, [formattedTodo.id]: formattedTodo };
      res(formattedTodo);
    }, 1000);
  });
}

export function deleteTodo(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      todos = delete todos[id];
      res(todos);
    }, 1000);
  });
}
