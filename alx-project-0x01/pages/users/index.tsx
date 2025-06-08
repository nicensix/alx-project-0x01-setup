const UsersPage: React.FC = () => {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <ul className="list-disc pl-5">
        {users.map((user, index) => (
          <li key={index} className="text-lg">{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;