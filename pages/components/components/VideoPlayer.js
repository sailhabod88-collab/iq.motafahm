// components/VideoPlayer.js
import React from 'react';

export default function VideoPlayer({ lectureTitle, resolutions }) {
  return (
    <div className="bg-black aspect-video rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between">
        {/* منطقة الفيديو الوهمية */}
        <div className="flex-grow flex justify-center items-center bg-gray-900">
            <p className="text-white/50 text-xl animate-pulse">جاري تشغيل {lectureTitle}...</p>
        </div>
        
        {/* شريط التحكم والجودة */}
        <div className="p-3 flex items-center justify-between bg-gray-800">
            <div className="flex items-center">
                <span className="text-sm text-white font-semibold ml-3">الدقة:</span>
                {resolutions.map((res, index) => (
                    <button 
                        key={index} 
                        className={`text-xs px-3 py-1 rounded-full ml-1 transition ${
                            res.quality === '720p' // يمكنك تحديد الدقة الافتراضية
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-600 text-white hover:bg-gray-500'
                        }`}
                    >
                        {res.quality}
                    </button>
                ))}
            </div>
            <p className="text-sm text-gray-400">{lectureTitle}</p>
        </div>
    </div>
  );
}
