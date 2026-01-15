import parent from './parent.js'

const root = () =>  ReactDOM.createRoot(document.querySelector('#root'));

root.render(root())

