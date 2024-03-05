[![Published on NPM](https://img.shields.io/npm/v/@khmyznikov/pwa-install.svg)](https://www.npmjs.com/package/@khmyznikov/pwa-install)
![npm](https://img.shields.io/npm/dt/@khmyznikov/pwa-install)
## \<pwa-install\>

**New to PWAs? Unsure how to create a Web App? Check out these resources for a quick start: [PWA Intro](https://docs.pwabuilder.com/#/home/pwa-intro), [PWA Starter](https://docs.pwabuilder.com/#/starter/quick-start), [PWA Builder](https://www.pwabuilder.com/)**

Installation dialog for Progressive Web Application (PWA) and Add to Home Screen/Dock dialog for Web Apps. This offers an enhanced user experience and addresses the absence of native dialogs in certain browsers. **20kB brotli** compressed bundle. Translation/localization is supported.

Use it as [Web Component with any **modern** framework](https://custom-elements-everywhere.com/). No polyfill is required.
[React polyfill](https://glitch.com/edit/#!/mango-shine-diagram?path=src%2Fcomponents%2Fpwa-install.jsx).

## **[Demo](https://khmyznikov.com/pwa-install/)**

## Gallery
| iOS default&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Install instruction | App gallery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|-|-|-|
|![iOS example default](https://user-images.githubusercontent.com/6115884/169653932-5a9916b6-8d1f-4320-a595-86c3b797ae86.jpg)|![iOS example install instruction](https://user-images.githubusercontent.com/6115884/169654013-7d144d66-0021-44d8-8f1d-9a7d2c71cb07.jpg)|![iOS example gallery](https://user-images.githubusercontent.com/6115884/169654077-f48c9b63-2b6e-4291-a0e3-b33daf86d468.jpg)|

| MacOS 14+ (Sonoma) | Install instruction |
|---|---|
|![sonoma_dialog-min](https://github.com/khmyznikov/pwa-install/assets/6115884/4ee02327-9abd-4d5e-a581-537dccb2187f)|![sonoma-dialog-open-min](https://github.com/khmyznikov/pwa-install/assets/6115884/6b147938-b55b-479a-85ea-1778868e6ff5)|



| iPadOS |
|---|
|![iPadOS example light](https://user-images.githubusercontent.com/6115884/169654199-1b474920-089c-44b5-8eca-534229ce0720.jpg)|


| Android | App gallery&nbsp;&nbsp; | Light theme&nbsp;&nbsp; |
|-|-|-|
|![Android example default](https://user-images.githubusercontent.com/6115884/169654789-41fb88b3-97b2-4992-aab5-0def6015be21.jpg)|![Android example gallery](https://user-images.githubusercontent.com/6115884/169654833-b09c1eff-cfea-41c8-b2d0-66515cd1bc2c.jpg)|![Android example white](https://user-images.githubusercontent.com/6115884/169654871-33f30d44-b70c-4912-a678-3d97fd0d80a8.jpg)|

| Chrome&nbsp; | App Gallery&nbsp;&nbsp; |
|---|---|
|![Chrome example default](https://user-images.githubusercontent.com/6115884/169655166-07f02a6b-a72a-4eb8-8ae1-e5a32fcac530.jpg)|![Chrome example gallery](https://user-images.githubusercontent.com/6115884/169655205-34b9b1a8-328b-45f8-8cd2-f6524e82469e.jpg)|

<br>

## Install

```bash
npm i @khmyznikov/pwa-install
```

Alternatively, you can use [unpkg](https://unpkg.com) or [esm.sh](https://esm.sh).


## Import

```js
import '@khmyznikov/pwa-install';
```

## Use

```html
<pwa-install></pwa-install>
```
[React polyfill](https://glitch.com/edit/#!/mango-shine-diagram?path=src%2Fcomponents%2Fpwa-install.jsx)

### **[Demo](https://khmyznikov.com/pwa-install/)**

<br>

## Supported params
```html
<pwa-install
  manual-apple="true"
  manual-chrome="true"
  disable-chrome="true"

  install-description="Custom call to install text"
  disable-install-description="true"
  disable-screenshots="true"

  manifest-url="/manifest.json"
  name="PWA"
  description="Progressive web application"         
  icon="/icon.png">
</pwa-install>
<!-- 
  manual-apple/chrome params means you want to show the Dialog manually by showDialog().
  disable-chrome param is for completely disabling custom logic and interception for Chominum browsers (will work built-in browser logic).
--->
```
*Make a good manifest file and don't use name/descr/icon params. Boolean attributes needs to be removed to act like "false"*

<br>

## Supported events
- pwa-install-success-event
- pwa-install-fail-event
- pwa-install-available-event
- pwa-user-choice-result-event
- pwa-install-how-to-event
- pwa-install-gallery-event

```html
<script type="text/javascript">
  var pwaInstall = document.getElementsByTagName('pwa-install')[0];

  pwaInstall.addEventListener('pwa-install-success-event', (event) => {console.log(event.detail.message)});
</script>
```
*⚠️ success/fail/choice events is Chromium only, iOS don't have them.*

<br>

## Supported properties (readonly)
- userChoiceResult: string;
- isDialogHidden: boolean
- isInstallAvailable: boolean
- isAppleMobilePlatform: boolean
- isAppleDesktopPlatform: boolean
- isUnderStandaloneMode: boolean
- isRelatedAppsInstalled: boolean

```html
<script type="text/javascript">
  var pwaInstall = document.getElementsByTagName('pwa-install')[0];

  console.log(pwaInstall.isUnderStandaloneMode);
</script>
```
<br>

## Supported methods
- install
- hideDialog
- showDialog
- getInstalledRelatedApps: async

```html
<script type="text/javascript">
  var pwaInstall = document.getElementsByTagName('pwa-install')[0];

  pwaInstall.install();
</script>
```

*getInstalledRelatedApps is Chromium only, always empty on iOS.*

<br>

## Async mode

If you need to target Chromium browsers but you want to postpone component mounting, you can do it!
But, need to capture *beforeinstallprompt* manually and pass it to the component's *externalPromptEvent* property(not attribute).

```javascript
// capture event asap, better right in index.html script tag
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  // save it somewhere
  window.promptEvent = e;
});

// later render the component on demand and pass event
document.getElementById("pwa-install").externalPromptEvent = window.promptEvent;
```
<br>

## Supported localization

Translations available:
- *EN*
- *RU*
- *TR*
- *DE*
- *ES*
- *NL*
- *EL*
- *FR*
- *SR*
- *PL*
- *ZH*/*ZH-CN*
- *IT*
- *UK*
- *CS*
- *NO*

Language should change automatically based on browser settings. Please create the pull-request if you want to help with translation to your language. It's an easy process.

[Contribution Guidelines](./CONTRIBUTING.md)

<br>

## ROADMAP
- samsung mobile support
- mozilla mobile support
- manual theme
