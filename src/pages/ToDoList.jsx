import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import validator from "validator";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "../store/feauters/CounterSlice";
import {logout} from "../store/feauters/authSlice"
export default function ToDoList(/*{ value }*/) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    hobbies: []
  });

  const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target;

    setFormData((prev) => {
      return checked
        ? { ...prev, hobbies: [...prev.hobbies, value] }
        : { ...prev, hobbies: prev.hobbies.filter((h) => h !== value) };
    });
  }

  function validateForm() {
    const { name, age, email, phone, gender, hobbies } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    else if (/^\d/.test(name)) newErrors.name = "Name cannot start with a digit.";

    if (!age || age <= 0) newErrors.age = "Age must be greater than 0.";
    if (!phone || phone.length !== 10) newErrors.phone = "Phone must be 10 digits.";
    if (!validator.isEmail(email)) newErrors.email = "Invalid email format.";
    if (!gender) newErrors.gender = "Please select a gender.";
    if (hobbies.length === 0) newErrors.hobbies = "Select at least one hobby.";
    return Object.keys(newErrors).length ? newErrors : null;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);

      Swal.fire({
        title: "Validation Error",
        text: "Please correct highlighted fields.",
        icon: "error",
        confirmButtonText: "OK"
      });

      return;
    }

    setErrors({});

    Swal.fire({
      title: "Form Submitted",
      text: JSON.stringify(formData, null, 2),
      icon: "success",
      confirmButtonText: "OK"
    });

    setFormData({
      name: "",
      age: "",
      phone: "",
      gender: "",
      hobbies: []
    });
  }

  // const { count, setcount, increment, decrement } = value;
  const count = useSelector((state) => state.counter.value )
  const dispatch = useDispatch()

  const [tasks, setTasks] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    if (newTodo.trim() === "") {
      Swal.fire({
        title: "Cannot be Empty!",
        text: "Please enter a valid task",
        icon: "warning",
        confirmButtonText: "OK"
      });
      return;
    }
    setTasks((prev) => [...prev, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
    // increment();
    dispatch(increment())
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    // decrement();
    if(!count == 0)
    dispatch(decrement())
  }
  const handleout =()=>{
    dispatch(logout())
  }

  return (
    <div className="mt-12 w-full h-full flex flex-col justify-center items-center text-lg text-white">
   <div className="m-7 h-15 flex justify-around items-center w-full bg-white">
    <p className="text-black text-2xl">Welcome to To Do List</p>
      <button
          className="w-25 h-12 bg-black text-white p-2 rounded-xl cursor-pointer"
          onClick={handleout}
        >
          Logout
        </button> </div>
      {/* Todo Input */}
      <div>
        <input
          className="mb-8 mr-6 p-2 rounded-xl bg-white text-black w-100"
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button
          className="w-25 bg-white text-black p-2 rounded-xl cursor-pointer"
          onClick={addNewTask}
        >
          Add Task
        </button>
      </div>
      

      {/* Todo List */}
      <div className="flex flex-col justify-center mb-10 items-center text-lg 
            w-[50%] h-auto bg-white text-black p-4 rounded-xl">
        <h4 className="mb-4 text-3xl font-semibold">To-Do List</h4>
        <hr className="w-full border-2" />

        <ul className="pr-5 list-disc p-4">
          {tasks.map((t) => (
            <li className="m-4 pr-4 text-2xl w-80" key={t.id}>
              <span className="text-black text-2xl pr-5">{t.task}</span>

              <button
                className="w-35 bg-black text-white p-2 rounded-xl cursor-pointer"
                onClick={() => deleteTask(t.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <p>Count: {count} </p>

        <button
          className="w-35 bg-black text-white p-2 rounded-xl cursor-pointer"
          onClick={() => {
            setTasks([]);
          }}
        >
          New List
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white text-black p-6 rounded-xl w-[50%]"
      >
        <h3 className="text-2xl font-bold mb-2">User Information</h3>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className={`p-2 border rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
          className={`p-2 border rounded ${
            errors.age ? "border-red-500" : "border-gray-300"
          }`}
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className={`p-2 border rounded ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={`p-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />

        {/* Gender */}
        <div
          className={`flex gap-4 p-2 rounded ${
            errors.gender ? "border border-red-500" : ""
          }`}
        >
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            &nbsp; Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
           &nbsp;  Female
          </label>
        </div>

        {/* Hobbies */}
        <div
          className={`flex gap-4 p-2 rounded ${
            errors.hobbies ? "border border-red-500" : ""
          }`}
        >
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              checked={formData.hobbies.includes("reading")}
              onChange={handleCheckbox}
            />
            Reading
          </label>

          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="sports"
              checked={formData.hobbies.includes("sports")}
              onChange={handleCheckbox}
            />
            Sports
          </label>

          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="gaming"
              checked={formData.hobbies.includes("gaming")}
              onChange={handleCheckbox}
            />
            Gaming
          </label>
        </div>

        <button
          type="submit"
          className="bg-black text-white p-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
