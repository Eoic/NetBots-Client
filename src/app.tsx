import './styles/main.scss'
import { render } from 'solid-js/web';

const App = () => {
    return <div> Hello </div>;
}

render(() => <App/>, document.getElementById('app') || document.body);