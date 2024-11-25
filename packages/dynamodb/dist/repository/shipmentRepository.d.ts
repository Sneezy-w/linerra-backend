type QueryShipmentParams = {
    limit: number;
    keyword?: string;
    status?: string;
    dateRange: [string, string];
    lastEvaluatedKey?: Record<string, unknown>;
};
export declare const create: (shipmentDO: any) => Promise<{
    number: any;
}>;
export declare const findOne: (number: string) => Promise<{
    number: string;
    serviceId: string;
    SK: "SHIPMENT";
    GSI2PK: "SHIPMENT";
    created: string;
    modified: string;
    stationId: string;
    sortTimestamp: string;
    status: any;
    initiation: {
        regionId: string;
        postalCode: string;
        name?: string | undefined;
        company?: string | undefined;
        phone?: string | undefined;
        province?: {
            name: string;
            id: string;
            code: string;
        } | undefined;
        city?: string | undefined;
        address?: string | undefined;
        address2?: string | undefined;
        address3?: string | undefined;
    };
    destination: {
        regionId: string;
        postalCode: string;
        name?: string | undefined;
        type?: string | undefined;
        company?: string | undefined;
        phone?: string | undefined;
        province?: {
            name: string;
            id: string;
            code: string;
        } | undefined;
        city?: string | undefined;
        address?: string | undefined;
        address2?: string | undefined;
        address3?: string | undefined;
        email?: string | undefined;
    };
    package: {
        type: string;
        packages: {
            weight: number;
            waybillNumber?: string | undefined;
            dimension?: {
                length: number;
                width: number;
                height: number;
            } | undefined;
            insurance?: {
                symbol: string;
                value: string;
                code: string;
            } | undefined;
            additional?: {
                DC?: {
                    state: string;
                    type?: string | undefined;
                } | undefined;
                COD?: {
                    state: string;
                    amount?: number | undefined;
                    fund_type?: string | undefined;
                } | undefined;
                AH?: {
                    state: string;
                } | undefined;
                ReferenceNumber?: {
                    state: string;
                    number?: string | undefined;
                } | undefined;
                info?: {
                    state: string;
                    ItemDescriptionForClearance?: string | undefined;
                } | undefined;
                IM?: {
                    state: string;
                    description?: string | undefined;
                } | undefined;
                packcode?: {
                    state: string;
                } | undefined;
            } | undefined;
            sinsured?: number | undefined;
        }[];
    };
    externalId?: string | undefined;
    waybillNumber?: string | undefined;
    destinationLocalized?: {
        regionId: string;
        postalCode: string;
        name?: string | undefined;
        company?: string | undefined;
        phone?: string | undefined;
        province?: {
            name: string;
            id: string;
            code: string;
        } | undefined;
        city?: string | undefined;
        address?: string | undefined;
        address2?: string | undefined;
        address3?: string | undefined;
    } | undefined;
    price?: {
        msrp?: {
            symbol: string;
            value: string;
            code: string;
        } | undefined;
        details?: {
            code: string;
            description: string;
            price: {
                symbol: string;
                value: string;
                code: string;
            };
        }[] | undefined;
        charges?: {
            code: string;
            description: string;
            price: {
                symbol: string;
                value: string;
                code: string;
            };
        }[] | undefined;
    } | undefined;
    product?: {
        name: string;
        qty?: number | undefined;
        price?: number | undefined;
        unit?: string | undefined;
        origin?: string | undefined;
        HScode?: string | undefined;
    }[] | undefined;
    option?: {
        memo?: string | undefined;
        packingFee?: number | undefined;
    } | undefined;
    sadditional?: {
        DC?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        SO?: {
            state: string;
            "signature-type"?: string | undefined;
        } | undefined;
        HFP?: {
            state: string;
        } | undefined;
        DNS?: {
            state: string;
        } | undefined;
        LAD?: {
            state: string;
        } | undefined;
        _RFE?: {
            state: string;
            "other-reason"?: string | undefined;
        } | undefined;
        EDI?: {
            state: string;
        } | undefined;
        signature?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        RS?: {
            state: string;
            code?: string | undefined;
            description?: string | undefined;
        } | undefined;
        DG?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        DIT?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        TermsOfTrade?: {
            state: string;
        } | undefined;
        IOSS?: {
            state: string;
            type?: string | undefined;
            ioss_id?: string | undefined;
        } | undefined;
    } | undefined;
    payments?: {
        description: string;
        dateTime: string;
        subtotal: {
            symbol: string;
            value: string;
            code: string;
        };
    }[] | undefined;
    total?: {
        symbol: string;
        value: string;
        code: string;
    } | undefined;
    submittedAt?: string | undefined;
    labelFile?: {
        label: string;
        invoice?: string | undefined;
        deliver?: string | undefined;
    } | undefined;
} | undefined>;
export declare const update: (shipmentDO: any) => Promise<{
    number: any;
}>;
export declare const updateAndReturn: (shipmentDO: any) => Promise<{
    number: string;
    serviceId: string;
    SK: "SHIPMENT";
    GSI2PK: "SHIPMENT";
    created: string;
    modified: string;
    stationId: string;
    sortTimestamp: string;
    status: any;
    initiation: {
        regionId: string;
        postalCode: string;
        name?: string | undefined;
        company?: string | undefined;
        phone?: string | undefined;
        province?: {
            name: string;
            id: string;
            code: string;
        } | undefined;
        city?: string | undefined;
        address?: string | undefined;
        address2?: string | undefined;
        address3?: string | undefined;
    };
    destination: {
        regionId: string;
        postalCode: string;
        name?: string | undefined;
        type?: string | undefined;
        company?: string | undefined;
        phone?: string | undefined;
        province?: {
            name: string;
            id: string;
            code: string;
        } | undefined;
        city?: string | undefined;
        address?: string | undefined;
        address2?: string | undefined;
        address3?: string | undefined;
        email?: string | undefined;
    };
    package: {
        type: string;
        packages: {
            weight: number;
            waybillNumber?: string | undefined;
            dimension?: {
                length: number;
                width: number;
                height: number;
            } | undefined;
            insurance?: {
                symbol: string;
                value: string;
                code: string;
            } | undefined;
            additional?: {
                DC?: {
                    state: string;
                    type?: string | undefined;
                } | undefined;
                COD?: {
                    state: string;
                    amount?: number | undefined;
                    fund_type?: string | undefined;
                } | undefined;
                AH?: {
                    state: string;
                } | undefined;
                ReferenceNumber?: {
                    state: string;
                    number?: string | undefined;
                } | undefined;
                info?: {
                    state: string;
                    ItemDescriptionForClearance?: string | undefined;
                } | undefined;
                IM?: {
                    state: string;
                    description?: string | undefined;
                } | undefined;
                packcode?: {
                    state: string;
                } | undefined;
            } | undefined;
            sinsured?: number | undefined;
        }[];
    };
    externalId?: string | undefined;
    waybillNumber?: string | undefined;
    destinationLocalized?: {
        regionId: string;
        postalCode: string;
        name?: string | undefined;
        company?: string | undefined;
        phone?: string | undefined;
        province?: {
            name: string;
            id: string;
            code: string;
        } | undefined;
        city?: string | undefined;
        address?: string | undefined;
        address2?: string | undefined;
        address3?: string | undefined;
    } | undefined;
    price?: {
        msrp?: {
            symbol: string;
            value: string;
            code: string;
        } | undefined;
        details?: {
            code: string;
            description: string;
            price: {
                symbol: string;
                value: string;
                code: string;
            };
        }[] | undefined;
        charges?: {
            code: string;
            description: string;
            price: {
                symbol: string;
                value: string;
                code: string;
            };
        }[] | undefined;
    } | undefined;
    product?: {
        name: string;
        qty?: number | undefined;
        price?: number | undefined;
        unit?: string | undefined;
        origin?: string | undefined;
        HScode?: string | undefined;
    }[] | undefined;
    option?: {
        memo?: string | undefined;
        packingFee?: number | undefined;
    } | undefined;
    sadditional?: {
        DC?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        SO?: {
            state: string;
            "signature-type"?: string | undefined;
        } | undefined;
        HFP?: {
            state: string;
        } | undefined;
        DNS?: {
            state: string;
        } | undefined;
        LAD?: {
            state: string;
        } | undefined;
        _RFE?: {
            state: string;
            "other-reason"?: string | undefined;
        } | undefined;
        EDI?: {
            state: string;
        } | undefined;
        signature?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        RS?: {
            state: string;
            code?: string | undefined;
            description?: string | undefined;
        } | undefined;
        DG?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        DIT?: {
            state: string;
            type?: string | undefined;
        } | undefined;
        TermsOfTrade?: {
            state: string;
        } | undefined;
        IOSS?: {
            state: string;
            type?: string | undefined;
            ioss_id?: string | undefined;
        } | undefined;
    } | undefined;
    payments?: {
        description: string;
        dateTime: string;
        subtotal: {
            symbol: string;
            value: string;
            code: string;
        };
    }[] | undefined;
    total?: {
        symbol: string;
        value: string;
        code: string;
    } | undefined;
    submittedAt?: string | undefined;
    labelFile?: {
        label: string;
        invoice?: string | undefined;
        deliver?: string | undefined;
    } | undefined;
} | undefined>;
export declare const delOpenShipment: (number: string) => Promise<void>;
export declare const paginateByStation: (params: QueryShipmentParams, stationId: string) => Promise<any>;
export {};
