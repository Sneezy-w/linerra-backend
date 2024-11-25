"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipment = void 0;
const dynamodb_toolbox_1 = require("dynamodb-toolbox");
const mainTable_1 = require("../table/mainTable");
const enum_1 = require("@linerra/enum");
exports.Shipment = new dynamodb_toolbox_1.Entity({
    name: 'Shipment',
    table: mainTable_1.MainTable,
    // computeKey: () => ({
    //   PK: 'STATION#',
    //   SK: 'SHIPMENT#' + now(),
    //   //GSI1PK: "SHIPMENT_NO",
    //   //GSI1SK: number,
    // }),
    schema: (0, dynamodb_toolbox_1.schema)({
        number: (0, dynamodb_toolbox_1.string)()
            .required()
            .transform((0, dynamodb_toolbox_1.prefix)('SHIPMENT'))
            .savedAs('PK')
            .key(),
        SK: (0, dynamodb_toolbox_1.string)().const('SHIPMENT').key().default('SHIPMENT'),
        stationId: (0, dynamodb_toolbox_1.string)()
            .required()
            .transform((0, dynamodb_toolbox_1.prefix)('STATION'))
            .savedAs('GSI1PK'),
        sortTimestamp: (0, dynamodb_toolbox_1.string)()
            .required()
            .transform((0, dynamodb_toolbox_1.prefix)('SHIPMENT'))
            .savedAs('GSI1SK'),
        //SK: string().transform(prefix('SHIPMENT')).savedAs('SK').key().default(now()),
        //created: string().default(now).key(),
        //aa: string().const("SHIPMENT_NO").key().savedAs('GSI1PK').required(),
        //GSI1PK: string().const("SHIPMENT_NO").key().default("SHIPMENT_NO"),
        GSI2PK: (0, dynamodb_toolbox_1.string)().const('SHIPMENT').default('SHIPMENT'),
        //GSI2SK: string().required().transform(prefix('SHIPMENT')).savedAs('GSI2SK').key(),
        externalId: (0, dynamodb_toolbox_1.string)().optional(),
        waybillNumber: (0, dynamodb_toolbox_1.string)().optional(),
        serviceId: (0, dynamodb_toolbox_1.string)().required(),
        status: (0, dynamodb_toolbox_1.string)()
            .enum(...enum_1.Dicts.shipmentStatus.map((status) => status.value))
            .required(),
        //initiationRegionId: string().optional(),
        //destinationRegionId: string().optional(),
        initiation: (0, dynamodb_toolbox_1.map)({
            regionId: (0, dynamodb_toolbox_1.string)().required(),
            postalCode: (0, dynamodb_toolbox_1.string)().required(),
            name: (0, dynamodb_toolbox_1.string)().optional(),
            company: (0, dynamodb_toolbox_1.string)().optional(),
            phone: (0, dynamodb_toolbox_1.string)().optional(),
            province: (0, dynamodb_toolbox_1.map)({
                id: (0, dynamodb_toolbox_1.string)().required(),
                name: (0, dynamodb_toolbox_1.string)().required(),
                code: (0, dynamodb_toolbox_1.string)().required(),
            }).optional(),
            city: (0, dynamodb_toolbox_1.string)().optional(),
            address: (0, dynamodb_toolbox_1.string)().optional(),
            address2: (0, dynamodb_toolbox_1.string)().optional(),
            address3: (0, dynamodb_toolbox_1.string)().optional(),
        }).required(),
        destination: (0, dynamodb_toolbox_1.map)({
            regionId: (0, dynamodb_toolbox_1.string)().required(),
            postalCode: (0, dynamodb_toolbox_1.string)().required(),
            name: (0, dynamodb_toolbox_1.string)().optional(),
            company: (0, dynamodb_toolbox_1.string)().optional(),
            phone: (0, dynamodb_toolbox_1.string)().optional(),
            province: (0, dynamodb_toolbox_1.map)({
                id: (0, dynamodb_toolbox_1.string)().required(),
                name: (0, dynamodb_toolbox_1.string)().required(),
                code: (0, dynamodb_toolbox_1.string)().required(),
            }).optional(),
            city: (0, dynamodb_toolbox_1.string)().optional(),
            address: (0, dynamodb_toolbox_1.string)().optional(),
            address2: (0, dynamodb_toolbox_1.string)().optional(),
            address3: (0, dynamodb_toolbox_1.string)().optional(),
            type: (0, dynamodb_toolbox_1.string)().optional(),
            email: (0, dynamodb_toolbox_1.string)().optional(),
        }).required(),
        destinationLocalized: (0, dynamodb_toolbox_1.map)({
            regionId: (0, dynamodb_toolbox_1.string)().required(),
            postalCode: (0, dynamodb_toolbox_1.string)().required(),
            name: (0, dynamodb_toolbox_1.string)().optional(),
            company: (0, dynamodb_toolbox_1.string)().optional(),
            phone: (0, dynamodb_toolbox_1.string)().optional(),
            province: (0, dynamodb_toolbox_1.map)({
                id: (0, dynamodb_toolbox_1.string)().required(),
                name: (0, dynamodb_toolbox_1.string)().required(),
                code: (0, dynamodb_toolbox_1.string)().required(),
            }).optional(),
            city: (0, dynamodb_toolbox_1.string)().optional(),
            address: (0, dynamodb_toolbox_1.string)().optional(),
            address2: (0, dynamodb_toolbox_1.string)().optional(),
            address3: (0, dynamodb_toolbox_1.string)().optional(),
        }).optional(),
        package: (0, dynamodb_toolbox_1.map)({
            type: (0, dynamodb_toolbox_1.string)().required(),
            packages: (0, dynamodb_toolbox_1.list)((0, dynamodb_toolbox_1.map)({
                waybillNumber: (0, dynamodb_toolbox_1.string)().optional(),
                weight: (0, dynamodb_toolbox_1.number)().required(),
                dimension: (0, dynamodb_toolbox_1.map)({
                    length: (0, dynamodb_toolbox_1.number)().required(),
                    width: (0, dynamodb_toolbox_1.number)().required(),
                    height: (0, dynamodb_toolbox_1.number)().required(),
                }).optional(),
                insurance: (0, dynamodb_toolbox_1.map)({
                    code: (0, dynamodb_toolbox_1.string)().required(),
                    symbol: (0, dynamodb_toolbox_1.string)().required(),
                    value: (0, dynamodb_toolbox_1.string)().required(),
                }).optional(),
                additional: (0, dynamodb_toolbox_1.map)({
                    DC: (0, dynamodb_toolbox_1.map)({
                        state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No
                        type: (0, dynamodb_toolbox_1.string)().optional(), // 1:No Signature, 2:Signature Required, 3:Adult Signature Required
                    }).optional(),
                    COD: (0, dynamodb_toolbox_1.map)({
                        state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No
                        amount: (0, dynamodb_toolbox_1.number)().optional(), // Collect on Delivery amount(required when state is true)
                        fund_type: (0, dynamodb_toolbox_1.string)().optional(), // Fund Type,optionst(required when state is true): 0: check,cashier’s check or money order - no cash allowed, 8: cashier’s check or money order - no cash allowed
                    }).optional(),
                    AH: (0, dynamodb_toolbox_1.map)({
                        state: (0, dynamodb_toolbox_1.string)().required(), // Additional Handling Yes or No(option:true/false)
                    }).optional(),
                    ReferenceNumber: (0, dynamodb_toolbox_1.map)({
                        state: (0, dynamodb_toolbox_1.string)().required(), // Reference Number Yes or No(option:true/false)
                        number: (0, dynamodb_toolbox_1.string)().optional(), // Reference Number
                    }).optional(),
                    info: (0, dynamodb_toolbox_1.map)({
                        state: (0, dynamodb_toolbox_1.string)().required(), // To the UAE Yes or No(option:true/false)
                        ItemDescriptionForClearance: (0, dynamodb_toolbox_1.string)().optional(), // Description For Clearanc(required when state is true)
                    }).optional(),
                    IM: (0, dynamodb_toolbox_1.map)({
                        state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No(option:true/false) Destination is mandatory for Mexico.
                        description: (0, dynamodb_toolbox_1.string)().optional(),
                    }).optional(),
                    packcode: (0, dynamodb_toolbox_1.map)({
                        state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No(option:true/false) Destination is mandatory for Mexico.
                    }).optional(),
                }).optional(),
                sinsured: (0, dynamodb_toolbox_1.number)().optional(), // Veryk insurance, available when fedex
            })),
        }).required(),
        product: (0, dynamodb_toolbox_1.list)((0, dynamodb_toolbox_1.map)({
            name: (0, dynamodb_toolbox_1.string)().required(),
            qty: (0, dynamodb_toolbox_1.number)().optional(),
            price: (0, dynamodb_toolbox_1.number)().optional(),
            unit: (0, dynamodb_toolbox_1.string)().optional(),
            origin: (0, dynamodb_toolbox_1.string)().optional(),
            HScode: (0, dynamodb_toolbox_1.string)().optional(),
        })).optional(),
        option: (0, dynamodb_toolbox_1.map)({
            memo: (0, dynamodb_toolbox_1.string)().optional(),
            packingFee: (0, dynamodb_toolbox_1.number)().optional(),
        }).optional(),
        sadditional: (0, dynamodb_toolbox_1.map)({
            DC: (0, dynamodb_toolbox_1.map)({
                // Delivery Confirmation(available when UPS,Canada Post) UPS: Not available when shipping to CA
                state: (0, dynamodb_toolbox_1.string)().required(), // Delivery Confirmation Yes or No(option:true/false)
                type: (0, dynamodb_toolbox_1.string)().optional(), // Confirmation Type(available when UPS),options: 1:Signature Required, 2:Adult Signature Required
            }).optional(),
            SO: (0, dynamodb_toolbox_1.map)({
                // Signature(available when Canada Post)
                state: (0, dynamodb_toolbox_1.string)().required(), // Signature Yes or No
                'signature-type': (0, dynamodb_toolbox_1.string)().optional(), // Signature Type,options: SO:Signature; PA18:Proof of Age Required - 18; PA19:Proof of Age Required - 19
            }).optional(),
            HFP: (0, dynamodb_toolbox_1.map)({
                // Hold for Pickup(available when Canada Post) Card for pickup(available when Canada Post TO CA)
                state: (0, dynamodb_toolbox_1.string)().required(), // Card for pickup Yes or No(option:true/false)
            }).optional(),
            DNS: (0, dynamodb_toolbox_1.map)({
                // Do not safe drop(available when Canada Post to CA)
                state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No(option:true/false)
            }).optional(),
            LAD: (0, dynamodb_toolbox_1.map)({
                // Leave at door - do not card(available when Canada Post to CA)
                state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No(option:true/false)
            }).optional(),
            _RFE: (0, dynamodb_toolbox_1.map)({
                // Reason For Export(available where Canada Post and not ship to CA)
                state: (0, dynamodb_toolbox_1.string)().required(), // Reason For Export options:DOC:Document; SAM:Commercial Sample; REP:Repair Or Warranty; SOG:Sale Of Goods; OTH:Other
                'other-reason': (0, dynamodb_toolbox_1.string)().optional(), // Other Reason(required when state is OTH)
            }).optional(),
            EDI: (0, dynamodb_toolbox_1.map)({
                // E-Commercial Invoice(available when DHL,UPS,FedEx) International non-document packages
                state: (0, dynamodb_toolbox_1.string)().required(), // E-Commercial Invoice Yes or No(option:true/false)
            }).optional(),
            signature: (0, dynamodb_toolbox_1.map)({
                // Delivery Confirmation(available where Fedex) In Canada and the U.S., Indirect Signature Required is available for residential shipments only.
                state: (0, dynamodb_toolbox_1.string)().required(), // Signature Yes or No
                type: (0, dynamodb_toolbox_1.string)().optional(), // Confirmation Type(required where state is true)
            }).optional(),
            RS: (0, dynamodb_toolbox_1.map)({
                // Return Service Only available when UPS
                state: (0, dynamodb_toolbox_1.string)().required(), // Return Service Yes or No(option:true/false)
                code: (0, dynamodb_toolbox_1.string)().optional(), // Return Service Type,optional valid values: 2,3,5,8,9
                description: (0, dynamodb_toolbox_1.string)().optional(), // Return Service Description
            }).optional(),
            DG: (0, dynamodb_toolbox_1.map)({
                // Dangerous Goods(available when DHL)
                state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No(option:true/false)
                type: (0, dynamodb_toolbox_1.string)().optional(), // Dangerous Goods Type,optional valid values
            }).optional(),
            DIT: (0, dynamodb_toolbox_1.map)({
                // Use DHL official invoice, this option cannot be used with EDI (electronic invoice)
                state: (0, dynamodb_toolbox_1.string)().required(), // Yes or No(option:true/false)
                type: (0, dynamodb_toolbox_1.string)().optional(), // Invoice Type,optional valid values: CMI (Commercail Invoice)，PFI (Proforma Invoice)
            }).optional(),
            TermsOfTrade: (0, dynamodb_toolbox_1.map)({
                // TermsOfTrade,supported by freight forwarder (FEDEX)
                state: (0, dynamodb_toolbox_1.string)().required(), // Valid values: DDP, DDU (DDP must confirm that the admin has already preset the payment account)
            }).optional(),
            IOSS: (0, dynamodb_toolbox_1.map)({
                // IOSS for EU tax collection(Canada Post, Fedex available)
                state: (0, dynamodb_toolbox_1.string)().required(), // Valid values: true,false  Valid values: 0 (No) or 1 (Yes)
                ioss_id: (0, dynamodb_toolbox_1.string)().optional(), // EU IOSS ID  Required when IOSS/state value is 1. Maximum length 13 digits.
                type: (0, dynamodb_toolbox_1.string)().optional(), // Required when choosing FEDEX as the carrier. Valid values: "PERSONAL_NATIONAL", "PERSONAL_STATE", "FEDERAL", "BUSINESS_NATIONAL", "BUSINESS_STATE", "BUSINESS_UNION".
            }).optional(),
        }).optional(),
        price: (0, dynamodb_toolbox_1.map)({
            msrp: (0, dynamodb_toolbox_1.map)({
                code: (0, dynamodb_toolbox_1.string)().required(),
                symbol: (0, dynamodb_toolbox_1.string)().required(),
                value: (0, dynamodb_toolbox_1.string)().required(),
            }).optional(),
            details: (0, dynamodb_toolbox_1.list)((0, dynamodb_toolbox_1.map)({
                code: (0, dynamodb_toolbox_1.string)().required(),
                description: (0, dynamodb_toolbox_1.string)().required(),
                price: (0, dynamodb_toolbox_1.map)({
                    code: (0, dynamodb_toolbox_1.string)().required(),
                    symbol: (0, dynamodb_toolbox_1.string)().required(),
                    value: (0, dynamodb_toolbox_1.string)().required(),
                }).required(),
            })).optional(),
            charges: (0, dynamodb_toolbox_1.list)((0, dynamodb_toolbox_1.map)({
                code: (0, dynamodb_toolbox_1.string)().required(),
                description: (0, dynamodb_toolbox_1.string)().required(),
                price: (0, dynamodb_toolbox_1.map)({
                    code: (0, dynamodb_toolbox_1.string)().required(),
                    symbol: (0, dynamodb_toolbox_1.string)().required(),
                    value: (0, dynamodb_toolbox_1.string)().required(),
                }).required(),
            })).optional(),
        }).optional(),
        payments: (0, dynamodb_toolbox_1.list)((0, dynamodb_toolbox_1.map)({
            dateTime: (0, dynamodb_toolbox_1.string)().required(),
            description: (0, dynamodb_toolbox_1.string)().required(),
            subtotal: (0, dynamodb_toolbox_1.map)({
                code: (0, dynamodb_toolbox_1.string)().required(),
                symbol: (0, dynamodb_toolbox_1.string)().required(),
                value: (0, dynamodb_toolbox_1.string)().required(),
            }).required(),
        })).optional(),
        total: (0, dynamodb_toolbox_1.map)({
            code: (0, dynamodb_toolbox_1.string)().required(),
            symbol: (0, dynamodb_toolbox_1.string)().required(),
            value: (0, dynamodb_toolbox_1.string)().required(),
        }).optional(),
        submittedAt: (0, dynamodb_toolbox_1.string)().optional(),
        labelFile: (0, dynamodb_toolbox_1.map)({
            label: (0, dynamodb_toolbox_1.string)().required(),
            invoice: (0, dynamodb_toolbox_1.string)().optional(),
            deliver: (0, dynamodb_toolbox_1.string)().optional(),
        }).optional(),
    }),
    // .and((_prevSchema) => ({
    //   GSI2SK:
    //     string().required().link < typeof _prevSchema > (({ number }) => number),
    //   initiationRegionId:
    //     string().required().link <
    //     typeof _prevSchema >
    //     (({ initiation }) => initiation.regionId),
    //   destinationRegionId:
    //     string().required().link <
    //     typeof _prevSchema >
    //     (({ destination }) => destination.regionId),
    // })),
});
