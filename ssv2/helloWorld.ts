/**
 * @NAPIVersion 2.0
 * @NScriptType ClientScript
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';
import * as dialog from "N/ui/dialog";

export let pageInit: EntryPoints.Client.pageInit = () => {
  const options = {
    title: "Hello",
    message: "Hello World!!!"
  }

  dialog.alert(options)
    .then(() => {
      log.debug({
        title: 'Success',
        details: 'Alert displayed successfully'
      })
    })
    .catch((e) => {
      log.error({
        title: e.name,
        details: e.message
      })
    })
}

