//= require mithril
//= require underscore
//= require mithril.postgrest
//= require catarse_admin
//= require_self

var adminRoot = document.getElementById("new-admin")
debugger;
m.postgrest.init(adminRoot.getAttribute('data-api'), {method: "GET", url: "/api_token"});
m.module(adminRoot, adminApp.AdminContributions);
