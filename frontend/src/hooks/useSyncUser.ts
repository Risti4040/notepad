import { useAuth, useUser } from "@clerk/react";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { syncUser } from "../lib/api";

function useSyncUser() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const [syncedUserId, setSyncedUserId] = useState<string | null>(null);
  const attemptedUserId = useRef<string | null>(null);

  const { mutate, isError } = useMutation({
    mutationFn: syncUser,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10_000), // backoff
  });

  useEffect(() => {
    if (!isSignedIn || !user) {
      attemptedUserId.current = null;
      setSyncedUserId(null);
      return;
    }

    if (attemptedUserId.current === user.id) return;
    attemptedUserId.current = user.id;

    const userId = user.id;
    mutate(
      {
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName ?? user.firstName ?? null,
        imageUrl: user.imageUrl,
      },
      { onSuccess: () => setSyncedUserId(userId) },
    );
  }, [isSignedIn, user, mutate]);

  return {
    isSynced: !!user && syncedUserId === user.id,
    isError,
  };
}

export default useSyncUser;
