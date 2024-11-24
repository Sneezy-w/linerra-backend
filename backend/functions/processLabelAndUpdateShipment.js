export const handler = async (event) => {
  const { shipmentId, acceptLanguage } = event;

  //console.log(shipmentId, acceptLanguage);
  //console.log(process.env);
  //console.log(process.env);
  try {
    await sleep(5000);
    const labelFile = await verykShipmentService.saveAllLabelFile(shipmentId);

    const shipmentDetailApiRes = await shipmentDetail(
      { id: shipmentId },
      acceptLanguage,
    );

    const shipmentApiUpdateDO =
      shipmentApiResToApiUpdateDO(shipmentDetailApiRes);
    shipmentApiUpdateDO.labelFile = labelFile;

    await Shipment.build(UpdateAttributesCommand)
      .item({ ...shipmentApiUpdateDO })
      .options({ returnValues: 'ALL_NEW' })
      .send();

    logger.info('Successfully processed label and updated shipment', {
      shipmentId,
    });
  } catch (error) {
    logger.error('Error processing label and updating shipment:', { error });
  }
};
