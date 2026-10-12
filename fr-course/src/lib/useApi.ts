"use client";

import { useCallback, useEffect, useState } from "react";
import { api, errorMessage } from "./api";

interface State<T> {
  key: string | null;
  data: T | null;
  error: string | null;
}

// GET declarativo. Pasa `null` como ruta para no pedir nada todavía.
export function useApi<T>(path: string | null) {
  const [state, setState] = useState<State<T>>({
    key: null,
    data: null,
    error: null,
  });
  const [version, setVersion] = useState(0);

  useEffect(() => {
    if (!path) return;
    let cancelled = false;
    api<T>(path).then(
      (data) => !cancelled && setState({ key: path, data, error: null }),
      (error) =>
        !cancelled &&
        setState({ key: path, data: null, error: errorMessage(error) }),
    );
    return () => {
      cancelled = true;
    };
  }, [path, version]);

  const reload = useCallback(() => setVersion((v) => v + 1), []);
  const current = state.key === path;
  return {
    // Al recargar se conserva lo anterior para que la pantalla no parpadee.
    data: current ? state.data : null,
    error: current ? state.error : null,
    loading: !!path && !current,
    reload,
  };
}
