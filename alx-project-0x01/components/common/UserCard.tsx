import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, username, email, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">ID: {id}</span>
      </div>
      <p className="text-gray-600">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Website:</span> {website}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-500 text-sm italic">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;