function init() {
  script.log("Custom module init");
}


function moduleParameterChanged(param) {
  script.log(param.name + " parameter changed, new value: " + param.get());
}

function moduleValueChanged(value) {
  script.log(value.name + " value changed, new value: " + value.get());
}

// This is the callback function for the "Custom command" command
function customCmd(val) {
  script.log("Custom command called with value " + val);
  local.parameters.moduleParam.set(val);
}