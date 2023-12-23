function Navbar() {
    return <div className="flex flex-row justify-between bg-red-400 p-6">
        <div className="border-b border-green-100">
            Logo
        </div>
        <nav className="flex flex-row justify-between gap-4">
            <ul className="flex flex-row gap-4">
                <li>Products</li>
                <li>Abouts</li>
                <li>Settings</li>
            </ul>
        </nav>
        <div className="rounded-2xl border-white bg-black px-4">
            Sign In
        </div>
    </div>;
}

export default Navbar;