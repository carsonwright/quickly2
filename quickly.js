  $(function(){
    /*
     * Models
     */
    $Object = Array();

    /*
     * Div
     */
    $Object["div"] = $("<div>");
    $Div = function(attr, content){
      $div = $Object["div"].clone().attr(attr);
      $div.html(content);
      return $div;
    }

    /*
     * I
     */
    $Object["i"] = $("<i>");
    $I = function(attr, content){
      $i = $Object["i"].clone().attr(attr);
      $i.html(content);
      return $i;
    }

    /*
     * P
     */
    $Object["p"] = $("<p>");
    $P = function(attr, content){
      $p = $Object["i"].clone().attr(attr);
      $p.html(content);
      return $p;
    }

    /*
     * Form
     */
    $Object["form"] = $("<form>");
    $Form = function(attr, content){
      $form = $Object["form"].clone().attr(attr);
      $form.html(content);
      return $form;
    }

    /*
     * Input
     */
    $Object["input"] = $("<input>");
    $Input = function(attr){
      $input = $Object["input"].clone().attr(attr);
      return $input;
    }

    /*
     * body
     */
    $body = $("body");

    /*
     * Input
     */
    $Object["input"] = $("<input>");

    /*
     * Label
     */
    $Object["label"] = $("<label>");
    $Label = function(attr, content){
      $label = $Object["label"].clone().attr(attr);
      $label.html(content);
      return $label;
    }

    $ControlGroup = function(controlName, controlType, attr){
      $controlGroup = $Div({class:"control-group"});
      $controlGroup.append($Label($.extend({class:"control-label", for:"input"+controlName}, attr["label"]), controlName));
      $controlGroup.append($Div({class:"controls"},
        $Input({type:controlType, id:"input"+controlName, placeholder:controlName})
      ));
      return $controlGroup;
    }

    $body.append(
      $Form({class:"form-horizontal"}).append(
        $ControlGroup("Test", "text", {}),
        $Input({type:"submit", class:"btn"})
      ),
      $Div({}, $Input({value:"test"}))
    );

    $(document).click(function(event){
      console.log($(event.target));
    });
  });

