const students = ["Nazanin","Farshta","Gull"];
students.unshift("Sara");
// 
for(let i = 0; i<20; i++){
    if(i%2 ===0){
        console.log(i)
    }
}
// 
function deletewhiteSpace(text){
let start = 0;
let end = text.length-1;
for(let i = 0; i<text.length; i++){
    if(text[i]!==''){
        start = i;
        break;
    }
}

for(let i = 0; i<= text.length-1; i--){
    if(text[i]!==''){
        end = i;
    }
}
return result(start,end);
}
const result = deletewhiteSpace(" Hello JS ");
// 
