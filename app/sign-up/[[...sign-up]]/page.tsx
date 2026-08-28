import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f3e7] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-[440px] justify-center">
        <SignUp />
      </div>
    </main>
  );
}