(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{UcJB:function(e,t,a){"use strict";var r=a("tAuX"),d=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var n=d(a("Vl3Y"));a("IzEo");var l=d(a("bx4M"));a("5NDa");var u=d(a("5rEg")),i=d(a("2Taf")),o=d(a("vZ4D")),f=d(a("l4Ni")),c=d(a("ujKo")),s=d(a("MhPg")),m=r(a("q1tI")),p=a("y1Nh"),g=a("MuoO"),w=d(a("wd/R")),h=a("Y2fQ"),y=d(a("wMks")),v=d(a("rhDX")),b=d(a("hgAY")),M=d(a("YAFR")),E=d(a("3cOd")),k=function(e,t,a,r){var d,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,a,r);else for(var u=e.length-1;u>=0;u--)(d=e[u])&&(l=(n<3?d(l):n>3?d(t,a,l):d(t,a))||l);return n>3&&l&&Object.defineProperty(t,a,l),l},x=["\u221a","\xd7"],D=function(e){function t(){var e;return(0,i.default)(this,t),e=(0,f.default)(this,(0,c.default)(t).apply(this,arguments)),e.columns=[{title:(0,h.formatMessage)({id:"Name"}),dataIndex:"name",render:function(e,t){return m.default.createElement("a",{href:"/tag/".concat(t.id),target:"_blank",rel:"noopener noreferrer"},e)}},{title:(0,h.formatMessage)({id:"Keywords"}),dataIndex:"keywords"},{title:(0,h.formatMessage)({id:"Description"}),dataIndex:"description"},{title:(0,h.formatMessage)({id:"Status"}),width:80,dataIndex:"deleted_at",filters:[{text:x[0],value:"0"},{text:x[1],value:"1"}],render:function(e){return null===e?x[0]:x[1]}},{title:(0,h.formatMessage)({id:"Created_at"}),width:115,dataIndex:"created_at",sorter:!0,render:function(e){return m.default.createElement("span",null,(0,w.default)(e).format("YYYY-MM-DD"))}},{title:(0,h.formatMessage)({id:"Handle"}),width:110,render:function(t,a){return m.default.createElement(E.default,{dispatch:e.props.dispatch,meta:e.meta,rows:e.props.adminTag.data.list,selectedRow:a,namespace:"adminTag"})}}],e.meta=[{key:"name",label:"Name",widget:u.default,required:!0},{key:"keywords",label:"Keywords",widget:u.default,required:!0},{key:"description",label:"Description",widget:u.default,required:!0}],e}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return m.default.createElement(p.PageHeaderWrapper,null,m.default.createElement(l.default,{bordered:!1},m.default.createElement("div",{className:v.default.tableList},m.default.createElement(M.default,{meta:this.meta,actionType:"adminTag/add"}),m.default.createElement(y.default,{columns:this.columns,model:"adminTag"}))),m.default.createElement(b.default,null))}}]),t}(m.Component);D=k([(0,g.connect)(function(e){var t=e.adminTag;return{adminTag:t}})],D);var T=n.default.create()(D);t.default=T}}]);