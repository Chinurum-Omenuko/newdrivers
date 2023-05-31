import './Navbar.css'

function Navbar() {
    return(
    <nav class="flex flex-row fixed justify-between w-full px-20 py-5">
        <div class="logo">
            <a href="./index.html">Chinurum Omenuko</a>
        </div>
        <ul class="[&>a]:m-10">
            <a href="http://">About</a>
            <a href="http://">Projects</a>
            <a href="http://">Contact</a>
        </ul>
    </nav>
    );
}

export default Navbar