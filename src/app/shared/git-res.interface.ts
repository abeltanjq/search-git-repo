export interface IGitResponse {
    total_count?: number;
    incomplete_results?: boolean;
    items?: Array<object>;
    message?: string;
    errors?: Array<object>;
    documentation_url?: string;
}
