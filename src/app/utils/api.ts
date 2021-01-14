import { environment } from 'src/environments/environment';

export function createApiUrl(path: string): string {
    let apiPath = environment.api;
    apiPath = apiPath.slice(-1)[0] === '/' ? apiPath.slice(0, -2) : apiPath;
    return `${apiPath}/${path}`;
}
