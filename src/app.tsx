import './styles/main.scss'
import { render } from 'solid-js/web';
import { Scene } from './components/Scene';

const App = () => {
    return <Scene/>;
}

render(() => <App/>, document.getElementById('app') || document.body);