import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import * as verykShipmentController from '../controllers/veryk/verykShipmentController.js';
import path from './common/path.js';

const verykShipmentRouter = Router();

verykShipmentRouter.use(auth);

verykShipmentRouter.get(
  path.verykShipment.getAvailableCarriers,
  verykShipmentController.getAvailableCarriers,
);
verykShipmentRouter.post(
  path.verykShipment.quote,
  verykShipmentController.quote,
);
verykShipmentRouter.post(path.verykShipment.save, verykShipmentController.save);
verykShipmentRouter.post(
  path.verykShipment.submit,
  verykShipmentController.submit,
);
verykShipmentRouter.get(path.verykShipment.get, verykShipmentController.get);
verykShipmentRouter.delete(
  path.verykShipment.delete,
  verykShipmentController.del,
);
verykShipmentRouter.get(
  path.verykShipment.getDetail,
  verykShipmentController.getDetail,
);
verykShipmentRouter.post(
  path.verykShipment.page,
  verykShipmentController.getPage,
);
verykShipmentRouter.get(
  path.verykShipment.shipmentList,
  verykShipmentController.shipmentList,
);
verykShipmentRouter.get(
  path.verykShipment.shipmentDetail,
  verykShipmentController.shipmentDetail,
);
verykShipmentRouter.get(
  path.verykShipment.getSignedLabelUrl,
  verykShipmentController.getSignedLabelUrl,
);
verykShipmentRouter.get(
  path.verykShipment.tracking,
  verykShipmentController.tracking,
);

export default verykShipmentRouter;
