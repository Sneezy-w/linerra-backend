import { Entity } from 'dynamodb-toolbox';
export declare const StationUserSession: Entity<"StationUserSession", import("dynamodb-toolbox").Table<{
    name: "PK";
    type: "string";
}, {
    name: "SK";
    type: "string";
}, {
    GSI1: {
        type: "global";
        partitionKey: {
            name: "GSI1PK";
            type: "string";
        };
        sortKey: {
            name: "GSI1SK";
            type: "string";
        };
    };
    GSI2: {
        type: "global";
        partitionKey: {
            name: "GSI2PK";
            type: "string";
        };
        sortKey: {
            name: "GSI2SK";
            type: "string";
        };
    };
}, "_et">, import("dynamodb-toolbox").Schema<{
    sessionId: import("dynamodb-toolbox").StringAttribute<{
        required: "always";
        hidden: false;
        key: true;
        savedAs: "PK";
        transform: import("dynamodb-toolbox/transformers/prefix").Prefixer<"STATION_USER_SESSION", "#">;
        defaults: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        links: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        validators: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        enum: undefined;
    }>;
    SK: import("dynamodb-toolbox").StringAttribute<{
        required: "always";
        hidden: false;
        key: true;
        savedAs: undefined;
        transform: undefined;
        defaults: {
            key: unknown;
            put: unknown;
            update: undefined;
        };
        links: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        validators: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        enum: ["SESSION"];
    }>;
    userId: import("dynamodb-toolbox").StringAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
        transform: undefined;
        defaults: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        links: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        validators: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        enum: undefined;
    }>;
    refreshToken: import("dynamodb-toolbox").StringAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
        transform: undefined;
        defaults: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        links: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        validators: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        enum: undefined;
    }>;
    expirationTime: {
        type: "number";
        path?: string | undefined;
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
        enum: undefined;
        transform: undefined;
        big: false;
        defaults: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        links: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
        validators: {
            key: undefined;
            put: undefined;
            update: undefined;
        };
    };
}>, "entity", import("dynamodb-toolbox").TimestampsDefaultOptions, true>;
