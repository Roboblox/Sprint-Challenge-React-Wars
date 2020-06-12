# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

1. Describe component state.

The state is part of the app that can change.
We set its default then we change it dynamically.

1. Describe props.

Props are variables that are declared in the main app component. they are passed to child components through the props argument. the children can use them as if they were native to the child component.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Any state change that happens outside the called function. Any time we change the dom or fetch data we create side effects. If we want to create side effects we use the useEffect function. And we return inside the useEffect function to cleanup anything if needed..
