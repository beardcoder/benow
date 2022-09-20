import { ID } from "@directus/sdk";

export function getAssetURL(id: ID) {
    return `${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${id}`;
  }