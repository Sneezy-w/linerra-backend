import * as verykShipmentService from '@linerra/core/src/services/veryk/verykShipmentService.js';
import {
  shipmentDOToDetailResVO,
  shipmentDOToEditResVO,
} from '@linerra/core/src/models/veryk/shipment.convert.js';
//import _ from 'lodash';
import * as s3Service from '@linerra/core/src/services/s3Service.js';
import ErrorShowType from '@linerra/core/src/enum/errorShowType.js';
import logger from '@linerra/core/src/utils/logger.js';
import { tracking as trackingApi } from '@linerra/core/src/utils/verykUtils.js';

export async function getAvailableCarriers(req, res) {
  const carriers = await verykShipmentService.getAvailableCarriers();
  res.ok(carriers);
}

export async function quote(req, res) {
  const quotes = await verykShipmentService.quote(
    req.body,
    req.context.acceptLanguage,
  );
  res.ok(quotes);
}

export async function save(req, res) {
  const shipment = await verykShipmentService.save(req.body, req.context.user);
  res.ok(shipment);
}

export async function get(req, res) {
  const shipment = await verykShipmentService.get(req.params.number);
  res.ok(shipmentDOToEditResVO(shipment));
}

export async function del(req, res) {
  try {
    await verykShipmentService.deleteShipment(req.params.number);
    res.ok();
  } catch (error) {
    logger.error('Error deleting shipment', error);
    res.fail(
      'Only open shipment can be deleted',
      'ONLY_OPEN_SHIPMENT_CAN_BE_DELETED',
    );
  }
}

export async function getDetail(req, res) {
  const shipment = await verykShipmentService.get(req.params.number);
  res.ok(shipmentDOToDetailResVO(shipment));
}

export async function getPage(req, res) {
  const shipmentPage = await verykShipmentService.getPage(
    {
      limit: Number(req.body.limit) || 10,
      keyword: req.body.keyword,
      status: req.body.status,
      dateRange: [
        req.body.startDate ||
          new Date(
            new Date().setMonth(new Date().getMonth() - 3),
          ).toISOString(),
        req.body.endDate || new Date().toISOString(),
      ],
      lastEvaluatedKey: req.body.lastEvaluatedKey,
    },
    req.context.user,
  );

  res.ok({
    items: (shipmentPage.Items || []).map((shipment) =>
      shipmentDOToDetailResVO(shipment),
    ),
    lastEvaluatedKey: shipmentPage.LastEvaluatedKey,
  });
}

export async function submit(req, res) {
  const submit = await verykShipmentService.submit(
    req.body,
    req.context.user,
    req.context.acceptLanguage,
  );
  res.ok(submit);
}

export async function shipmentList(req, res) {
  const shipments = await shipmentList(
    { keyword: req.query.keyword },
    req.context.acceptLanguage,
  );
  res.ok(shipments);
}

export async function shipmentDetail(req, res) {
  const shipment = await shipmentDetail(
    { id: req.params.id },
    req.context.acceptLanguage,
  );
  res.ok(shipment);
}

export async function getSignedLabelUrl(req, res) {
  try {
    const key = req.query.key;
    if (!key) {
      return res.fail(
        'Key is required',
        'KeyRequired',
        ErrorShowType.ERROR_MESSAGE,
        400,
      );
    }

    const url = await s3Service.getSignedLabelUrl(key);
    res.ok({ url });
  } catch (error) {
    logger.error('Error getting label URL', error);
    res.fail(
      'Error getting label URL',
      'ErrorGettingLabelUrl',
      ErrorShowType.ERROR_MESSAGE,
      500,
    );
  }
}

export async function tracking(req, res) {
  const trackingApiRes = await trackingApi(
    { keyword: req.query.keyword },
    req.context.acceptLanguage,
  );
  // LambdaService.instance.invokeAsynchronously(
  //   process.env.PROCESS_LABEL_AND_UPDATE_SHIPMENT_FUNCTION_NAME as string,
  //   { shipmentId: req.query.keyword as string, acceptLanguage: req.context.acceptLanguage }
  // );
  res.ok(trackingApiRes);
}