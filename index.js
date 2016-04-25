!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){function e(e,a,i){var n=e.data("events")||t._data(e[0]).events,r=n[a],l=i?r.splice(r.delegateCount-1,1)[0]:r.pop();r.splice(i?0:r.delegateCount||0,0,l)}function a(a,i,n){var r=i.split(/\s+/);a.each(function(){for(var a=0;a<r.length;++a){var i=t.trim(r[a]).match(/[^\.]+/i)[0];e(t(this),i,n)}})}function i(e,a){this.element=e;var i=l.getDataOptions(e),r={};if(i.inheritValidationOptions){var o=t(e).parents("[data-validate], [data-validation-container]");o.length&&(r=l.getDataOptions(o.eq(0)))}this.options=t.extend(!0,{},t[n].defaults,t[n].globals,r,i,a),this.init()}t.fn.onFirst=function(e,i){var n=t(this),r="string"==typeof i;if(t.fn.on.apply(n,arguments),"object"==typeof e)for(var l in e)e.hasOwnProperty(l)&&a(n,l,r);else"string"==typeof e&&a(n,e,r);return n};var n="csssrValidation",r=["valid-class","invalid-class","valid-textarea-class","invalid-textarea-class","valid-select-class","invalid-select-class","valid-class-target","invalid-class-target","valid-textarea-class-target","invalid-textarea-class-target","valid-select-class-target","invalid-select-class-target","required-selector","numeric-selector","inputmode-selector","allow-empty-selector","pattern-attribute","input-pattern-attribute","inputmode-attribute","minlength-attribute","maxlength-attribute","min-attribute","max-attribute","type-attribute","remove-invalid-class-on","validate-fields-on","silent-validation-on","empty-value-msg","invalid-value-msg","empty-msg-target","invalid-msg-target","max-validation-level","inherit-validation-options"];t[n]=t[n]||{},t[n].defaults={requiredSelector:"[required], .js-required",requiredPreCheck:!1,numericSelector:'[inputmode="numeric"]',inputmodeSelector:"input[inputmode], input[data-input-pattern], textarea[data-input-pattern]",allowEmptySelector:"[data-allow-empty]",minMaxSelector:"input[min], input[max]",patternAttribute:"pattern",inputPatternAttribute:"data-input-pattern",inputmodeAttribute:"inputmode",minlengthAttribute:"minlength",maxlengthAttribute:"maxlength",minAttribute:"min",maxAttribute:"max",typeAttribute:"type",emptyValueMsg:"",emptyMsgTarget:!1,invalidValueMsg:"",invalidMsgTarget:!1,removeInvalidClassOn:"focus",validateFieldsOn:!1,silentValidationOn:!1,maxValidationLevel:Number.MAX_VALUE,inheritValidationOptions:!1,masks:{numbered:{has:function(t){return t.length&&"undefined"!=typeof t[0].numbered},valid:function(t,e){var a=this.has(t)&&new Numbered(t).validate();return a>0||e&&0===a},init:function(t){new Numbered(t)}},inputmask:{selector:"[data-inputmask]",has:function(t){return t.inputmask("getemptymask").length},valid:function(t){return t.inputmask("isComplete")},init:function(t){t.inputmask()}}},patterns:{email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/},inputPatterns:{cyrillic:/[а-яёії\s]/i,latin:/[a-z\s]/i,numeric:/[0-9]/,letters:/[a-zа-яёії\s]/i,email:/[a-zа-яёії0-9\.\-_@]/i,phone:/[\+0-9]/}};var l={capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},_onSubmit:function(e){var a=t.data(e.target,n),i=l.validate.apply(a,[]);return i&&"validate"!==e.type||e.stopImmediatePropagation(),i&&a.element.trigger("valid"),i},_onSilentValidate:function(){var e=t(this),a=e.closest("form, [data-validation-container]").data(n);a.element.trigger(l.validate.apply(a,[!1,!0])?"valid":"invalid")},_onValidateField:function(){var e=t(this),a=e.closest("form, [data-validation-container]").data(n);l.validate.apply(a,[e])},_onRemoveInvalidClass:function(){var e=t(this),a=e.closest("form, [data-validation-container]").data(n);l.toggleClass(e,!1,a.options.invalidClass,a.options.invalidClassTarget)},_onBlur:function(){var e=t(this),a=e.closest("form, [data-validation-container]").data(n),i=e.filter(a.options.numericSelector).length,r=e.filter(a.options.requiredSelector).length,l=e.attr(a.options.minAttribute),o=e.attr(a.options.maxAttribute);i&&(r||e.val())&&(l>Number(e.val())?e.val(l):o<Number(e.val())&&e.val(o))},_onKeyDown:function(e){var a=t(this),i=a.closest("form, [data-validation-container]").data(n),r=a.filter(i.options.numericSelector).length;!r||-1!==t.inArray(e.keyCode,[46,8,9,27,13,110])||65===e.keyCode&&e.ctrlKey===!0||e.keyCode>=35&&e.keyCode<=39||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()},_onKeyPress:function(e){var a=t(this),i=a.closest("form, [data-validation-container]").data(n),r=l.getMask(a,i.options.masks),o=r?!1:l.getPattern.apply(i,[a,i.options.inputmodeAttribute,i.options.inputPatternAttribute,i.options.inputPatterns]),s=a.attr(i.options.maxlengthAttribute)||Number.POSITIVE_INFINITY,u=e.key||String.fromCharCode(e.which||e.keyCode);return a.val().length<=s&&(!o.length||l.matchesPatterns(u,o))},getDataOptions:function(e){var a={};return t.each(r,function(i,n){var r=e.data(n);void 0!==r&&(a[t.camelCase(n)]=r)}),a},getMask:function(e,a){for(var i in a)if(a.hasOwnProperty(i)&&void 0!==t.fn[i]&&(mask=a[i]).has(e))return mask;return!1},getPattern:function(e,a,i,n){var r=e.attr(a),l=e.attr(i),o=[],s=r?r.split(","):[];return l&&o.push(new RegExp(l)),t.each(s,function(t,e){var a="!"===e[0];void 0!==n[a?e.slice(1):e]&&o.push(a?function(t){return a===(null===t.match(new RegExp(n[e.slice(1)])))}:new RegExp(n[e]))}),o},getTarget:function(e,a){if(-1!==a.indexOf("/")){var i=a.split("/");return e[i[0]](i[1])}return t(a)},toggleClass:function(t,e,a,i){a&&(i?l.getTarget(t,i).toggleClass(a,e):t.toggleClass(a,e))},matchesPatterns:function(e,a){var i=!0;return t.each(a,function(a,n){i=i&&(t.isFunction(n)?n(e):null!==e.match(n))}),i},validate:function(e,a){var i=this,r=t.extend(!0,{},i.options,t[n].globals||{}),o=t.grep([r.requiredSelector||"",r.numericSelector||"",r.minMaxSelector||"",r.inputmodeSelector||""],function(t){return""!==t}).join(","),s=!0;return e=e?e.filter(o):i.element.find(o),r.requiredPreCheck&&(e=e.filter(r.requiredPreCheck)),e.each(function(){var e=t(this),n=l.getDataOptions(e);if("undefined"!=typeof n.maxValidationLevel&&Number(n.maxValidationLevel)<Number.MAX_VALUE){var o=e.parents("[data-validate], [data-validation-container]").filter(function(t,e){return n.maxValidationLevel>=t&&e===i.element[0]}).length;if(!o)return!0}var u=l.getMask(e,r.masks),d=u?!1:l.getPattern.apply(i,[e,"type",r.patternAttribute,r.patterns]),c=e.filter(r.allowEmptySelector).length||!e.filter(r.requiredSelector).length,v=e.attr(r.maxlengthAttribute)||Number.POSITIVE_INFINITY,m=e.attr(r.minlengthAttribute)||0,p=e.val().length,F=e.filter(r.numericSelector).length,g=e.attr(r.minAttribute),f=e.attr(r.maxAttribute),h=e.data("equal-to"),x="checkbox"===(e.attr(r.typeAttribute)||"").toLowerCase(),b=!e.val(),y=x?e.length&&e[0].checked:(c&&b||u&&u.valid(e,c)||d.length&&l.matchesPatterns(e.val(),d)||!u&&!d.length&&p>0)&&p>=Number(m)&&p<=Number(v)&&(!F||(void 0===g||Number(g)<=Number(e.val()))&&(void 0===f||Number(f)>=Number(e.val())));if(y&&h&&(y=t(h).val()===e.val()),!a){l.toggleClass(e,!y,n.invalidClass||r["invalid"+l.capitalize(e[0].tagName.toLowerCase())+"Class"]||r.invalidClass,n.invalidClassTarget||r["invalid"+l.capitalize(e[0].tagName.toLowerCase())+"ClassTarget"]||r.invalidClassTarget);var C=n.emptyValueMsg||r.emptyValueMsg||!1,D=n.emptyMsgTarget||r.emptyMsgTarget||!1,A=n.invalidValueMsg||r.invalidValueMsg||!1,k=n.invalidMsgTarget||r.invalidMsgTarget||!1;C&&D&&l.getTarget(e,D).text(b?C:""),!b&&A&&k&&l.getTarget(e,k).text(y?"":A),l.toggleClass(e,y,n.validClass||r["valid"+l.capitalize(e[0].tagName.toLowerCase())+"Class"]||r.validClass,n.validClassTarget||r["valid"+l.capitalize(e[0].tagName.toLowerCase())+"ClassTarget"]||r.validClassTarget)}s=s&&y}),s}};i.prototype={init:function(){var e=this;e.element.on("keydown",e.options.numericSelector,l._onKeyDown),e.element.on("keypress",e.options.inputmodeSelector,l._onKeyPress),e.element.on("blur",e.options.minMaxSelector,l._onBlur),e.element.attr("novalidate",!0).onFirst("submit validate.csssr",l._onSubmit),e.options.removeInvalidClassOn&&e.element.on(e.options.removeInvalidClassOn,"input, textarea",l._onRemoveInvalidClass),e.options.validateFieldsOn&&e.element.on(e.options.validateFieldsOn,"input, textarea",l._onValidateField),e.options.silentValidationOn&&e.element.on(e.options.silentValidationOn,"input, textarea",l._onSilentValidate),t.each(e.options.masks,function(a,i){i.selector&&void 0!==t.fn[a]&&i.init(e.element.find(i.selector))})},destroy:function(){this.element.off("submit."+n+" validate.csssr",l._onSubmit).removeData(n)}},t.fn[n]=function(e){var a=arguments;return this.each(function(){var r=t.data(this,n);if(r)return e&&e.substring&&r[e].apply(r,[].splice.call(a,1)),!0;if(e&&e.substring)throw new Error(n+" not available for this DOM element!");return r=t(this),r.data(n,new i(r,e)),!0})},t(function(){t("body").onFirst("submit","form[data-validate]:not([novalidate])",function(e){e.preventDefault(),e.stopImmediatePropagation(),t(this).csssrValidation().submit()}),t("body").onFirst("validate.csssr","[data-validation-container]:not([novalidate])",function(e){var a=t(this);return a.data(n)?!0:(e.preventDefault(),e.stopImmediatePropagation(),a.csssrValidation().trigger("validate.csssr"),void 0)}),t("body").on("click","[data-validation-trigger]",function(){t(this).closest("[data-validation-container]").trigger("validate.csssr")}),t("form[data-validate]:not([novalidate]), [data-validation-container]:not([novalidate])").csssrValidation()})});