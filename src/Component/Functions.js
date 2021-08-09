import config from '../config.json';
  const GetConfig = function (type,name){
    console.log(type,name)
    if(type==="Ko"){
    return config.kor[name]
    }else if(type==="En"){
    return config.eng[name]
    }
  }
  const ButtonColor = function(Language,SelectLanguage){
           if(Language === SelectLanguage){
              return "white"
          }else{
              return "rgba(0,0,0,0.2)"
          }
  }
  const ButtonTextColor = function(Language,SelectLanguage){
          if(Language === SelectLanguage){
              return "black"
          }else{
              return "white"
          }
  }
export {GetConfig, ButtonColor, ButtonTextColor};