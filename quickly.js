var tag = $("<div class='well' ><div class='row tf-title text-center'>div</div></div>");
var currentKey = "";
var tagList = ["div", "form", "input:text.radio.password.checkbox.submit.select", "p", "a", "b", "i", "ul", "ol", "li", "label", "button"];

$(function(){
  reset_div();
  $("body").keydown(function(e){
    currentKey = e.which
  })
  $("body").keyup(function(){
    currentKey = false;
  })
  $settings = $("<div class='well settings'>");

  styles = $("<style>");
  styles.append(".tag:hover{border:1px dashed #aaa;margin:0px;}.tag{margin:1px;} .settings .btn{height:3em; }")
  $("head").append(styles);
  $(tagList).each(function(i, tagName){
    if(String(tagName).indexOf("input") != -1){
      type = String(tagName).split(":")[1].split(".");
      tagName = String(tagName).split(":")[0];
      $(type).each(function(i, type){
        var lTag = $("<div class='btn btn-default'><"+tagName+" type='"+type+"' disabled='true' /></div>")
        $settings.append(lTag);
      })
   }else{
      var lTag = $("<div class='btn btn-default'><"+tagName+" class='element pull-left' disabled=true>"+tagName+"</"+tagName+"></div>")
      $settings.append(lTag);
    }
  });
  $("body").prepend($settings)
  $settings.children().click(function(){
    tag = $(this).children().first();
    tagName = tag[0].tagName.toLowerCase();
    if(tagName != "input" && tagName != "button"){
      tag = $("<" + tagName  + " class='tag'><div class='row tf-title text-center'>" + tagName + "</div></" + tagName + ">");
    }else if(tagName == "input"){
      tag = $("<input type='"+tag.attr("type")+"' />");
    }else if(tagName == "button"){
      tag = $("<button>"+tagName+"</button>");
    }
    console.log(tag);
  })
})

var $currentTag = Object();
function reset_div(){
  $(".canvas").find(tagList.join(", ")).not(".tf-title").unbind();
  currentTag = $(this);
  $(".canvas").find(tagList.join(", ")).not(".tf-title").click(function(e){
    e.stopPropagation();
    if(currentKey == 18){
      $(this).append(tag.clone());
    }else{
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
    }
    reset_div();
  });
}
