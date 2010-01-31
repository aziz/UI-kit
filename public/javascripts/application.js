// -------- APP CODE HERE --------------------------------------------------------------------
$(function(){

// -------- Layout ---------------------------------------------------------------------------
var mainLayout = $('body').layout({ 
  defaults:{ fxName: "slide",  fxSpeed: "slow",  
             spacing_open: 1, spacing_closed: 0, scrollToBookmarkOnLoad: true , enableCursorHotkey: true },
  north: { resizable: false, size: 32, spacing_open: 0},
  west:  { minSize: 140, maxSize: 450,  size: 200, closable: false },
  east:  { minSize: 140, maxSize: 450,  size: 200, closable: true },
  // south: { resizable: false, size: 33, spacing_open: 0 },  
  center:{ }
});

$('.info-pane-toggle').click(function(){
  mainLayout.toggle('east');
  $(this).parent().toggleClass("selected");
  return false;
});

// -------- Tabs -----------------------------------------------------------------------------
$("#tabs").tabs();

// -------- Dialogs --------------------------------------------------------------------------
$("#new-component").dialog({
      autoOpen   : false,
      dialogClass: "dialog-sheet",
      draggable  : false,
      resizable : false,
      hide       : 'slide',
      show       : 'slide',      
      modal      : true,
      position   : ['center','top']
});

$('.new-com').click(function(){
  $("#new-component").dialog("open");
  return false;
});

$("#new-category").dialog({
      autoOpen   : false,
      dialogClass: "dialog-sheet",
      draggable  : false,
      resizable : false,
      hide       : 'slide',
      show       : 'slide',      
      modal      : true,
      position   : ['center','top']
});

$('.new-cat').click(function(){
  $("#new-category").dialog("open");
  return false;
});


// -------- Tree -----------------------------------------------------------------------------
$("#tree").tree({
            plugins : { contextmenu : { }  },
            ui : { theme_name : "apple",  dots : false,  animation: 100 },
            types : {
              "folder" : { renameable : true, deletable : true, creatable : true, draggable : true, valid_children : [ "file", "folder" ], icon : { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACH0lEQVR42qVSTWhTQRCe2RdjqEdz8FQEPSj0YFCqGLAppAHxYBGhaapV0LT+9aTGquCxePHUq1qb0FARsehBYmpjKAp66cWjB/Gm4q0oTd7OOPt2X/osBQXfezO7b36++XZmEf7zwUDv7htI9abPRh0rH94+gk/N+j8BpAq35s6P5gtmz854vzxfXalOjfwVYO/gxFQymcxkjxzeibjueL387rOtgBGq6/8kpb5++97EvnN3GndvX80AswvRgMoD8hna5IOxtwmgxRpYM2giIFkB43BvetoClK4UM6x9ByDRoIDIAqDEakILQAZARBMotVWOWW5i+szN+uXiWBaxLWmWqyGjRRkQ+UQkmVHE2kSLLQGzlZlFPHR6snbxwlhO+WuA0gRzEAMQhAkZDI7AQbLxWQB5VQLKsw/r2DtyozZeHM+x/1OibYMCAFMNXMUOoN0HfZQjVCozr/BA4XpteLSYi9Mv4M4QXTVDX2iYzpNjAE5r1QVP5x7UcX+hVD85dCqruBVxwx9VwyHanY0gFYeFJ9VFTA2XGkdP5DMerXVmDBwFkq7L6kWvHksTvQS8fPa4ifvypUb/MQHgVUlSdogSRBrsVDwLFnMMjChRfqwLlp7PC8DQtaX0wGD/FloFcgRdEctH2aSQQejXsW2wXFt4g3uOX3qhSW031shN3vThDRsP6Qd29xzs/vLxfcsVCUVtEHZXNBTTFr1jV0/8N9ftHlyo7PRXAAAAAElFTkSuQmCC"}  },
              "file"   : { renameable : true, deletable : true, creatable : true, draggable : true, valid_children : "none", icon : { image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAANkE3LLaAgAAAT9JREFUeJyNkSFvAkEUhOft3RVIoAaBrjl+AuJ+R9Okrg6B5AcQbAUC339Rh606GlSbYAmChDaQ1HBw+6aGuxA4lhs5+963M7uCo1qt1kO3231U1cyCqkJVEcfx12QyeYdLURQ9s0C73Y6r1YqDwWDsBHQ6nafz5cPhwPV6zdlsRpIcjUZvALzTPeOCep6HSqUCQLDdbtHr9V76/f5r6QQkmaYpN5sNp9NPxvGU8/mcYRhG2Z7v7HVM0Wg00G6HSJIEQRCg2Wy2AXyUAmSQer2OarUKYwxEJP+qUoB82PdzYCbnI5aCnhskQbJwWEQgIrDWXgKstVBVWGudgKxGYYL9fg9VdQKcFdI0vQm4WkFEvFqtdhMQBAF83/cuAMvl8nc4HH4DAK8QRESMMbJYLH5y7+T8DsB94dWX+gOQAMA/YTjF6dr/m9QAAAAASUVORK5CYII=" } }
            }
});
// --------------------------------------------------------------------------------------------
});