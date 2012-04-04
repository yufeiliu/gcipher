/*
	gcipher by @yufeiliu
	(c) Yufei Liu
	Licensed under GPLv3
*/

(function(){
	if (/^https:\/\/mail\.google\.com/.test(document.location.href)) {
		function gcipher() {
			var sig = "{Encrypted with gcipher}";
			var pw = prompt("What is the password?");
			var c = new Blowfish(pw);
			var doc = document.querySelector("#canvas_frame").contentWindow.document;
			var allFrames = doc.querySelectorAll("iframe");
			var msgFrame = allFrames[allFrames.length-1];

			var decryptMode = (allFrames.length===0 || typeof(msgFrame)==="undefined" || typeof(msgFrame.contentWindow.document) === "undefined" || msgFrame.contentWindow.document.querySelector("body.editable")===null);

			if (decryptMode) {
				var msgContainers = doc.querySelectorAll("div.ii");
				for (var i = 0; i < msgContainers.length; i++) {
					var cur = msgContainers[i].children[0];
					if (typeof(cur)!=="undefined" && cur.innerHTML.substr(0,sig.length)===sig) {
						cur.innerHTML = c.decrypt(cur.innerHTML.substr(sig.length).replace(/<wbr>/g,"").replace(/\n/g,""));
					}
				}
			} else {
				var msgBody = msgFrame.contentWindow.document.querySelector("body.editable");
				msgBody.innerHTML = sig+c.encrypt(msgBody.innerHTML);
			}
		}

		//Load required library
		if (document.getElementById("blowfish-js")===null) {
			s=document.createElement("script");
			s.setAttribute("src","https://raw.github.com/yufeiliu/blowfish.js/master/blowfish.js");
			s.setAttribute("id","blowfish-js");
			s.onload = gcipher;
			document.body.appendChild(s);
		} else {
			gcipher();
		}
	} else {
		alert("gcipher only works on the Gmail web interface!");
	}
})();