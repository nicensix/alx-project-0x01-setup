const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/posts" className="hover:underline">Posts</a></li>
          <li><a href="/users" className="hover:underline">Users</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;