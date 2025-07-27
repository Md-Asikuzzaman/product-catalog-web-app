"use client";

import { useRouter } from "next/navigation";

const BackToHome = () => {
  const router = useRouter();

  return (
    <span
      className="text-purple-600 hover:underline text-sm cursor-pointer"
      onClick={() => router.back()}
    >
      Back to Home
    </span>
  );
};

export default BackToHome;
