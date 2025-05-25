'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Next.js 예시 페이지
        </h1>
        
        {/* 카운터 섹션 */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">인터랙티브 카운터</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              감소
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              증가
            </button>
          </div>
        </div>

        {/* 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Next.js의 장점</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>서버 사이드 렌더링 (SSR)</li>
              <li>정적 사이트 생성 (SSG)</li>
              <li>자동 코드 분할</li>
              <li>빠른 페이지 로딩</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Vercel의 특징</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>자동 배포</li>
              <li>글로벌 CDN</li>
              <li>서버리스 함수</li>
              <li>실시간 분석</li>
            </ul>
          </div>
        </div>

        {/* 폼 섹션 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">간단한 폼</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이름을 입력하세요
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="이름을 입력하세요"
              />
            </div>
            {name && (
              <p className="text-blue-600">
                안녕하세요, {name}님! 환영합니다!
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
