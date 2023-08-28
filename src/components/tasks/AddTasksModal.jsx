import React from "react";
import Modal from "../ui/Modal";
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/features/tasks/tasksSlice";
const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const dispatch=useDispatch();
     const { register, handleSubmit, watch, reset } = useForm();
     const onCancel=()=>{
        reset();
        setIsOpen(false);
    }
     const onSubmit =( data) =>{
       dispatch(addTask(data));
         onCancel();
        
        };

      
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Md alamin faraji"
    >
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">Title</label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register('title')}
            />
         </div>
         <div className="flex flex-col mb-5">
            <label htmlFor="description" className="mb-2">Description</label>
            <input
              className="w-full rounded-md"
              type="text"
              id="description"
              {...register('description')}
            />
         </div>
         <div className="flex flex-col mb-5">
            <label htmlFor="date" className="mb-2">Date</label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register('date')}
            />
         </div>
         <div className="flex flex-col mb-5">
            <label htmlFor="assignedTo" className="mb-2">Assigned</label>
            <select
              className="w-full rounded-md"
             
              id="assignedTo"
              {...register('assignedTo')}
            >
                <option value="mir Hussain">Mir Hussain</option>
                <option value="md Alamin">Md Alamin</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
                <option value="mir Hussain">Mir Hussain</option>
            </select>

         </div>
         <div className="flex flex-col mb-5">
            <label htmlFor="priority" className="mb-2">Priority</label>
            <select
              className="w-full rounded-md"
            
              id="priority"
              {...register('priority')}
            >
                <option defaultValue="hight"> High</option>
                <option value="medium"> Medium</option>
                <option value="low"> Low</option>
            </select>
         </div>
         <div className="flex gap-3 justify-end">
            <button onClick={()=>onCancel()} type="button" className="btn btn-danger">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
         </div>
         <button type="submit">Submit</button>
        </form>
    </Modal>
  );
};

export default AddTasksModal;
