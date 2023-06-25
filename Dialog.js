/** 
* @title Dialog
* @about wrapper to use the new HTML dialog tab
* @author Jeremy Heminger <jeremy.heminger@aquamor.com>, <contact@jeremyheminger.com>
* @date June 19, 2023
* @last_update June 19, 2023
* 
* 
* @todo currently it needs to be called from the main.js class loader. Once I am satisfied it works I'll autoload it 
* 
* @version 1.0.0
* */
class Dialog
{
	static bgcolor()  { return "#000000bd" }
	
	static dialogid() { return "aq_dialog_" }
	
	///

	/** 
	 * only allows on dialog on the screen
	 * */
	static Reset()
	{
		if(typeof document.getElementById(Dialog.dialogid())?.innerHTML !== 'undefined')
			document.getElementById(Dialog.dialogid()).remove()
	}
	static Close()
	{
		const d = document.getElementById(Dialog.dialogid())
		d.close()
	}
	/** 
	 * a simple replacement for the default browser alert
	 * @params {string} txt 
	 * @params {object} p { 
	 * 		title: replaces the default "Alert!" title
	 * 		callback: 				a callback function that runs as soon as the dialog is created
	 * 		callback_params: 		parameters to pass to the callback
	 * 		callback_ok: 			callback to run on click OK
	 * 		callback_ok_params: 	callback parameters
	 * }
	 * @returns {void}
	 * */
	static Alert(txt, p = null)
	{
		Dialog.Reset()
		if(p?.title === undefined) p.title = "Alert!"
		const 	t = document.createElement("dialog")
				t.setAttribute("id",Dialog.dialogid())
				t.innerHTML = `
						<div>
							<label for="alert">
								<h4 class="header">${p?.title}</h4>
								${txt}
							</label>
						</div>					
						<div class="flex">
							<div class="c3"></div>
							<button class="ok c1">Ok</button>
							<div class="c3"></div>
						</div>
						<style>${p?.style}</style>
				`;
			document.body.appendChild(t)
		let d = document.getElementById(Dialog.dialogid())

		if(typeof p?.callback === 'function')
			p.callback(p?.callback_params)
		document.getElementById(Dialog.dialogid()).getElementsByClassName("ok")[0].addEventListener("click",(e) => {
			e.preventDefault()
			if(typeof p?.callback_ok === 'function')
				p.callback_ok(p?.callback_ok_params)
			d.close()
		})
		d.showModal()
	}
	/** 
	 * a simple replacement for the default browser confirm
	 * @params {string} txt 
	 * @params {object} p { 
	 * 		callback: 				a callback function that runs as soon as the dialog is created
	 * 		callback_params: 		parameters to pass to the callback
	 * 		callback_ok: 			callback to run on click OK
	 * 		callback_ok_params: 	callback parameters
	 * }
	 * @returns {void}
	 * */
	static Confirm(txt, p = null)
	{
		Dialog.Reset()
		const 	t = document.createElement("dialog")
				t.setAttribute("id",Dialog.dialogid())
				t.innerHTML = `
						<div>
							<label for="confirm">
								<h4 class="title">${txt}</h4>
							</label>
						</div>					
						<div class="flex">
							<button class="ok c2">Ok</button>
							<div class="c1"></div>
							<button class="cancel c2">Cancel</button>
						</div>
						<style>${p?.style}</style>
				`;
			document.body.appendChild(t)
		
		let d = document.getElementById(Dialog.dialogid())

		if(typeof p?.callback === 'function')
			p.callback(p?.callback_params)
		document.getElementById(Dialog.dialogid()).getElementsByClassName("ok")[0].addEventListener("click",(e) => {
			e.preventDefault();
			if(typeof p?.callback_ok === 'function')
				p.callback_ok(p?.callback_ok_params)
			d.close()
		})
		document.getElementById(Dialog.dialogid()).getElementsByClassName("cancel")[0].addEventListener("click",(e) => {
			e.preventDefault()
			d.close()
		})
		d.showModal()
	}
	/** 
	 * a simple replacement for the default browser prompt
	 * @params {string} txt 
	 * @params {object} p { 
	 * 		callback: 				a callback function that runs as soon as the dialog is created
	 * 		callback_params: 		parameters to pass to the callback
	 * 		callback_ok: 			callback to run on click OK
	 * 		callback_ok_params: 	callback parameters
	 * 		type: 					the HTML input type
	 * 		attr: 					attributes for the input
	 * }
	 * @returns {void}
	 * */
	static Prompt(txt, p = null)
	{
		if(p?.type === undefined) 
			p.type = "text"
		let s_types = ["text","number","color","date","email","password","range","tel"]
		if(s_types.indexOf(p.type) == -1)
		{
			let er = "There was an error creating the prompt dialog.\nOnly these input types are currently supported: " + s_types
			console.log(er)
			alert(er)
			return
		}
		let attr = ""
		if(p?.attr !== undefined)
		{
			for (var prop in p.attr) {
			    if (Object.prototype.hasOwnProperty.call(p.attr, prop)) {
			        attr += prop + '="' + p.attr[prop] + '" '
			    }
			}
		}
		Dialog.Reset()
		const   t = document.createElement("dialog")
				t.setAttribute("id",Dialog.dialogid())
				t.innerHTML = `
					<div>
						<label for="prompt">
							<h4 class="title">${txt}</h4>
							<input type="${p.type}" ${attr} id="_aq_prompt_result">
						</label>
					</div>					
					<div class="flex">
						<button class="ok c2">Ok</button>
						<div class="c1"></div>
						<button class="cancel c2">Cancel</button>
					</div>
					<style>${p?.style}</style>
				`;
			document.body.appendChild(t)
		let d = document.getElementById(Dialog.dialogid())

		if(typeof p?.callback === 'function')
			p.callback(p?.callback_params)
		document.getElementById(Dialog.dialogid()).getElementsByClassName("ok")[0].addEventListener("click",(e) => {
			e.preventDefault();
			if(typeof p?.callback_ok === 'function')
				p.callback_ok(
					document.getElementById("_aq_prompt_result").value,
					p?.callback_ok_params)
			d.close()
		})
		document.getElementById(Dialog.dialogid()).getElementsByClassName("cancel")[0].addEventListener("click",(e) => {
			e.preventDefault()
			d.close()
		})
		d.showModal()
	}
	/** 
	 * Pop-up dialog container
	 * @params {string} title 
	 * @params {string} template_id
	 * @params {object} p { 
	 * 		callback: 				a callback function that runs as soon as the dialog is created
	 * 		callback_params: 		parameters to pass to the callback
	 * }
	 * @returns {void}
	 * */
	static Container(title, template_id, p = null)
	{
		Dialog.Reset()
		const 	t = document.createElement("dialog")
				t.setAttribute("id",Dialog.dialogid())
				t.innerHTML = `
						<div class="flex header">
							<div class="c5 title">${title}</div>
							<div class="c1"></div>
							<div class="c1">
								<button type="button" class="close">X</button>
							</div>
						</div>					
						<div class="form"></div>
						<style>${p?.style}</style>
				`;
		document.body.appendChild(t)
		let tmp = document.getElementById(template_id)
        let clone = tmp.content.cloneNode(true)
		let d = document.getElementById(Dialog.dialogid())
		d.getElementsByClassName("form")[0].appendChild(clone)
		if(typeof p?.callback === 'function')
			p.callback(p?.callback_params)
		document.getElementById(Dialog.dialogid()).getElementsByClassName("close")[0].addEventListener("click",(e) => {
			e.preventDefault()
			d.close()
		})
		d.showModal()
	}
	/** 
	 * Pop-up dialog container whose data comes from an AJAX call
	 * @params {string} url
	 * @params {object} p { 
	 * 		callback: 				a callback function that runs as soon as the dialog is created
	 * 		callback_params: 		parameters to pass to the callback
	 * }
	 * @returns {void}
	 * */
	static AjaxContainer(url, p = null)
	{
		let params = (p?.params === undefined ? {} : p?.params)
		let title = (p?.title === undefined ? "" : p?.title)
		Dialog.Reset()
		get(url , function (response) {  
		    const 	t = document.createElement("dialog")
					t.setAttribute("id",Dialog.dialogid())
					t.innerHTML = `
							<div class="flex header">
								<div class="c5 title">${title}</div>
								<div class="c1"></div>
								<div class="c1">
									<button type="button" class="close">X</button>
								</div>
							</div>					
							<div class="form">
								${response}
							</div>
							<style>${p?.style}</style>
					`;
				document.body.appendChild(t)
			let d = document.getElementById(Dialog.dialogid())
			document.getElementById(Dialog.dialogid()).getElementsByClassName("close")[0].addEventListener("click",(e) => {
				e.preventDefault()
				d.close()
			})
			d.showModal()
		})
	}
}