import { useEffect, useState } from "react";
import axios from "axios";
import { fetchSingleUser } from "./fetch-user.ts";
import { TUser } from "../../types/user.ts";

export const useFetchSingleUser = (id?: number) => {
  const [user, setUser] = useState<TUser | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    const source = axios.CancelToken.source();
    fetchSingleUser(id, source.token)
      .then(setUser)
      .catch((e) => {
        if (e.message !== "canceled") {
          setError("При обрабботке запроса за юзером произошла ошибка");
          console.error(e);
        }
      });
    return () => source.cancel();
  }, [id]);

  return { user, error };
};
