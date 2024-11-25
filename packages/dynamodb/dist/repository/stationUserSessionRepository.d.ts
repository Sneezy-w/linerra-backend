type CreateSessionParams = {
    sessionId: string;
    userId: string;
    refreshToken: string;
    expirationTime: number;
};
export declare const create: (params: CreateSessionParams) => Promise<void>;
export declare const findOne: (sessionId: string) => Promise<{
    SK: "SESSION";
    sessionId: string;
    userId: string;
    refreshToken: string;
    expirationTime: number;
    created: string;
    modified: string;
} | undefined>;
export declare const updateLastUsed: (sessionId: string) => Promise<void>;
export declare const del: (sessionId: string) => Promise<void>;
export {};
