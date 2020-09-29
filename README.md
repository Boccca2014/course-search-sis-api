# Class Search using the SIS API

In this module, we will build a simplified version of [John's Hopkins Class Search](https://sis.jhu.edu/classes) web application which makes use of the [SIS API](https://sis.jhu.edu/api).

## Access API Key

Only registered users are permitted to access SIS API. The registration form is available at https://sis.jhu.edu/api. To register you must provide a valid email address.

Once you have registered, you will receive an email with the API Key. The Key is a string of characters like this one: (The one here is a fake one!)

```text
pJnMRxKD1fFECXFRX1FDXykpLww0Lazk
```

You must copy your key to line `93` in `script.js`.


## SIS API & CORS Policy

The browser blocks our access to the SIS API due to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy.

This is an issue on SIS API's side. They must update their _responses_ to include `Access-Control-Allow-Origin: *` in their HTTP header to allow requests from all domains. 

To get around this issue, we must tell the browser to not pick on it! 

> Install Chrome's [Allow-Control-Allow-Origin plugin](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en-US)

Once installed, click it in your browser to activate the extension. Make sure the icon's label goes from "off" to "on". 

> Make sure to turn it off after you are done with this application.