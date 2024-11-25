import { Entity } from 'dynamodb-toolbox';
export declare const Shipment: Entity<"Shipment", import("dynamodb-toolbox").Table<{
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
    number: import("dynamodb-toolbox").StringAttribute<{
        required: "always";
        hidden: false;
        key: true;
        savedAs: "PK";
        transform: import("dynamodb-toolbox/transformers/prefix").Prefixer<"SHIPMENT", "#">;
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
        enum: ["SHIPMENT"];
    }>;
    stationId: import("dynamodb-toolbox").StringAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: "GSI1PK";
        transform: import("dynamodb-toolbox/transformers/prefix").Prefixer<"STATION", "#">;
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
    sortTimestamp: import("dynamodb-toolbox").StringAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: "GSI1SK";
        transform: import("dynamodb-toolbox/transformers/prefix").Prefixer<"SHIPMENT", "#">;
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
    GSI2PK: import("dynamodb-toolbox").StringAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
        transform: undefined;
        defaults: {
            key: undefined;
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
        enum: ["SHIPMENT"];
    }>;
    externalId: import("dynamodb-toolbox").StringAttribute<{
        required: "never";
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
    waybillNumber: import("dynamodb-toolbox").StringAttribute<{
        required: "never";
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
    serviceId: import("dynamodb-toolbox").StringAttribute<{
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
    status: import("dynamodb-toolbox").StringAttribute<{
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
        enum: any;
    }>;
    initiation: import("dynamodb-toolbox").MapAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        regionId: import("dynamodb-toolbox").StringAttribute<{
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
        postalCode: import("dynamodb-toolbox").StringAttribute<{
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
        name: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        company: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        phone: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        province: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            id: import("dynamodb-toolbox").StringAttribute<{
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
            name: import("dynamodb-toolbox").StringAttribute<{
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
            code: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        city: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address2: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address3: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
    }>;
    destination: import("dynamodb-toolbox").MapAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        regionId: import("dynamodb-toolbox").StringAttribute<{
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
        postalCode: import("dynamodb-toolbox").StringAttribute<{
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
        name: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        company: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        phone: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        province: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            id: import("dynamodb-toolbox").StringAttribute<{
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
            name: import("dynamodb-toolbox").StringAttribute<{
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
            code: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        city: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address2: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address3: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        type: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        email: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
    }>;
    destinationLocalized: import("dynamodb-toolbox").MapAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        regionId: import("dynamodb-toolbox").StringAttribute<{
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
        postalCode: import("dynamodb-toolbox").StringAttribute<{
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
        name: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        company: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        phone: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        province: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            id: import("dynamodb-toolbox").StringAttribute<{
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
            name: import("dynamodb-toolbox").StringAttribute<{
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
            code: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        city: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address2: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        address3: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
    }>;
    package: import("dynamodb-toolbox").MapAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        type: import("dynamodb-toolbox").StringAttribute<{
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
        packages: import("dynamodb-toolbox").ListAttribute<{
            required: "atLeastOnce";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, import("dynamodb-toolbox").MapAttribute<{
            required: "atLeastOnce";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            waybillNumber: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
            weight: {
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
            dimension: import("dynamodb-toolbox").MapAttribute<{
                required: "never";
                hidden: false;
                key: false;
                savedAs: undefined;
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
            }, {
                length: {
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
                width: {
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
                height: {
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
            }>;
            insurance: import("dynamodb-toolbox").MapAttribute<{
                required: "never";
                hidden: false;
                key: false;
                savedAs: undefined;
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
            }, {
                code: import("dynamodb-toolbox").StringAttribute<{
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
                symbol: import("dynamodb-toolbox").StringAttribute<{
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
                value: import("dynamodb-toolbox").StringAttribute<{
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
            }>;
            additional: import("dynamodb-toolbox").MapAttribute<{
                required: "never";
                hidden: false;
                key: false;
                savedAs: undefined;
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
            }, {
                DC: import("dynamodb-toolbox").MapAttribute<{
                    required: "never";
                    hidden: false;
                    key: false;
                    savedAs: undefined;
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
                }, {
                    state: import("dynamodb-toolbox").StringAttribute<{
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
                    type: import("dynamodb-toolbox").StringAttribute<{
                        required: "never";
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
                }>;
                COD: import("dynamodb-toolbox").MapAttribute<{
                    required: "never";
                    hidden: false;
                    key: false;
                    savedAs: undefined;
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
                }, {
                    state: import("dynamodb-toolbox").StringAttribute<{
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
                    amount: {
                        type: "number";
                        path?: string | undefined;
                        required: "never";
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
                    fund_type: import("dynamodb-toolbox").StringAttribute<{
                        required: "never";
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
                }>;
                AH: import("dynamodb-toolbox").MapAttribute<{
                    required: "never";
                    hidden: false;
                    key: false;
                    savedAs: undefined;
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
                }, {
                    state: import("dynamodb-toolbox").StringAttribute<{
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
                }>;
                ReferenceNumber: import("dynamodb-toolbox").MapAttribute<{
                    required: "never";
                    hidden: false;
                    key: false;
                    savedAs: undefined;
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
                }, {
                    state: import("dynamodb-toolbox").StringAttribute<{
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
                    number: import("dynamodb-toolbox").StringAttribute<{
                        required: "never";
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
                }>;
                info: import("dynamodb-toolbox").MapAttribute<{
                    required: "never";
                    hidden: false;
                    key: false;
                    savedAs: undefined;
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
                }, {
                    state: import("dynamodb-toolbox").StringAttribute<{
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
                    ItemDescriptionForClearance: import("dynamodb-toolbox").StringAttribute<{
                        required: "never";
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
                }>;
                IM: import("dynamodb-toolbox").MapAttribute<{
                    required: "never";
                    hidden: false;
                    key: false;
                    savedAs: undefined;
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
                }, {
                    state: import("dynamodb-toolbox").StringAttribute<{
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
                    description: import("dynamodb-toolbox").StringAttribute<{
                        required: "never";
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
                }>;
                packcode: import("dynamodb-toolbox").MapAttribute<{
                    required: "never";
                    hidden: false;
                    key: false;
                    savedAs: undefined;
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
                }, {
                    state: import("dynamodb-toolbox").StringAttribute<{
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
                }>;
            }>;
            sinsured: {
                type: "number";
                path?: string | undefined;
                required: "never";
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
        }>>;
    }>;
    product: import("dynamodb-toolbox").ListAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, import("dynamodb-toolbox").MapAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        name: import("dynamodb-toolbox").StringAttribute<{
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
        qty: {
            type: "number";
            path?: string | undefined;
            required: "never";
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
        price: {
            type: "number";
            path?: string | undefined;
            required: "never";
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
        unit: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        origin: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        HScode: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
    }>>;
    option: import("dynamodb-toolbox").MapAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        memo: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        packingFee: {
            type: "number";
            path?: string | undefined;
            required: "never";
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
    }>;
    sadditional: import("dynamodb-toolbox").MapAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        DC: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            type: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
        SO: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            'signature-type': import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
        HFP: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        DNS: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        LAD: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        _RFE: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            'other-reason': import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
        EDI: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        signature: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            type: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
        RS: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            code: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
            description: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
        DG: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            type: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
        DIT: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            type: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
        TermsOfTrade: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        IOSS: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            state: import("dynamodb-toolbox").StringAttribute<{
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
            ioss_id: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
            type: import("dynamodb-toolbox").StringAttribute<{
                required: "never";
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
        }>;
    }>;
    price: import("dynamodb-toolbox").MapAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        msrp: import("dynamodb-toolbox").MapAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            code: import("dynamodb-toolbox").StringAttribute<{
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
            symbol: import("dynamodb-toolbox").StringAttribute<{
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
            value: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
        details: import("dynamodb-toolbox").ListAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, import("dynamodb-toolbox").MapAttribute<{
            required: "atLeastOnce";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            code: import("dynamodb-toolbox").StringAttribute<{
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
            description: import("dynamodb-toolbox").StringAttribute<{
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
            price: import("dynamodb-toolbox").MapAttribute<{
                required: "atLeastOnce";
                hidden: false;
                key: false;
                savedAs: undefined;
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
            }, {
                code: import("dynamodb-toolbox").StringAttribute<{
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
                symbol: import("dynamodb-toolbox").StringAttribute<{
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
                value: import("dynamodb-toolbox").StringAttribute<{
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
            }>;
        }>>;
        charges: import("dynamodb-toolbox").ListAttribute<{
            required: "never";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, import("dynamodb-toolbox").MapAttribute<{
            required: "atLeastOnce";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            code: import("dynamodb-toolbox").StringAttribute<{
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
            description: import("dynamodb-toolbox").StringAttribute<{
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
            price: import("dynamodb-toolbox").MapAttribute<{
                required: "atLeastOnce";
                hidden: false;
                key: false;
                savedAs: undefined;
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
            }, {
                code: import("dynamodb-toolbox").StringAttribute<{
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
                symbol: import("dynamodb-toolbox").StringAttribute<{
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
                value: import("dynamodb-toolbox").StringAttribute<{
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
            }>;
        }>>;
    }>;
    payments: import("dynamodb-toolbox").ListAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, import("dynamodb-toolbox").MapAttribute<{
        required: "atLeastOnce";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        dateTime: import("dynamodb-toolbox").StringAttribute<{
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
        description: import("dynamodb-toolbox").StringAttribute<{
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
        subtotal: import("dynamodb-toolbox").MapAttribute<{
            required: "atLeastOnce";
            hidden: false;
            key: false;
            savedAs: undefined;
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
        }, {
            code: import("dynamodb-toolbox").StringAttribute<{
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
            symbol: import("dynamodb-toolbox").StringAttribute<{
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
            value: import("dynamodb-toolbox").StringAttribute<{
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
        }>;
    }>>;
    total: import("dynamodb-toolbox").MapAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        code: import("dynamodb-toolbox").StringAttribute<{
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
        symbol: import("dynamodb-toolbox").StringAttribute<{
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
        value: import("dynamodb-toolbox").StringAttribute<{
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
    }>;
    submittedAt: import("dynamodb-toolbox").StringAttribute<{
        required: "never";
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
    labelFile: import("dynamodb-toolbox").MapAttribute<{
        required: "never";
        hidden: false;
        key: false;
        savedAs: undefined;
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
    }, {
        label: import("dynamodb-toolbox").StringAttribute<{
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
        invoice: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
        deliver: import("dynamodb-toolbox").StringAttribute<{
            required: "never";
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
    }>;
}>, "entity", import("dynamodb-toolbox").TimestampsDefaultOptions, true>;
