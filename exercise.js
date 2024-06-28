// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const firstbuttonelement = document.querySelector('button'); //1st btn

const secondbuttonelement = document.getElementById('change-bg-btn');


// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// function removeparagraphfunction(){
// console.dir(firstbuttonelement);
// }
// function changebackgroundcolor(event){
// console.dir(event.target);
// }


// firstbuttonelement.addEventListener('click' ,removeparagraphfunction);
// secondbuttonelement.addEventListener('click' ,changebackgroundcolor)


// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
const firstparagraphelement =document.body.children[2].children[1];
console.log(firstparagraphelement)

// const thirdparagraphelement =document.body.children[2].children[3];
const thirdparagraphelement =firstparagraphelement.nextElementSibling.nextElementSibling;

console.log(thirdparagraphelement)

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
function removeparagraphfunction(){
   thirdparagraphelement.remove();
    }
    function changebackgroundcolor(event){
//   firstparagraphelement.style.backgroundColor ='blue'
     //firstparagraphelement.className='blue-bg'
     firstparagraphelement.classList.add('blue-bg')


    }
       
    firstbuttonelement.addEventListener('click' ,removeparagraphfunction);
    secondbuttonelement.addEventListener('click' ,changebackgroundcolor)

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!