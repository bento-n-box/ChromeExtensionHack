var quickKey = (function(){
    self = {

      init: function(){
        self.cacheSelectors();
        self.attachHandlers();

      },
      
      cacheSelectors: function(){
        self.dom = {};
        self.dom.win = $(window);
        self.dom.highlighted = ''; 
      },
      
      attachHandlers: function (){
        self.dom.win.on('click', function(e){
          self.getSelectedText();
        });
        self.dom.win.on('keypress', function(e){
          self.recordKeypress(e);
        });
      },

      getSelectedText: function (){
        var text = "";
        if(typeof window.getSelection != "undefined"){
          self.dom.highlighted = text = window.getSelection().toString();
          return text;
        }
        return false;
      },

      recordKeypress: function(event){
        if ( event.which === 20  ) {
          console.log( "You pressed CTRL + Del" );
          self.newTabSearch();
        }
      },

      newTabSearch: function(){
        chrome.tabs.create({'url': 'http://www.google.com'});
      }

    }
    return self;
})();
$(document).ready(function(){
  quickKey.init();
});
