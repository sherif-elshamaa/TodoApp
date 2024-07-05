In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Design Decisions`

1-This app is designed using component based architecture, small and reusable like TodoList, TodoItem, AddTodo, Loader, Header and Container.
this approach increases maintainability and scalability, but may lead to a higher number of files.

2-using useMemo and React.memo are used to avoid unwanted re-renders but can lead to stale values and debugging challenges when app gets more complex.

3-using basic error handling when fetching data using try-catch block.

### `Code Review and Improvements`

1- add PropTypes to all components to ensure type safety 

2- implement an error boundary to catch and handle errors in the component tree.

3- use more complex state manager like redux and using redux createAsyncThunk instead of useState, it will be very usefull when app gets bigger with more pages to keep the state even if you navigated to another route.

