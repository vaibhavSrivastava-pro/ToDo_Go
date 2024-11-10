import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./api";
import { Todo } from "../components/TodoList";

export function useTodos(){
    return useQuery<Todo[]>({
        queryKey: ["todos"],
        queryFn: getTodos
    })
}
