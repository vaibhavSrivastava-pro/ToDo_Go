import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodos, deleteTodos, updateTodos } from "./api";
import { Todo } from "../components/TodoList";


export function useCreateTodos(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: string) => createTodos(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"]})
        },
        onError: (error) => {
            console.log(error)
        }
    })
}

export function useUpdateTodos(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: Todo) => updateTodos(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"]})
        },
        onError: (error) => {
            console.log(error)
        }
    })
}

export function useDeleteTodos(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: Todo) => deleteTodos(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"]})
        },
        onError: (error) => {
            console.log(error)
        }
    })
}