(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(t,e,a){"use strict";a.r(e);var i=a(29),s=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"c-about"},[a("div",{staticClass:"container container--spaced"},[a("div",{staticClass:"grid"},[a("div",{staticClass:"2/3--lap-and-up 2/3--desk grid__cell"},[a("div",{staticClass:"c-about__info-blocks"},[a("div",{staticClass:"c-about__info-block"},[a("h2",[t._v("The finca")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus enim vitae euismod pharetra. Aliquam ipsum est, viverra at lectus ut, luctus auctor libero. Fusce sem leo, sollicitudin ut convallis at, egestas ac diam. Proin pharetra pulvinar rutrum. Nunc non neque ut massa tincidunt porta quis id neque. Integer gravida elit metus, non sodales nunc convallis vitae.")])]),a("div",{staticClass:"c-about__info-block"},[a("h2",[t._v("Accommodation")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus enim vitae euismod pharetra. Aliquam ipsum est, viverra at lectus ut, luctus auctor libero. Fusce sem leo, sollicitudin ut convallis at, egestas ac diam. Proin pharetra pulvinar rutrum. Nunc non neque ut massa tincidunt porta quis id neque. Integer gravida elit metus, non sodales nunc convallis vitae.")])]),a("div",{staticClass:"c-about__info-block"},[a("h2",[t._v("Vineyard & Wine")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus enim vitae euismod pharetra. Aliquam ipsum est, viverra at lectus ut, luctus auctor libero. Fusce sem leo, sollicitudin ut convallis at, egestas ac diam. Proin pharetra pulvinar rutrum. Nunc non neque ut massa tincidunt porta quis id neque. Integer gravida elit metus, non sodales nunc convallis vitae.")])])])]),a("div",{staticClass:"col-med-5 1/3--lap-and-up 1/3--desk grid__cell"},[a("div",{staticClass:"c-about__additional"},[a("h2",[t._v("News & special offers")]),a("p",[a("strong",[t._v("20%")]),t._v(" off remaining SEPTEMBER dates "),a("a",{attrs:{href:"#",title:"Book now"}},[t._v("CLICK HERE TO BOOK NOW >>>")])]),a("p",[t._v("Check out our "),a("a",{attrs:{href:"#",title:"Blog & social media"}},[t._v("BLOG & Social Media")])]),a("p",[t._v("Check out our "),a("a",{attrs:{href:"#",title:"Youtube"}},[t._v("YOUTUBE VIDEOS...")])]),a("h2",[t._v("Do you follow?")]),a("ul",{staticClass:"c-about__social-block"},[a("li",[a("a",{staticClass:"c-about__social-item c-about__social-item--facebook",attrs:{href:"#",title:"Facebook"}},[t._v("Facebook")])]),a("li",[a("a",{staticClass:"c-about__social-item c-about__social-item--twitter",attrs:{href:"#",title:"Twitter"}},[t._v("Twitter")])]),a("li",[a("a",{staticClass:"c-about__social-item c-about__social-item--pinterest",attrs:{href:"#",title:"Pinterest"}},[t._v("Pinterest")])]),a("li",[a("a",{staticClass:"c-about__social-item c-about__social-item--flickr",attrs:{href:"#",title:"flickr"}},[t._v("Instagram")])]),a("li",[a("a",{staticClass:"c-about__social-item c-about__social-item--skype",attrs:{href:"#",title:"Skype"}},[t._v("Skype")])]),a("li",[a("a",{staticClass:"c-about__social-item c-about__social-item--youtube",attrs:{href:"#",title:"Youtube"}},[t._v("Youtube")])])])])])])])])}],!1,null,null,null).exports,r=(a(121),{data:function(){return{clickInterval:null,currentItem:0,images:[{src:"http://www.fincamalvasia.com/images/home-gallery/1.jpg",caption:"Hotel image 1"},{src:"http://www.fincamalvasia.com/images/home-gallery/2.jpg",caption:"Hotel image 2"},{src:"http://www.fincamalvasia.com/images/home-gallery/3.jpg",caption:"Hotel image 3"},{src:"http://www.fincamalvasia.com/images/home-gallery/4.jpg",caption:"Hotel image 4"},{src:"http://www.fincamalvasia.com/images/home-gallery/5.jpg",caption:"Hotel image 5"},{src:"http://www.fincamalvasia.com/images/home-gallery/6.jpg",caption:"Hotel image 6"}]}},mounted:function(){var t=this;this.clickInterval=setInterval((function(){t.currentItem++,t.currentItem>t.images.length-1&&(t.currentItem=0)}),5e3)},methods:{changeImage:function(t){clearInterval(this.clickInterval),this.currentItem+=t.clientX-t.target.getBoundingClientRect().left>this.$refs.container.offsetWidth/2?1:-1,this.currentItem<0?this.currentItem=this.images.length-1:this.currentItem>this.images.length-1&&(this.currentItem=0)}}}),l=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{ref:"container",staticClass:"c-banner",on:{click:t.changeImage}},[a("div",{staticClass:"c-banner__items",attrs:{"data-banner-items":""}},t._l(t.images,(function(e,i){return a("img",{key:i,ref:"image",refInFor:!0,class:{"is--active":t.currentItem===i},attrs:{src:e.src,alt:e.caption}})})),0),a("ul",{staticClass:"c-banner__indicator"},t._l(t.images,(function(e,i){return a("li",{directives:[{name:"g-image",rawName:"v-g-image"}],key:i,class:{"is--active":t.currentItem===i},domProps:{innerHTML:t._s(e.text)}})})),0)])}),[],!1,null,null,null).exports,n=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"c-experiences"},[a("a",{attrs:{name:"experiences"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"grid"},[a("div",{staticClass:"grid__cell"},[a("ul",{staticClass:"c-experiences__items"},[a("li",{staticClass:"c-experiences__item"},[a("a",{attrs:{href:"#",title:"Learn to surf"}},[a("h3",[t._v("Learn to surf")]),a("img",{attrs:{src:"http://placeimg.com/640/480/any"}})]),a("div",{staticClass:"c-experiences__info"},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet ac urna vitae pharetra. Aliquam placerat felis quam, in aliquet ex imperdiet vel. Donec feugiat laoreet nunc non tristique. Nullam accumsan, nibh non vehicula efficitur, sapien metus dignissim justo, at porta tortor ex sit amet augue. Donec ut neque ipsum. ")])])]),a("li",{staticClass:"c-experiences__item"},[a("a",{attrs:{href:"#",title:"Learn to surf"}},[a("h3",[t._v("Wine testing & vineuard tour")]),a("img",{attrs:{src:"http://placeimg.com/640/480/any"}})]),a("div",{staticClass:"c-experiences__info"},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet ac urna vitae pharetra. Aliquam placerat felis quam, in aliquet ex imperdiet vel. Donec feugiat laoreet nunc non tristique. Nullam accumsan, nibh non vehicula efficitur, sapien metus dignissim justo, at porta tortor ex sit amet augue. Donec ut neque ipsum. ")])])]),a("li",{staticClass:"c-experiences__item"},[a("a",{attrs:{href:"#",title:"Learn to surf"}},[a("h3",[t._v("Boat charter & fishing trips")]),a("img",{attrs:{src:"http://placeimg.com/640/480/any"}})]),a("div",{staticClass:"c-experiences__info"},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet ac urna vitae pharetra. Aliquam placerat felis quam, in aliquet ex imperdiet vel. Donec feugiat laoreet nunc non tristique. Nullam accumsan, nibh non vehicula efficitur, sapien metus dignissim justo, at porta tortor ex sit amet augue. Donec ut neque ipsum. ")])])]),a("li",{staticClass:"c-experiences__item"},[a("a",{attrs:{href:"#",title:"Learn to surf"}},[a("h3",[t._v("Mountain & road bike hire")]),a("img",{attrs:{src:"http://placeimg.com/640/480/any"}})]),a("div",{staticClass:"c-experiences__info"},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet ac urna vitae pharetra. Aliquam placerat felis quam, in aliquet ex imperdiet vel. Donec feugiat laoreet nunc non tristique. Nullam accumsan, nibh non vehicula efficitur, sapien metus dignissim justo, at porta tortor ex sit amet augue. Donec ut neque ipsum. ")])])])])])])])])}],!1,null,null,null).exports,c=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"c-more-info"},[a("div",{staticClass:"container"},[a("div",{staticClass:"grid"},[a("div",{staticClass:"1/4--lap-and-up grid__cell"},[a("div",{staticClass:"c-more-info__newsletter"},[a("h2",[t._v("Finca Malvasia newsletter")]),a("p",[t._v("join our email newsletter to receive info and updates about events, availability & special offers.")]),a("form",{attrs:{method:"post",action:"#"}},[a("input",{staticClass:"c-more-info__email-input",attrs:{type:"email",name:"email",placeholder:"enter your email address"}}),a("input",{staticClass:"c-more-info__submit",attrs:{type:"submit",value:"Submit"}})])])]),a("div",{staticClass:"1/4--lap-and-up grid__cell"},[a("div",{staticClass:"c-more-info__wifi"},[a("h2",[t._v("Free WIFI")]),a("p",[t._v("All rooms have their own dedicated WIFI router included in the price.")])])]),a("div",{staticClass:"1/2--lap-and-up grid__cell"},[a("div",{staticClass:"c-more-info__press"},[a("h2",[t._v("Press")]),a("p",[t._v("A selection of publications Finca Malvasia has been featured")]),a("ul",[a("li",[a("a",{attrs:{href:"#",title:"The Observer"}},[t._v("The Observer")])]),a("li",[a("a",{attrs:{href:"#",title:"The Guardian"}},[t._v("The Guardian")])]),a("li",[a("a",{attrs:{href:"#",title:"The Sunday Times"}},[t._v("The Sunday Times")])]),a("li",[a("a",{attrs:{href:"#",title:"Independent"}},[t._v("Independent")])]),a("li",[a("a",{attrs:{href:"#",title:"The Telegraph"}},[t._v("The Telegraph")])])])])])])])])}],!1,null,null,null).exports,o={data:function(){return{containerWidth:0,currentItem:0,currentOffset:0,images:["http://www.fincamalvasia.com/images/home-gallery/1.jpg","http://www.fincamalvasia.com/images/home-gallery/2.jpg","http://www.fincamalvasia.com/images/home-gallery/3.jpg","http://www.fincamalvasia.com/images/home-gallery/4.jpg","http://www.fincamalvasia.com/images/home-gallery/5.jpg","http://www.fincamalvasia.com/images/home-gallery/6.jpg"]}},methods:{slideItem:function(t){this.currentItem+=t.clientX-t.target.getBoundingClientRect().left>this.$refs.container.offsetWidth/2?1:-1,this.currentItem<0?this.currentItem=this.images.length-1:this.currentItem>this.images.length-1&&(this.currentItem=0),this.currentOffset=-this.$refs.image[this.currentItem].offsetLeft}},mounted:function(){this.containerWidth=this.$refs.container.offsetWidth}},u={components:{PropertyItem:Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"container",staticClass:"c-property__item",on:{click:this.slideItem}},[e("div",{staticClass:"c-property__item-gallery",style:{width:100*this.images.length+"%",transform:"translateX("+this.currentOffset+"px)"}},this._l(this.images,(function(t,a){return e("img",{key:a,ref:"image",refInFor:!0,attrs:{src:t}})})),0),e("div",{staticClass:"c-property__item-spec"},[this._v("3 bedroom Private Villa & Pool - Sleeps up to 7 guests")]),e("h2",{attrs:{"data-slider-heading":""}},[this._v("La Finca")])]),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c-property__item-info"},[e("a",{attrs:{href:"#",title:"La Finca Overview"}},[this._v("La Finca Overview")]),e("a",{attrs:{href:"#",title:"View full descriptions & image gallery"}},[this._v("View full descriptions & image gallery")]),e("a",{attrs:{href:"#",title:"Book now"}},[this._v("Book now >>>")])])}],!1,null,null,null).exports}},m={components:{About:s,Banner:l,Experiences:n,MoreInfo:c,Property:Object(i.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"c-property"},[e("div",{staticClass:"container"},[e("div",{staticClass:"grid grid--flush"},[e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("PropertyItem")],1),e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("PropertyItem")],1),e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("PropertyItem")],1),e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("PropertyItem")],1),e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("PropertyItem")],1),e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("PropertyItem")],1)])]),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c-property__modal",attrs:{"data-gallery-modal":""}},[e("div",{staticClass:"c-property__modal-inner"},[e("button",{staticClass:"c-property__modal-close",attrs:{"data-gallery-close":""}},[this._v("Close")]),e("form",{attrs:{method:"post",action:""}},[e("h2",{attrs:{"data-gallery-heading":""}}),e("select",{attrs:{"data-gallery-selector":""}}),e("button",{staticClass:"e-button"},[this._v("Make a booking")])]),e("div",{staticClass:"c-property__modal-container",attrs:{"data-gallery-container":""}})])])}],!1,null,null,null).exports,Reservation:Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"c-reservation"},[a("div",{staticClass:"container container--spaced"},[a("div",{staticClass:"grid grid--middle"},[a("div",{staticClass:"1/6--lap-and-up 2/12--desk grid__cell"},[a("h2",[t._v("Online reservation enquiry")])]),a("div",{staticClass:"1/2--lap-and-up 7/12--desk grid__cell"},[a("form",{staticClass:"c-reservation__form",attrs:{action:"#",method:"post"}},[a("div",{staticClass:"c-reservation__field-container"},[a("label",{staticClass:"c-reservation__field c-reservation__field--arrival"},[a("span",[a("input",{attrs:{type:"date",name:"date_arrive"}})]),t._v("\n              Arrival Date\n            ")]),a("label",{staticClass:"c-reservation__field c-reservation__field--departure"},[a("span",[a("input",{attrs:{type:"date",name:"date_depart"}})]),t._v("\n              Departure Date\n            ")])]),a("div",{staticClass:"c-reservation__field-container"},[a("label",{staticClass:"c-reservation__field c-reservation__field--adults"},[t._v("\n              Adults\n              "),a("select",{attrs:{name:"num_adult"}},[a("option"),a("option",{attrs:{value:"1"}},[t._v("1")]),a("option",{attrs:{value:"2"}},[t._v("2")]),a("option",{attrs:{value:"3"}},[t._v("3")]),a("option",{attrs:{value:"4"}},[t._v("4")]),a("option",{attrs:{value:"5"}},[t._v("5")]),a("option",{attrs:{value:"6"}},[t._v("6")])])]),a("label",{staticClass:"c-reservation__field c-reservation__field--children"},[t._v("\n              Children\n              "),a("select",{attrs:{name:"num_child"}},[a("option"),a("option",{attrs:{value:"1"}},[t._v("1")]),a("option",{attrs:{value:"2"}},[t._v("2")]),a("option",{attrs:{value:"3"}},[t._v("3")]),a("option",{attrs:{value:"4"}},[t._v("4")]),a("option",{attrs:{value:"5"}},[t._v("5")]),a("option",{attrs:{value:"6"}},[t._v("6")])])]),a("button",{staticClass:"e-button"},[t._v("Check Availability")])])])]),a("div",{staticClass:"2/6--lap-and-up 3/12--desk grid__cell"},[a("div",{staticClass:"c-reservation__contact"},[a("a",{attrs:{href:"tel:0034 665 468 538",title:"Telephone us"}},[t._v("Telephone us: 0034 665 468 538")]),a("a",{attrs:{href:"email:into@fincamalvasia.com",title:"Email us"}},[t._v("Email us: info@fincamalvasia.com")])])])])])])}],!1,null,null,null).exports,Reviews:Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"c-reviews"},[e("div",{staticClass:"container container--spaced"},[e("div",{staticClass:"grid"},[e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("div",{staticClass:"c-reviews__block"},[e("blockquote",{staticClass:"c-reviews__quote c-reviews__quote--5"},[this._v('" My 9th visit and still totally in love with the place! "')]),e("p",[this._v("Lorem ipsum dolor sit amet, ad mei prima accusamus, inermis periculis an mea. Duo minim possim efficiantur id, duo eu omnes congue. Mucius dolorem interesset has ex, stet accumsan prodesset in usu, vis doctus fabulas an.")])])]),e("div",{staticClass:"1/2--lap-and-up grid__cell"},[e("div",{staticClass:"c-reviews__block"},[e("blockquote",{staticClass:"c-reviews__quote c-reviews__quote--5"},[this._v('" A very special place "')]),e("p",[this._v("Lorem ipsum dolor sit amet, ad mei prima accusamus, inermis periculis an mea. Duo minim possim efficiantur id, duo eu omnes congue. Mucius dolorem interesset has ex, stet accumsan prodesset in usu, vis doctus fabulas an.")])])])])])])}],!1,null,null,null).exports},metaInfo:{title:"Home"}},_=Object(i.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("Banner"),e("Reservation",{attrs:{modifier:"top"}}),e("About"),e("Property"),e("Reservation",{attrs:{modifier:"bottom"}}),e("Reviews"),e("Experiences"),e("MoreInfo")],1)}),[],!1,null,null,null);e.default=_.exports}}]);