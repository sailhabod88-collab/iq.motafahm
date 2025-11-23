// pages/lectures/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import VideoPlayer from '../components/VideoPlayer'; // تأكد من المسار الصحيح

// بيانات وهمية لتفاصيل المحاضرة
const lectureDetails = {
    'L1': { title: 'المتجهات: الجزء الأول', description: 'شرح مفهوم المتجهات الأساسي للسادس العلمي.', teacher: 'أ. أحمد علي' },
};

export default function LecturePage() {
  const router = useRouter();
  const { id } = router.query;

  const details = lectureDetails[id] || { title: 'محاضرة غير معروفة', description: 'يُرجى اختيار محاضرة صحيحة.', teacher: 'غير محدد' };

  return (
    <>
      <Head>
        <title>{details.title}</title>
      </Head>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{details.title}</h1>
        <p className="text-md text-gray-600 mb-8">المدرس: {details.teacher}</p>

        {/* مشغل الفيديو الفعلي */}
        <div className="mb-10">
          <VideoPlayer 
            lectureTitle={details.title}
            resolutions={[
              { quality: '1080p', url: '/videos/lec1_1080.mp4' },
              { quality: '720p', url: '/videos/lec1_720.mp4' },
              { quality: '360p', url: '/videos/lec1_360.mp4' }
            ]}
          />
        </div>

        {/* وصف المحاضرة */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">وصف المحاضرة</h2>
            <p className="text-gray-700">{details.description}</p>
        </div>

        <button 
          onClick={() => router.back()} 
          className="mt-10 text-blue-600 hover:text-blue-800 transition"
        >
          العودة للصفحة السابقة
        </button>
      </div>
    </>
  );
}
