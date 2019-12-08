// Doc: https://gist.github.com/rhythnic/6521495650a215ccab8bf7120949fb7d
// Set a value at a path within state
// Create objects and arrays as needed
// Path is an array, and array indicies are numbers (not string numbers)
// setUserName: setPath(['user', 'name'])
// commit('setUserName', 'foo')

export const set = key => (state, val) => {
    state[key] = val;
};
