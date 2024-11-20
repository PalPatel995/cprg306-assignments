"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) return null;

  return <div>Shopping List Content Here</div>;
}