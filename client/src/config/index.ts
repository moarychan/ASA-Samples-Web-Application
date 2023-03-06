import {b2cPolicies} from "../auth/policies";

console.log(b2cPolicies.authorities.signUpSignIn.authority)

export interface ApiConfig {
    baseUrl: string
    b2cScopes: string[]
}

export interface ObservabilityConfig {
    connectionString: string
}

export interface AppConfig {
    api: ApiConfig
    observability: ObservabilityConfig
}

const config: AppConfig = {
    api: {
        baseUrl: window.ENV_CONFIG.REACT_APP_API_BASE_URL || 'http://localhost:8080',
        b2cScopes: window.ENV_CONFIG.REACT_APP_API_B2C_SCOPES || ["https://shiliadb2c.onmicrosoft.com/backend/TodoList.User"]
    },
    observability: {
        connectionString: window.ENV_CONFIG.REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING || ''
    }
}

export default config;