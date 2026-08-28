import type { Metadata } from "next";
import LoginPage from "@/components/LoginPage";

export const metadata: Metadata = {
  title: "Welcome Back | Sarvāṅgaḥ",
  description: "Continue your journey inward with Sarvāṅgaḥ.",
};

export default function Page() {
  return <LoginPage />;
}
