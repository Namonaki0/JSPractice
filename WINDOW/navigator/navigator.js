const browserName = navigator.appCodeName;
const appName = navigator.appName;
const appVersion = navigator.appVersion;
const areCookiesEnabled = navigator.cookieEnabled;
const browserLanguage = navigator.language;
const isUserOnline = navigator.onLine;
const platform = navigator.platform;
const agent = navigator.userAgent;

console.log(`
    BROWSER NAME: ${browserName},
    APP NAME: ${appName},
    APP VERSION: ${appVersion},
    COOKIES ENABLED?: ${areCookiesEnabled},
    LANGUAGE: ${browserLanguage},
    USER ONLINE: ${isUserOnline},
    PLATFORM: ${platform},
    AGENT: ${agent}
    `);

//* "
//* BROWSER NAME: Mozilla,
//* APP NAME: Netscape,
//* APP VERSION: 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36,
//* COOKIES ENABLED?: false,
//* LANGUAGE: en-GB,
//* USER ONLINE: true,
//* PLATFORM: Win32,
//* AGENT: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36
//* "

// -----------------------------------------------

//? The appCodeName property returns browser code name.
//? The appName property returns the browser name.
//? The appVersion property returns the browser version.
//? The cookieEnabled property returns true if cookies are enabled in the browser.
//? The language property returns the browser language.
//? The onLine property returns true if the browser is online, otherwise false.
//? The platform property returns for which platform the browser is compiled.
//? The product property returns the browser engine (product name).
//? The userAgent property returns the user-agent header sent by the browser to the server.
