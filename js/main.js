CUORE.Dom.ready(function() {
    // cache for labelService
    var currentLocale = (navigator.language || navigator.browserLanguage);
    document.labels = {};
    document.labels[currentLocale] = {
        
       // "a.key": "Text ",
        
    };
    
    CUORE.Bus.enableDebug();
    
    document.page = new CUORE.Page("http://www.anydomain.com");
    document.page.draw();
});