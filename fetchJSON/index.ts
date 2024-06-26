import axios from "axios";

interface TODO {
    id : number;
    title : string;
    completed : boolean;
}

const  url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response =>{
    const todo = response.data as TODO;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;


   
logTodo(id,title,completed);

});

const logTodo  = (id:number,title:string,completed: boolean) =>{
    console.log(`
    The todo ID  with ${id}
    has a title of ${title}
    Is it finished ? ${completed}
    `)

}

