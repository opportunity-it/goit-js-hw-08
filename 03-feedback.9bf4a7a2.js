!function(){var e={form:document.querySelector(".feedback-form")},r={save:function(e,r){try{var t=JSON.stringify(r);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var r=localStorage.getItem(e);return null===r?void 0:JSON.parse(r)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},t={},o="feedback-form-state";e.form.addEventListener("input",(function(e){var a=e.target,n=a.name,c=a.value;t[n]=c,r.save(o,t)})),function(){var a=r.load(o);if(a)for(var n in a)e.form[n].value=a[n],t[n]=a[n]}()}();
//# sourceMappingURL=03-feedback.9bf4a7a2.js.map
