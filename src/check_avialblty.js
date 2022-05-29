
// checks X|O positions contains winning combinations
export default function check_avialblty(x, y){
    let x_i = 0;
    let y_i = 0;
    
    while(x_i !== x.length){
        if(x[x_i] === y[y_i]){
          x_i++;
        y_i=0;
      }
      if(x[x_i] !== y[y_i]){
       y_i++;
      }
      if(y_i === y.length){
       return false
      }
     
    }
      return true
  }