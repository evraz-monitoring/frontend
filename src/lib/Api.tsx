import axios from "axios";

interface RequestApiParams
    extends Pick<
        Parameters<typeof axios.request>[0],
        "method" | "headers" | "data" | "signal"
    > {
    url: string;
    timeout?: number;
}

export const requestApi = async (params: RequestApiParams) => {
    const { url, method, headers, data, timeout = 5000 } = params;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await axios.request({
        url,
        method,
        headers: {
            ...headers,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        data,
        signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response;
};

export const attachPath = (url: string, path: string) => {
    return url + path;
};
