'use strict';
(function(){
    
    var model = function() {

        var a = [];
        var url="http://www.omdbapi.com/?page=1&s=";
        
        function getData(search="lord") {
            return $.get( url+search, function( data ) {
                console.log("Initial data is loaded");
                return data;
            })            
        }
        
        function saveData(item) {
            console.log("Data successfuly saved: ");
            console.log(item);
        }
        
        function updateData(data) {
            console.log("Data successfuly updated: " + data.counter + data.search);
            console.log(data);        
          
        }
        
        return {
            getData : getData,
            saveData: saveData,
            updateData: updateData
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();


    
}())
