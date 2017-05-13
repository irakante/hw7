'use strict';
(function() {

    function Gallery (items) {        
        this.DOMElements = {
            saveBtn     : document.querySelector("#saveBtn"),
            refreshBtn  : document.querySelector("#refreshBtn"),
            searchInput : document.querySelector("#searchInp")
        };

        //this.saveDefer = $.Deferred();
        this.items = items;
        this.counter = 0;
        this.search = "";
        
        this.eventHolder = $({});
        this.updateEventName = "update";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery();
            this.initListeners();
            this.showGallery();
        },
        
        buildGallery : function () {
            console.log("Gallery is ready");
            console.log(this.items.Search);
        },
        
        showGallery:  function () {           
           
            var tmpl = document.getElementById('grid-template').innerHTML.trim();
            tmpl = _.template(tmpl);


            document.getElementById('grid-holder').innerHTML = tmpl({
            list: this.items.Search
            });

            
        },


        initListeners : function () {
            
            /*this.DOMElements.saveBtn.addEventListener("click", () => {
                let item = this.items[0];
                item.name = "New name";
                this.saveDefer.resolve(item);
            });*/
            
            this.DOMElements.refreshBtn.addEventListener("click", () => {
                this.search = this.DOMElements.searchInput.value;
                this.eventHolder.trigger( this.updateEventName , [{counter: this.counter++, search: this.search}]);
            });
        } 

    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());
