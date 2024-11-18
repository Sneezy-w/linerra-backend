import Dicts from '@linerra/core/src/enum/dicts.js';
//import { agentSessionService } from 'system/src/services/agentSessionService';

export async function getDicts(req, res) {
  res.ok(Dicts);
}

//aaa.sd();
