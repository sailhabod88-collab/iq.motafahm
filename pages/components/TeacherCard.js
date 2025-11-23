// components/TeacherCard.js
import React from 'react';

export default function TeacherCard({ teacher }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center border border-gray-200 transform transition duration-300 hover:scale-[1.03]">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{teacher.name}</h3>
      <p className="text-gray-600 mb-3">مادة: {teacher.subject}</p>
      <p className="text-sm text-gray-500">{teacher.description}</p>
      <button className="mt-4 text-sm text-white bg-green-500 hover:bg-green-600 py-2 px-5 rounded-full transition">
         مشاهدة المحاضرات
      </button>
    </div>
  );
}
