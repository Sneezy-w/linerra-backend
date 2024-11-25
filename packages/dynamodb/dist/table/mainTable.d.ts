import { Table } from 'dynamodb-toolbox';
export declare const MainTable: Table<{
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
}, "_et">;
