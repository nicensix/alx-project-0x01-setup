import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <p>Here you will find all the users!</p>
      </main>
    </div>
  );
};

export default UsersPage;