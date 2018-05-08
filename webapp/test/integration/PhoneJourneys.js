/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/spyvee/offline2/test/integration/NavigationJourneyPhone",
		"com/spyvee/offline2/test/integration/NotFoundJourneyPhone",
		"com/spyvee/offline2/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});