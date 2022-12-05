// this is an example for using useApiProvider for multi framework
// 

import { ApiConfig } from "@common/types/api";
import fetchApi from "../../shopify/utils/fetch-api";

class Config {
    private config: ApiConfig;
    constructor(config: ApiConfig) {
        this.config = config;
    }

    getConfig(): ApiConfig {
        return this.config;
    }
}

const configWrapper = new Config({
    apiUrl: "http://localhost:4000/api",
    fetch: fetchApi,
});

export function getConfig() {
    return configWrapper.getConfig();
};