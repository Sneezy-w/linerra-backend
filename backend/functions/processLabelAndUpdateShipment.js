import { verykShipmentService } from '@linerra/core';
import { logger, sleep, verykUtils } from '@linerra/util';
import { shipmentConvert } from '@linerra/model';
import { shipmentRepository } from '@linerra/dynamodb';

const { shipmentApiResToApiUpdateDO } = shipmentConvert;

export const handler = async (event) => {
  const { shipmentId, acceptLanguage } = event;

  //console.log(shipmentId, acceptLanguage);
  //console.log(process.env);
  //console.log(process.env);
  try {
    await sleep(5000);
    const labelFile = await verykShipmentService.saveAllLabelFile(shipmentId);

    const shipmentDetailApiRes = await verykUtils.shipmentDetail(
      { id: shipmentId },
      acceptLanguage,
    );

    const shipmentApiUpdateDO =
      shipmentApiResToApiUpdateDO(shipmentDetailApiRes);
    shipmentApiUpdateDO.labelFile = labelFile;

    await shipmentRepository.updateAndReturn(shipmentApiUpdateDO);

    logger.info('Successfully processed label and updated shipment', {
      shipmentId,
    });
  } catch (error) {
    logger.error('Error processing label and updating shipment:', { error });
  }
};
