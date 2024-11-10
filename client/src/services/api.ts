import axios from "axios"
import { Todo } from "../components/TodoList"

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "/api"

const axiosInstance = axios.create({baseURL: BASE_URL})

export const getTodos = async(): Promise<Todo[]> => {
    try {
        const res =  await axiosInstance.get<Todo[]>("todos")
        return res.data
    } catch (error) {
        throw new Error("Something went wrong: " + error)
    }
}

export const createTodos = async(data: string) => {
    try {
        const res = await axiosInstance.post("todos", JSON.stringify({ body: data }), { headers: {"Content-Type": "application/json"} })
        return res.data
    } catch (error) {
        throw new Error("something went wrong: " + error)
    }
}

export const updateTodos = async(data: Todo) => {
    try {
        const res = await axiosInstance.patch(`todos/${data._id}`)
        return res.data
    } catch (error) {
        throw new Error("something went wrong: " + error)
    }
}

export const deleteTodos = async(data: Todo) => {
    try {
        const res = await axiosInstance.delete(`todos/${data._id}`)
        return res.data
    } catch (error) {
        throw new Error("something went wrong: " + error)
    }
}