// src/hooks/useApi.ts
import { useState, useCallback } from "react";

type HttpMethod = "GET" | "POST" | "PUT";

export default function useApi(baseUrl?: string) {
  baseUrl = baseUrl ?? "https://strive-server.onrender.com";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const request = useCallback(
    async <ResData = unknown>(
      endpoint: string,
      method: HttpMethod,
      body?: unknown,
      customHeaders?: HeadersInit
    ): Promise<ResData> => {
      setLoading(true);
      setError(null);

      try {
        const headers: HeadersInit = {
          "Content-Type": "application/json",
          ...(customHeaders || {}),
        };

        const res = await fetch(`${baseUrl}${endpoint}`, {
          method,
          headers,
          body: body !== undefined ? JSON.stringify(body) : undefined,
        });

        // read as text in case there's no JSON payload
        const text = await res.text();
        const data = text ? (JSON.parse(text) as ResData) : ({} as ResData);

        if (!res.ok) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const msg = (data as any)?.message;
          throw new Error(
            msg ?? `${method} ${endpoint} failed (status ${res.status})`
          );
        }

        return data;
      } catch (rawErr: unknown) {
        // proper narrowing of unknown->Error
        const err =
          rawErr instanceof Error ? rawErr : new Error(String(rawErr));
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  const get = useCallback(
    <T = unknown>(endpoint: string, headers?: HeadersInit) =>
      request<T>(endpoint, "GET", undefined, headers),
    [request]
  );

  const post = useCallback(
    <Req = unknown, Res = unknown>(
      endpoint: string,
      body: Req,
      headers?: HeadersInit
    ) => request<Res>(endpoint, "POST", body, headers),
    [request]
  );

  const put = useCallback(
    <Req = unknown, Res = unknown>(
      endpoint: string,
      body: Req,
      headers?: HeadersInit
    ) => request<Res>(endpoint, "PUT", body, headers),
    [request]
  );

  return { loading, error, get, post, put };
}

export type UseApiReturn = ReturnType<typeof useApi>;
