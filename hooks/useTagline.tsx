import useSWR from 'swr';

export type TaglineResponse = {
    tagline: string | null;
    loading: boolean;
    error: boolean;
}

export const useTagline = (): TaglineResponse => {

    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const req = useSWR('/api/tagline', fetcher);

    if (req.data) return {
        tagline: req.data.tagline,
        loading: false,
        error: false
    }

    return {
        tagline: null,
        loading: !req.data && !req.error,
        error: req.error
    }

}