/**
 * @NScriptName Hello Suitelet
 * @NScriptType Suitelet
 * @NApiVersion 2.0
 * */

import {EntryPoints} from "N/types";
import {record} from "N";

export let onRequest: EntryPoints.Suitelet.onRequest = (context: EntryPoints.Suitelet.onRequestContext) => {
  let folder = record.load({type: 'folder', id: 36464});
  let allFields = folder.getFields().join(', ');
  context.response.write(`<br>all fields: ${allFields}`)
}