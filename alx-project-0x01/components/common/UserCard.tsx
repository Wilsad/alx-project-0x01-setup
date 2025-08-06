import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-6 m-2">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-sm text-gray-700">{email}</p>
      <p className="text-sm">{phone}</p>
      <a href={`http://${website}`} className="text-blue-500 underline">{website}</a>
    </div>
  );
};

export default UserCard;
