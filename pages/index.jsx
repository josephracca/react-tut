import { useState } from "react"
{/* <div id="app"></div>
<!-- load in react scripts -->
<!-- <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script> -->
<!-- BABEL SCRIPT -->
<!-- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> -->
<!-- <script type="text/jsx"> --> */}
    // const app = document.getElementById('app');
    function createTitle(title) {
        return title ?? 'Default Title';
    }


    function Header({ title }) {
        // can be props or destructure the props that you're passing in
        console.log(title)
        return <h1>{createTitle(title)}</h1>;                
    }

    export default function HomePage() {
        const [likes, setLikes] = useState(0);
        const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
        function handleClick() {
            console.log('clicked');
            setLikes(likes + 1)
        }
        return <div>
            <Header title='React 💙' />
            <Header/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{ name }</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>;
    }

    // ReactDOM.render(<HomePage />, app);

    // this directly manipulates the DOM
    // const header = document.createElement('h1');
    // const headerContent = document.createTextNode(
    //     'Develop. Preview. Ship. 🚀',
    // );
    // header.appendChild(headerContent);
    // app.appendChild(header);