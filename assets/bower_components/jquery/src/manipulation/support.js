define(["../var/document","../var/support"],function(t,e){return function(){var n=t.createDocumentFragment(),i=n.appendChild(t.createElement("div")),r=t.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),i.appendChild(r),e.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,i.innerHTML="<textarea>x</textarea>",e.noCloneChecked=!!i.cloneNode(!0).lastChild.defaultValue}(),e});