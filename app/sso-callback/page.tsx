import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallbackPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4efe4]">
      <AuthenticateWithRedirectCallback />
    </main>
  );
}
