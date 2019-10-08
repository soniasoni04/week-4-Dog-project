// move the elements of the array, so change the position of the options in the game

        // function move(arr, old_index, new_index) {
        //     while (old_index < 0) {
        //         old_index += arr.length;
        //     }
        //     while (new_index < 0) {
        //         new_index += arr.length;
        //     }
        //     if (new_index >= arr.length) {
        //         let k = new_index - arr.length;
        //         while ((k--) + 1) {
        //             arr.push(undefined);
        //         }
        //     }
        //     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
        // return arr;
        // }

        // console.log(move([10, 20, 30, 40, 50], 0, 3)); // now we can put random number at place of 2

// generate the random number so pic the images randomly 


//this program will pich randomly picked any element from the array//


var dogs = [
    {id :  1, name: "affenpinscher"}, 
    {id :  2, name: "african"}, 
    {id :  3, name: "bulldog"},
    {id :  4, name: "bullterrier"}, 
    {id :  5, name: "chihuahua"}, 
    {id :  6, name: "cockapoo"}]

var dogImages = [
    {id :  1, image: "Img1-affenpinscher"}, 
    {id :  2, image: "Img2-african"}, 
    {id :  3, image: "Img3-bulldog"},
    {id :  4, image: "Img4-bullterrier"}, 
    {id :  5, image: "Img5-chihuahua"}, 
    {id :  6, image: "Img6-cockapoo"}
]

var randomIndex = Math.floor(Math.random() * 6);
console.log('randomIndex', randomIndex)
console.log('dogImages : ', dogImages[randomIndex]);
console.log('dogs : ', dogs[randomIndex]); // correct answer

var ansArray =[]
ansArray.push(dogs[randomIndex])



     // array of option names with correct answer

    //var randomIndex = Math.floor(Math.random() * 5); 
    ansArray.push(dogs[Math.floor(Math.random() * 5)]) // added two more dogs names as an options 
    ansArray.push(dogs[Math.floor(Math.random() * 5)])


    console.log('ansArray : ',ansArray) // got the array with 2 options and correct answer

    
