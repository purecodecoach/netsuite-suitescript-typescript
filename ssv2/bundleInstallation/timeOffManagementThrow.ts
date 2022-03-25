/**
 * @NScriptName Throw Error - Feature TimeOffManagement
 * @NScriptType BundleInstallationScript
 * @NApiVersion 2.0
 * */
import {EntryPoints} from "N/types";
import {runtime} from "N";

const checkPrerequisites = () => {
  if(!runtime.isFeatureInEffect({feature: 'TIMEOFFMANAGEMENT'})) {
    throw 'The TIMEOFFMANAGEMENT feature must be enabled.\b Please enable the feature and try again.';
  }
}

export const beforeInstall: EntryPoints.BundleInstallation.beforeInstall = () => {
  checkPrerequisites()
}

export const beforeUpdate: EntryPoints.BundleInstallation.beforeUpdate = () => {
  checkPrerequisites()
}