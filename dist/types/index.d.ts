import { LitElement } from 'lit';
import { IBeforeInstallPromptEvent, IRelatedApp } from './types/types';
declare global {
    interface WindowEventMap {
        beforeinstallprompt: IBeforeInstallPromptEvent;
    }
}
export declare class PWAInstallElement extends LitElement {
    private manifest;
    manifestUrl: string;
    icon: string;
    name: string;
    description: string;
    installDescription: string;
    manualApple: boolean;
    manualChrome: boolean;
    disableChrome: boolean;
    static get styles(): CSSStyleSheet[];
    platforms: string;
    userChoiceResult: string;
    isDialogHidden: boolean;
    isInstallAvailable: boolean;
    isAppleMobilePlatform: boolean;
    isUnderStandaloneMode: boolean;
    isRelatedAppsInstalled: boolean;
    private _howToRequested;
    private _galleryRequested;
    private _install;
    install: () => void;
    private _hideDialog;
    private _hideDialogUser;
    hideDialog: () => void;
    showDialog: (forced?: boolean) => void;
    getInstalledRelatedApps: () => Promise<IRelatedApp[]>;
    private _howToForApple;
    private _toggleGallery;
    private _checkInstalled;
    private _init;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
