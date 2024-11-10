import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { useCreateTodos } from "../services/mutations";
import { Todo } from "./TodoList";

const TodoForm = () => {

    const { register, handleSubmit, reset } = useForm<Todo>();
    const {mutate: createTodo, isPending: isCreating} = useCreateTodos()

    const handleCreateTodo: SubmitHandler<Todo> = (data: Todo) => {
        createTodo(data.body, {
            onSuccess: () => {
                reset()
            }
        })
    }

	return (
		<form onSubmit={handleSubmit(handleCreateTodo)}>
			<Flex gap={2}>
				<Input
					type='text'
					{...register('body')}
				/>
				<Button
					mx={2}
					type='submit'
					_active={{
						transform: "scale(.97)",
					}}
				>
					{isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
				</Button>
			</Flex>
		</form>
	);
};
export default TodoForm;