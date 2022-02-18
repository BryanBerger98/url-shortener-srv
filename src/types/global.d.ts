// declare global {
//     namespace NodeJS {
//         export interface ProcessEnv {
//             PORT: string;
//         }
//     }

//     namespace Express {
//         export interface Request {
//             // user: User
//         }
//     }

// }

declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string;
        MONGODB_URI: string;
        JWT_SECRET: string;
        EMAIL_HOST: string;
        EMAIL_PORT: string;
        EMAIL_USER: string;
        EMAIL_PASS: string;
        FRONT_URL: string;
    }
}