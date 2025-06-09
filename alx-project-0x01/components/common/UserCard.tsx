import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name} ({username})</h2>
      <p className="text-gray-600 mt-2">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: <a href={`https://${website}`} target="_blank" className="text-blue-500">{website}</a></p>
      <div className="mt-4 text-sm text-gray-500">
        <p>Company: {company.name}</p>
        <p className="italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;