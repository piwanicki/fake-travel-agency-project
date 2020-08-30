export const NEWS_LOADING = "NEWS_LOADING";
export const NEWS_SUCCESS = "NEWS_SUCCESS";
export const NEWS_ERROR = "NEWS_ERROR";
export const NEWS_ADD = "NEWS_ADD";

interface NewsLoading {
    type: typeof NEWS_LOADING
}

interface NewsSuccess {
    type: typeof NEWS_SUCCESS
    data: {
        news: Array<any>
    }
}

interface NewsError {
    type: typeof NEWS_ERROR
    error: string
}

interface NewsAdd {
    type: typeof NEWS_ADD
    data: {
        news: Array<any>
    }
}


export type NewsActionTypes = NewsLoading | NewsSuccess | NewsError | NewsAdd;