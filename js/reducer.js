// add code snippets from README

//1. Core facts about how redux works 
//action -> reducer -> new state
let state; 
function reducer(state = {count:0}, action){ //4. Use a defualt argument in the reducer to set the inital state. 
    switch (action.type) {
        case 'INCREASE_COUNT' :
            return {count: state.count + 1};
        default:
            return state;
    }
}

//2. wrap the execution of our reducer in a function that we call dispatch.
function dispatch(action) {
    state = reducer(state, action);
    render(); //<- Ties the rendering function to our dispatch function 
}

//3.Use the render function to display our state.
function render() {
    let container = document.getElementById('container');
    container.textContent = state.count;
}
//Dispatch action that returns our inital state. 
dispatch({type: '@@INIT'})

//5. Intefrating dispatch with a user event
let button = document.getElementById('button');

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})

// Now every time we click, we dispatch an action of type 'INCREASE_COUNT'. Dispatch first calls our reducer, which updates our state. Then dispatch renders the updated view.