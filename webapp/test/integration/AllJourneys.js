/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Orders in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/spyvee/offline2/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/spyvee/offline2/test/integration/pages/App",
	"com/spyvee/offline2/test/integration/pages/Browser",
	"com/spyvee/offline2/test/integration/pages/Master",
	"com/spyvee/offline2/test/integration/pages/Detail",
	"com/spyvee/offline2/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.spyvee.offline2.view."
	});

	sap.ui.require([
		"com/spyvee/offline2/test/integration/MasterJourney",
		"com/spyvee/offline2/test/integration/NavigationJourney",
		"com/spyvee/offline2/test/integration/NotFoundJourney",
		"com/spyvee/offline2/test/integration/BusyJourney",
		"com/spyvee/offline2/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});