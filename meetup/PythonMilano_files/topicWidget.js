!function(a){void 0===a.data(document.body,"topic-widget")&&a.data(document.body,"topic-widget",{});var b=require("state").Context.BaseUrl,c={contents:Handlebars.compile(['<div class="margin-bottom">','<h3 data-topicid="{{topicId}}">{{name}}</h3>',"{{#HAS_HEADER_SUBTEXT}}","<p>","{{{HEADER_SUBTEXT}}}","</p>","{{/HAS_HEADER_SUBTEXT}}","</div>","{{#NEEDS_SHOW_NEARBY_GROUPS}}",'<div class="other-meetups leading-top margin-bottom">','<p class="bold">',"{{{WIDGET_BODY_HEADER}}}","</p>","{{#nearbyGroups}}",'<div class="figureset">','<div class="figureset-figure">','<a class="mem-photo-small__TRACKING_CODE__" href="{{chapter_link}}">',"{{#photo_urls}}",'<img src="{{thumb}}" class="D_verticalMiddle" />',"{{/photo_urls}}","{{^photo_urls}}",'<img src="{{NOBODIES}}" />',"{{/photo_urls}}","</a>","</div>",'<div class="figureset-description padding-left">','<a class="groupname__TRACKING_CODE__" href="{{chapter_link}}">',"{{name}}","</a>","</div>","</div>","{{/nearbyGroups}}","</div>","{{/NEEDS_SHOW_NEARBY_GROUPS}}","{{#FOOTER_INTERESTS}}",'<div class="align-center leading-top topic-widget-footer{{#IF_NO_BODY}} no-body{{/IF_NO_BODY}}">','<a class="__TRACKING_CODE__ add-topic-lightly" href="#" data-topicid="{{topicId}}"></a>',"</div>","{{/FOOTER_INTERESTS}}","{{#FOOTER_REGISTRATION}}",'<div class="align-center leading-top topic-widget-footer{{#IF_NO_BODY}} no-body{{/IF_NO_BODY}}">','<a class="__TRACKING_CODE__ add-topic-lightly" href="#" data-topicid="{{topicId}}" data-topic="{{urlkey}}"></a>',"</div>","{{/FOOTER_REGISTRATION}}"].join("")),throbber:'<div class="loader"></div>',lightButton:Handlebars.compile(['<span class="lightly-copy"><span class="icon-xs {{SPRITE_CLASS}}">&nbsp;</span> {{COPY}}</span>'].join(""))};a.fn.topicWidget=function(d){var e={className:"topic-widget",placement:"right",rootClassName:"topic-widget-root",rootIdPrefix:"topic-widget-root-",calloutIdPrefix:"topic-widget-container-",trackingCode:"sj57"},f=a(this),g=null,h=null,i=null,j=a(".J_loginLink.headerLogin");if(0===f.length)return!1;a.extend(e,d||{}),g=[" omnCamp omngj_",e.trackingCode].join("");var k=function(b){var d=a(b),e=d.data("topicid"),f=a.data(document.body,"topic-widget")[e];if(f)i.innerHTML=f.contents,m(f.data.subscribed);else{i.innerHTML=c.throbber;var h={method:"getAlertTopicStats",arg_topicId:e,arg_lat:(_.isUndefined(Member.lat)?Chapter.lat:Member.lat)||Meetup.Geo.lat,arg_lon:(_.isUndefined(Member.lon)?Chapter.lon:Member.lon)||Meetup.Geo.lon,arg_radius:_.isUndefined(Member.radius)?25:Member.radius,arg_zip:(_.isUndefined(Member.zip)?Chapter.zip:Member.zip)||Meetup.Geo.zip,arg_country:(_.isUndefined(Member.country)?Chapter.country:Member.country)||Meetup.Geo.country,arg_language:Meetup.Language};a.ajax({dataType:"json",url:Chapter.id>0?Meetup.URL.chapterapi:Meetup.URL.api,data:h,error:function(){i.innerHTML=Meetup.trn("page_helpers.topic_widget.error","Sorry, we are currently unable to retrieve data.")},success:function(b){var d=n(b),h=c.contents(d);h=h.replace(/__TRACKING_CODE__/g,g),i.innerHTML=h,f={data:b,contents:h},a.data(document.body,"topic-widget")[e]=f,m(b.subscribed),pluginObj.widgetPopulated()}})}},l=function(b,d){var e,f={};d?(f.SPRITE_CLASS="icon-plus",f.COPY=Meetup.Copy.addToYourInterests):(f.SPRITE_CLASS="icon-minus",f.COPY=Meetup.Copy.removeFromYourInterests),e=c.lightButton(f),b.html(e),b.data("add",d),a(document.body).off("click",".popover .add-topic-lightly",o),a(document.body).on("click",".popover .add-topic-lightly",o)},m=function(b){var c,d=parseInt(h.find("h3").data("topicid"),10),e=h.find(".add-topic-lightly"),f=h.find(".topic-widget-footer");j.length>0||Member.id>0?(c=-1===a.inArray(d,Meetup.Topic.subscribed)?"true"!==b:!1,l(e,c),f.show()):f.hide()},n=function(b){var c=a.extend({},b);c.FOLLOW_THIS_TOPIC=Meetup.Copy.addToYourInterests;var d=parseInt(c.nearbyGroupCount,10),f=parseInt(c.groupCount,10),g=[],h=[" omnCamp omngj_",e.trackingCode].join("");if(isNaN(d)&&(d=0,c.nearbyGroupCountFmt=0),isNaN(f)&&(f=0,c.groupCountFmt=0),f&&(g[g.length]=f>1?getHandlebarsTemplate("Meetup.Copy.xGroupsGlobal",Meetup.Copy.xGroupsGlobal)({COUNT:c.groupCountFmt,HREF:'href="'+c.globalTopicLink+'"'}):getHandlebarsTemplate("Meetup.Copy.oneGroupGlobal",Meetup.Copy.oneGroupGlobal)({COUNT:1,HREF:'href="'+c.globalTopicLink+'"'})),g.length){c.HAS_HEADER_SUBTEXT=!0;var i=h;c.HEADER_SUBTEXT=g.join("<br />").replace(/__TRACKING_CODE__/g,i)}return d>0&&b.nearbyGroups&&b.nearbyGroups.length?(c.NEEDS_SHOW_NEARBY_GROUPS=!0,c.IF_NO_BODY=!1,d&&(c.WIDGET_BODY_HEADER=d>1?getHandlebarsTemplate("Meetup.Copy.xGroupsNearby",Meetup.Copy.xGroupsNearby)({COUNT:c.nearbyGroupCountFmt,HREF:'href="'+c.nearbyGroupUrl+'"',TRACKING_CLASS:h}):getHandlebarsTemplate("Meetup.Copy.oneGroupNearby",Meetup.Copy.oneGroupNearby)({COUNT:1,HREF:'href="'+c.nearbyGroupUrl+'"',TRACKING_CLASS:h}))):(c.NEEDS_SHOW_NEARBY_GROUPS=!1,c.IF_NO_BODY=!0),0===Member.id?c.FOOTER_REGISTRATION=!0:c.FOOTER_INTERESTS=!0,c.NOBODIES=Meetup.Data.icon_nobodies,c},o=function(c){c.preventDefault();var d=a(c.currentTarget),e=d.closest(".popover").find("h3").data("topicid"),f=-1===a.inArray(e,Meetup.Topic.subscribed);if(0!==Member.id)f?Meetup.Topic.addAlertTopic(e,function(){Meetup.Tracking.trackingServerTrack({code:"th_add"}),l(d,!1)}):Meetup.Topic.removeAlertTopic(e,function(){Meetup.Tracking.trackingServerTrack({code:"th_remove"}),l(d,!0)});else{var g=d.data("topic"),h=b+"subscribe/?";if(j.length){var i=[h,"topic=",g,"&returnUri=",encodeURIComponent(location.href)].join("");a('#loginForm input[name="returnUri"]').val(i),a('#baseSignUp input[name="returnUri"]').val(location.href),a('#baseSignUp input[name="c"]').val(""),a('#baseSignUp input[name="urlkey"]').val(""),a('#baseSignUp input[name="number"]').val(""),j.get(0).click()}}};new Meetup.InfoWidget(f,function(a,b){this.$infoContainer.addClass("topic-widget-container"),i=this.$infoContainer[0],h=this.$infoContainer.parent(),pluginObj=this,k(b)},e)}}(jQuery);
//# sourceMappingURL=topicWidget.map