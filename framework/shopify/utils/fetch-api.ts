import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";
import { API_URL } from "@framework/const";

const fetchApi = async <T>({
    query,
    variables,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
    const res = await fetch(API_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    const { data, errors} = await res.json();

    // ?? is checking if left hand expression is null or undefined --> if it is go with right hand expression
    // || is checking if left hand expression is false, null, undefined, "", 0 --> if it is go with right hand expression
    if (errors) {
        throw new Error(errors[0].message ?? errors.message);
    }

    return { data };
}

export default fetchApi;