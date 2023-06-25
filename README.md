# Dialog.js
A wrapper to simplify using the HTML dialog tag


 
 
                      ᓚᘏᗢ
                      
                      
The [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) tag is a simple solution to add popups natively in the browser. It is kind of limited in it's features; no support for border radius and it's not possible to animate the transition in and and out but it does automatically provide a dialog in the middle of the stage and does not allow the user to interact with any other element of the web page as long as the dialog is active. I thought it would fun to build a simple class to simplify usage of this new tool.

Jeremy Heminger <contact@jeremyheminger.com>

created June 24, 2023

last update June 24, 2023

   **Dialog.Reset()**
   
   **Dialog.Close()**
   

     /** 
   	 * a simple replacement for the default browser alert
   	 * @params {string} txt 
   	 * @params {object} p { 
   	 * 		title: replaces the default "Alert!" title
   	 * 		callback: 				    a callback function that runs as soon as the dialog is created
   	 * 		callback_params: 		  parameters to pass to the callback
   	 * 		callback_ok: 			    callback to run on click OK
   	 * 		callback_ok_params: 	callback parameters
   	 *    style: 					      CSS 
   	 * }
   	 * @returns {void}
   	 * */

**Dialog.Alert(txt, p = null)**
	

    /** 
   	 * a simple replacement for the default browser confirm
   	 * @params {string} txt 
   	 * @params {object} p { 
   	 * 		callback: 				    a callback function that runs as soon as the dialog is created
   	 * 		callback_params: 		  parameters to pass to the callback
   	 * 		callback_ok: 			    callback to run on click OK
   	 * 		callback_ok_params: 	callback parameters
   	 * 		style: 					      CSS 
   	 * }
   	 * @returns {void}
   	 * */

**Dialog.Confirm(txt, p = null)**
   

     /** 
   	 * a simple replacement for the default browser prompt
   	 * @params {string} txt 
   	 * @params {object} p { 
   	 * 		callback: 				    a callback function that runs as soon as the dialog is created
   	 * 		callback_params: 		  parameters to pass to the callback
   	 * 		callback_ok: 			    callback to run on click OK
   	 * 		callback_ok_params: 	callback parameters
   	 * 		type: 					      the HTML input type
   	 * 		attr: 					      attributes for the input
   	 * 		style: 					      CSS 
   	 * }
   	 * @returns {void}
   	 * */
**Dialog.Prompt(txt, p = null)**
	

    /** 
   	 * Pop-up dialog container
   	 * @params {string} title 
   	 * @params {string} template_id $target ID of an HTML <template>
   	 * @params {object} p { 
   	 * 		callback: 				  a callback function that runs as soon as the dialog is created
   	 * 		callback_params: 		parameters to pass to the callback
   	 * 		style: 					    CSS 
   	 * }
   	 * @returns {void}
   	 * */
**Dialog.Container(title, template_id, p = null)**
	

    /** 
   	 * Pop-up dialog container whose data comes from an AJAX call
   	 * @params {string} url
   	 * @params {object} p { 
   	 * 		callback: 				  a callback function that runs as soon as the dialog is created
   	 * 		callback_params: 		parameters to pass to the callback
   	 * 		style: 					    CSS 
   	 * }
   	 * @returns {void}
   	 * */
**Dialog.AjaxContainer(url, p = null)**
	 
	

 - version 1.0.0
 
