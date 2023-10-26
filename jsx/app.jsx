const app = document.getElementById('app');
function createTitle(title) {
    return title ?? 'Default Title';
}


function Header({ title }) {
    // can be props or destructure the props that you're passing in
    console.log(title)
    return <h1>{createTitle(title)}</h1>;                
}

function HomePage() {
    const [likes, setLikes] = React.useState(0);
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