# Task-Manager App Documentation

**Introduction**

The Task Manager app is a task management application built using React. It allows users to create, manage, and organise tasks within different status columns. The app provides features such as adding tasks, filtering tasks, drag and drop functionality for task reordering, and task details editing.

**Installation**

Clone the repository from GitHub: [https://github.com/libankhalif97/Task-Manager]
Install the dependencies by running npm install or yarn install in the project directory.
Start the app by running npm start or yarn start.

**Components**

App: The main component that serves as the entry point for the app. It manages the state of tasks, filter, search query, and selected task. It also handles adding, completing, and deleting tasks. Additionally, it includes the DragDropContext for drag and drop functionality and renders the TaskForm, TaskList, and TaskDetails components.

**TaskForm**: A component that renders a form for adding new tasks. It captures input for task title, description, and due date. When submitted, it triggers the addTask function in the App component to add the task to the task list.

**TaskList**: A component that renders the list of tasks. Each task is displayed as a draggable item using the Draggable component from the react-beautiful-dnd library. It receives the tasks array from the App component and maps through the array to render individual tasks.

**TaskDetails**: A component that displays the details of a selected task. It allows users to edit the task title, description, and due date. When updated, it triggers the handleTaskUpdate function in the App component to update the task in the task list.

**Features**

Adding Tasks
To add a new task, enter the task title, description, and due date in the TaskForm component.
Click the "Add Task" button to add the task to the task list.
Completing Tasks
To mark a task as completed, click the checkbox or the "Complete" button associated with the task in the TaskList component.
The task will be visually indicated as completed.
Deleting Tasks
To delete a task, click the "Delete" button associated with the task in the TaskList component.
The task will be removed from the task list.
Filtering Tasks
Use the filter dropdown in the App component to filter tasks based on their completion status.
Select "All" to display all tasks, "Completed" to display only completed tasks, or "Pending" to display only pending tasks.
Searching Tasks
Enter a search query in the search input field in the App component.
The task list will be filtered based on the search query, displaying tasks that match the title or description.
Drag and Drop
To reorder tasks within the task list, click and hold a task, then drag it to the desired position.
To move a task between different status columns, drag the task to the desired column.
Task Details
Click on a task in the TaskList component to view its details in the TaskDetails component.
In the TaskDetails component, edit the task title, description, and due date.
Click the "Save" button to save the changes and update the task in the task list.

**Conclusion**

The Task Manager app provides a user-friendly interface for managing tasks. It offers features such as adding, completing, and deleting tasks, filtering tasks, searching tasks, drag and drop functionality, and task details editing. With its intuitive design and efficient task management capabilities, the app helps users stay organised and productive.
