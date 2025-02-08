document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const addBtn = document.getElementById("addBtn");

  // Load todos from localStorage
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Display todos in the list
  function displayTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo;

      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteTodo(index);

      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
  }

  // Save todos to localStorage
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Delete todo function
  function deleteTodo(index) {
    todos.splice(index, 1); // Remove the todo from the array
    saveTodos(); // Save the updated array
    displayTodos(); // Re-display the list
  }

  // Event listener for Enter key press
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  // Event listener for Add button click
  addBtn.addEventListener("click", addTodo);

  // Function to add a new todo
  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
      todos.push(todoText);
      todoInput.value = ""; // Clear the input field
      saveTodos(); // Save to localStorage
      displayTodos(); // Re-display the list
    }
  }

  // Initial display of todos
  displayTodos();
});
