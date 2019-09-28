import DirectusSDK from '@directus/sdk-js';
import { AxiosAdapter, AxiosPromise } from 'axios';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { Article } from '~/types';

/**
 *Api request to dev.to to get acticles
 *
 * @export
 * @param {NuxtAxiosInstance} $axios
 * @returns {Promise}
 */
export async function blog($axios: NuxtAxiosInstance): Promise<Article[]> {
    return await $axios
        .$get(`https://dev.to/api/articles?username=beardcoder`, {
            headers: {
                'api-key': 'rvcLkchoa3tPiH8GR4aPGe5r',
                'Content-Type': 'application/json',
            },
        })
        .then((data: Article[]) => data);
}
