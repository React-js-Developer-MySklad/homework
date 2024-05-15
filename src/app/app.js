import html from "./app.html";
import './app.css'
import { initFlowbite } from 'flowbite'

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

rootElement.onload(() => {
    initFlowbite();
})
