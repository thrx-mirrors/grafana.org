/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
  }]
}
!*/
define(["Modernizr","docElement"],function(e,t){e.addTest("cssall","all"in t.style)});