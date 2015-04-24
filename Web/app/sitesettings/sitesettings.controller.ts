module app.siteSettings {
    'use strict';

    interface ISiteSettingsScope {
        title: string;
        description: string;
        themeNames: string[];
        themeName: string;
        save(): void;
    }

    class SiteSettingsController implements ISiteSettingsScope {
        title: string;
        description: string;
        themeNames: string[];
        themeName: string;

        constructor() { }

        save(): void { }
    }
}