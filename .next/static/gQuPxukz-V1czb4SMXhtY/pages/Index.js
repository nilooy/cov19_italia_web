(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ABnS:function(e,t,n){"use strict";n.r(t);var a=n("vDqi"),i=n.n(a),o=n("q1tI"),r=n.n(o),l=n("8lYe"),s=n("GLDP"),c=n("Z0Vm"),d=n("JVBY"),u=n("fVY+"),f=r.a.createElement;t.default=function(){var e=Object(o.useState)([]),t=e[0],n=e[1],a=Object(o.useState)(!1),r=a[0],p=a[1];Object(o.useEffect)((function(){w("province")}),[]);var w=function(e){i.a.get("https://cov19live.it/api/"+e).then((function(e){var t=e.data;t=t.filter((function(e){return"In fase di definizione/aggiornamento"!=e.denominazione_provincia})),n(t)}))};return f(u.a,null,f("main",{className:"container-fluid position-absolute h-100 bg-light"},f("div",{className:"row position-absolute w-100 h-100"},f("section",{className:"col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"},f(s.a,{darkMode:r,toggleDarkMode:function(){p(!r)}})),f("section",{className:"col-md-8 px-0 border-right border-left border-gray position-relative h-100"},f(c.a,{darkMode:r,cordinates:t}),f(l.a,null)),f("section",{className:"col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between px-1 py-1 "+(r?"darkMode":""),style:{overflowY:"scroll"}},f(d.a,{darkMode:r,getData:w,data:t})))))}},S4i4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Index",function(){return n("ABnS")}])}},[["S4i4",0,1,3,4]]]);